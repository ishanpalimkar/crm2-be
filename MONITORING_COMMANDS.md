# 🔧 Practical Monitoring Commands Guide
## Essential Commands for Cloudflare Workers & Workflows Monitoring

### Table of Contents
1. [Real-Time Monitoring](#real-time-monitoring)
2. [Log Analysis & Debugging](#log-analysis--debugging)
3. [Performance Analysis](#performance-analysis)
4. [Error Investigation](#error-investigation)
5. [Workflow-Specific Monitoring](#workflow-specific-monitoring)
6. [Deployment & Health Checks](#deployment--health-checks)
7. [Alerting & Notifications](#alerting--notifications)
8. [Troubleshooting Commands](#troubleshooting-commands)

---

## 🔴 Real-Time Monitoring

### **Live Tail Logs**
```bash
# Real-time logs for sandbox environment
wrangler tail --env sandbox

# Real-time logs for production
wrangler tail --env production

# Pretty formatted logs
wrangler tail --env sandbox --format pretty

# JSON formatted logs for analysis
wrangler tail --env sandbox --format json

# Filter logs by HTTP method
wrangler tail --env sandbox --method POST

# Filter logs by status code
wrangler tail --env sandbox --status-code 500
```

### **Live Workflow Monitoring**
```bash
# Monitor workflow-specific logs
wrangler tail --env sandbox --format pretty | grep "WORKFLOW"

# Monitor only error logs
wrangler tail --env sandbox --format pretty | grep "ERROR"

# Monitor performance logs
wrangler tail --env sandbox --format pretty | grep "PERFORMANCE"

# Monitor specific workflow execution
wrangler tail --env sandbox --format json | jq 'select(.message | contains("wf_1749715843676"))'

# Monitor alerts in real-time
wrangler tail --env sandbox --format pretty | grep "ALERT"
```

### **Real-Time Metrics via API**
```bash
# Get current worker status
curl -X GET "https://crm2-be-sandbox.your-subdomain.workers.dev/health" \
  -H "Content-Type: application/json"

# Monitor specific workflow status
curl -X GET "https://crm2-be-sandbox.your-subdomain.workers.dev/api/v1/taol/program-types/workflow/{workflowId}" \
  -H "Content-Type: application/json"

# Health check with detailed metrics
curl -X GET "https://crm2-be-sandbox.your-subdomain.workers.dev/health/detailed" \
  -H "Content-Type: application/json"
```

---

## 📊 Log Analysis & Debugging

### **Export and Analyze Logs**
```bash
# Export 1 hour of logs to file
wrangler tail --env sandbox --format json | head -1000 > logs_$(date +%Y%m%d_%H%M%S).json

# Export only error logs
wrangler tail --env sandbox --format json | jq 'select(.level == "ERROR")' > error_logs.json

# Export workflow logs
wrangler tail --env sandbox --format json | jq 'select(.message | contains("WORKFLOW"))' > workflow_logs.json
```

### **Log Analysis with jq**
```bash
# Count log levels
cat logs.json | jq -r '.level' | sort | uniq -c

# Find most common errors
cat logs.json | jq -r 'select(.level == "ERROR") | .error.message' | sort | uniq -c | sort -nr

# Analyze workflow execution times
cat logs.json | jq -r 'select(.level == "PERFORMANCE") | {step: .step, duration: .duration}' | jq -s 'group_by(.step) | map({step: .[0].step, avg_duration: (map(.duration) | add / length)})'

# Find slowest operations
cat logs.json | jq -r 'select(.level == "PERFORMANCE") | {step: .step, duration: .duration}' | jq -s 'sort_by(.duration) | reverse | .[0:10]'

# Count workflow executions by status
cat logs.json | jq -r 'select(.workflowId) | .message' | grep -E "(completed|failed)" | sort | uniq -c
```

---

## ⚡ Performance Analysis

### **Performance Metrics Commands**
```bash
# Analyze average response times
cat logs.json | jq -r 'select(.level == "PERFORMANCE") | .duration' | awk '{sum += $1; count++} END {print "Average duration: " sum/count "ms"}'

# Find 95th percentile response time
cat logs.json | jq -r 'select(.level == "PERFORMANCE") | .duration' | sort -n | awk '{arr[NR] = $1} END {print "95th percentile: " arr[int(NR*0.95)] "ms"}'

# Memory usage analysis
cat logs.json | jq -r 'select(.metadata.memoryUsage) | .metadata.memoryUsage.heapUsed' | awk '{sum += $1; count++} END {print "Average memory: " sum/count " bytes"}'

# Throughput analysis
cat logs.json | jq -r 'select(.metrics.throughput) | .metrics.throughput' | awk '{sum += $1; count++} END {print "Average throughput: " sum/count " items/sec"}'
```

---

## 🚨 Error Investigation

### **Error Analysis Commands**
```bash
# Find all unique errors
cat logs.json | jq -r 'select(.level == "ERROR") | .error.message' | sort | uniq

# Count errors by category
cat logs.json | jq -r 'select(.level == "ERROR_TRACKED") | .category' | sort | uniq -c

# Find errors with stack traces
cat logs.json | jq 'select(.level == "ERROR" and .error.stack)'

# Analyze error frequency over time
cat logs.json | jq -r 'select(.level == "ERROR") | .timestamp' | cut -c1-13 | sort | uniq -c
```

---

## 🔄 Workflow-Specific Monitoring

### **Workflow Execution Tracking**
```bash
# Track workflow lifecycle
cat logs.json | jq -r 'select(.workflowId and (.step == "workflow-start" or .step == "workflow-complete" or .step == "workflow-failed")) | {workflow: .workflowId, step: .step, timestamp: .timestamp}'

# Monitor workflow success rate
cat logs.json | jq -r 'select(.step == "workflow-complete" or .step == "workflow-failed") | .step' | sort | uniq -c

# Find long-running workflows
cat logs.json | jq -r 'select(.step == "workflow-complete") | {workflow: .workflowId, duration: .data.totalDuration}' | jq -s 'sort_by(.duration) | reverse | .[0:10]'
```

### **Real-Time Workflow Status**
```bash
# Check active workflows
curl -s "https://crm2-be-sandbox.your-subdomain.workers.dev/api/v1/taol/program-types/workflows/active" | jq '.'

# Monitor specific workflow progress
WORKFLOW_ID="wf_1749715843676_2nd3ofqlt"
curl -s "https://crm2-be-sandbox.your-subdomain.workers.dev/api/v1/taol/program-types/workflow/$WORKFLOW_ID" | jq '.data | {status: .status, currentStep: (.steps[] | select(.status == "running") | .name)}'
```

---

## 🚀 Deployment & Health Checks

### **Deployment Monitoring**
```bash
# Test deployment health
curl -f "https://crm2-be-sandbox.your-subdomain.workers.dev/health" || echo "❌ Health check failed"

# Comprehensive health check
curl -s "https://crm2-be-sandbox.your-subdomain.workers.dev/health/detailed" | jq '{status: .status, database: .checks.database, workflow: .checks.workflow}'

# Test API endpoints
curl -X POST "https://crm2-be-sandbox.your-subdomain.workers.dev/api/v1/taol/program-types" \
  -H "Content-Type: application/json" \
  -d '{"data": [{"programTypeId": "test-123", "programTypeName": "Test Program"}], "batchSize": 1}' | jq '.status'
```

### **Deployment Validation Script**
```bash
#!/bin/bash
echo "🔍 Validating deployment..."

# Health check
if curl -f -s "https://crm2-be-sandbox.your-subdomain.workers.dev/health" > /dev/null; then
    echo "✅ Health check passed"
else
    echo "❌ Health check failed"
    exit 1
fi

# API endpoint test
response=$(curl -s -X POST "https://crm2-be-sandbox.your-subdomain.workers.dev/api/v1/taol/program-types" \
  -H "Content-Type: application/json" \
  -d '{"data": [{"programTypeId": "deploy-test", "programTypeName": "Deployment Test"}], "batchSize": 1}')

if echo "$response" | jq -e '.status == "success"' > /dev/null; then
    echo "✅ API endpoint test passed"
else
    echo "❌ API endpoint test failed"
    exit 1
fi

echo "🎉 Deployment validation completed successfully"
```

---

## 📢 Alerting & Notifications

### **Alert Monitoring Commands**
```bash
# Monitor real-time alerts
wrangler tail --env production --format json | jq -r 'select(.level == "ALERT") | "🚨 " + .alertType + ": " + (.data | tostring)'

# Count alerts by type
cat logs.json | jq -r 'select(.level == "ALERT") | .alertType' | sort | uniq -c

# Find high-severity alerts
cat logs.json | jq 'select(.level == "ALERT" and .severity == "HIGH")'
```

### **Custom Alert Script**
```bash
#!/bin/bash
ERROR_THRESHOLD=5 # 5% error rate
SAMPLE_SIZE=100

error_rate=$(wrangler tail --env production --format json | head -$SAMPLE_SIZE | jq -r '.level' | awk '
/ERROR/ {errors++} 
END {total=NR; if(total>0) print (errors/total)*100; else print 0}')

if (( $(echo "$error_rate > $ERROR_THRESHOLD" | bc -l) )); then
    echo "🚨 High error rate detected: $error_rate%"
    # Send notification here
fi
```

---

## 🔧 Troubleshooting Commands

### **Quick Diagnostics**
```bash
echo "=== Quick Diagnostics ==="
echo "1. Health Check:"
curl -s "https://crm2-be-sandbox.your-subdomain.workers.dev/health" | jq '.status'

echo "2. Recent Errors:"
wrangler tail --env sandbox --format json | head -50 | jq -r 'select(.level == "ERROR") | .error.message' | sort | uniq -c

echo "3. Active Workflows:"
curl -s "https://crm2-be-sandbox.your-subdomain.workers.dev/api/v1/taol/program-types/workflows/active" | jq '.data | length'
```

### **Emergency Commands**
```bash
echo "🚨 EMERGENCY STATUS CHECK 🚨"

# Check if worker is responding
if curl -f -s "https://crm2-be-production.your-subdomain.workers.dev/health" > /dev/null; then
    echo "✅ Worker is responding"
else
    echo "❌ Worker is not responding"
fi

# Check for critical errors
echo "Recent Critical Issues:"
wrangler tail --env production --format json | head -10 | jq -r 'select(.level == "ERROR" or .level == "ALERT") | "- " + .level + ": " + .message'
```

---

## 🎯 Quick Reference

### **Most Common Commands**
```bash
# Real-time monitoring
wrangler tail --env sandbox --format pretty

# Health check
curl "https://crm2-be-sandbox.your-subdomain.workers.dev/health"

# Export recent logs
wrangler tail --env sandbox --format json | head -100 > recent_logs.json

# Find errors
cat logs.json | jq 'select(.level == "ERROR")'

# Monitor workflow
cat logs.json | jq 'select(.workflowId)'

# Performance analysis
cat logs.json | jq 'select(.level == "PERFORMANCE")'
```

### **Emergency Quick Checks**
```bash
# 1. Is the service up?
curl -f "https://crm2-be-production.your-subdomain.workers.dev/health"

# 2. Any critical errors?
wrangler tail --env production --format json | head -10 | jq 'select(.level == "ERROR" or .level == "ALERT")'

# 3. Workflow status?
curl "https://crm2-be-production.your-subdomain.workers.dev/api/v1/taol/program-types/workflows/active"
```

---

This comprehensive monitoring commands guide provides all the essential tools to effectively monitor, debug, and maintain your Cloudflare Workers and workflows in production! 🎯 