#!/bin/bash

echo "🚀 Cloudflare Workflows Testing Script"
echo "=====================================\n"

BASE_URL="http://localhost:8787/api/v1/taol/program-types"

# Function to test and display results
test_endpoint() {
    local description="$1"
    local curl_command="$2"
    
    echo "📋 Test: $description"
    echo "🔗 Command: $curl_command"
    echo "📊 Response:"
    eval $curl_command | jq
    echo "\n---\n"
}

# Test 1: Small batch (single batch processing)
echo "🧪 TEST 1: Single Batch Processing (2 items)"
test_endpoint "Single Batch Workflow" \
"curl -s -X POST $BASE_URL -H 'Content-Type: application/json' -d '{\"data\":[{\"programTypeId\":\"ptyp_single_01\",\"programTypeName\":\"Single Batch Test 1\",\"description\":\"Testing single batch\",\"typicalDuration\":\"1 day\",\"format\":\"Online\",\"targetAudience\":\"Test\",\"defaultBaseFee\":1000,\"isEntryLevel\":true,\"isAdvancedLevel\":false,\"isKidsProgram\":false,\"healthDeclarations\":\"Test\",\"isActive\":true},{\"programTypeId\":\"ptyp_single_02\",\"programTypeName\":\"Single Batch Test 2\",\"description\":\"Testing single batch\",\"typicalDuration\":\"2 days\",\"format\":\"Online\",\"targetAudience\":\"Test\",\"defaultBaseFee\":1100,\"isEntryLevel\":true,\"isAdvancedLevel\":false,\"isKidsProgram\":false,\"healthDeclarations\":\"Test\",\"isActive\":true}]}'"

# Test 2: Multi-batch processing (6 items = 2 batches)
echo "🧪 TEST 2: Multi-Batch Processing (6 items = 2 batches)"
test_endpoint "Multi-Batch Workflow" \
"curl -s -X POST $BASE_URL -H 'Content-Type: application/json' -d '{\"data\":[{\"programTypeId\":\"ptyp_multi_01\",\"programTypeName\":\"Multi Batch 1\",\"description\":\"First batch\",\"typicalDuration\":\"1 day\",\"format\":\"Online\",\"targetAudience\":\"Test\",\"defaultBaseFee\":1000,\"isEntryLevel\":true,\"isAdvancedLevel\":false,\"isKidsProgram\":false,\"healthDeclarations\":\"Test\",\"isActive\":true},{\"programTypeId\":\"ptyp_multi_02\",\"programTypeName\":\"Multi Batch 2\",\"description\":\"First batch\",\"typicalDuration\":\"2 days\",\"format\":\"Online\",\"targetAudience\":\"Test\",\"defaultBaseFee\":1100,\"isEntryLevel\":true,\"isAdvancedLevel\":false,\"isKidsProgram\":false,\"healthDeclarations\":\"Test\",\"isActive\":true},{\"programTypeId\":\"ptyp_multi_03\",\"programTypeName\":\"Multi Batch 3\",\"description\":\"First batch\",\"typicalDuration\":\"3 days\",\"format\":\"Online\",\"targetAudience\":\"Test\",\"defaultBaseFee\":1200,\"isEntryLevel\":true,\"isAdvancedLevel\":false,\"isKidsProgram\":false,\"healthDeclarations\":\"Test\",\"isActive\":true},{\"programTypeId\":\"ptyp_multi_04\",\"programTypeName\":\"Multi Batch 4\",\"description\":\"First batch\",\"typicalDuration\":\"4 days\",\"format\":\"Online\",\"targetAudience\":\"Test\",\"defaultBaseFee\":1300,\"isEntryLevel\":true,\"isAdvancedLevel\":false,\"isKidsProgram\":false,\"healthDeclarations\":\"Test\",\"isActive\":true},{\"programTypeId\":\"ptyp_multi_05\",\"programTypeName\":\"Multi Batch 5\",\"description\":\"First batch\",\"typicalDuration\":\"5 days\",\"format\":\"Online\",\"targetAudience\":\"Test\",\"defaultBaseFee\":1400,\"isEntryLevel\":true,\"isAdvancedLevel\":false,\"isKidsProgram\":false,\"healthDeclarations\":\"Test\",\"isActive\":true},{\"programTypeId\":\"ptyp_multi_06\",\"programTypeName\":\"Multi Batch 6\",\"description\":\"Second batch\",\"typicalDuration\":\"6 days\",\"format\":\"Online\",\"targetAudience\":\"Test\",\"defaultBaseFee\":1500,\"isEntryLevel\":true,\"isAdvancedLevel\":false,\"isKidsProgram\":false,\"healthDeclarations\":\"Test\",\"isActive\":true}]}'"

# Test 3: Check workflow status
echo "🧪 TEST 3: Workflow Status Monitoring"
test_endpoint "Workflow Status Check" \
"curl -s '$BASE_URL/workflow/wf_demo_12345'"

# Test 4: Validation error (duplicate ID)
echo "🧪 TEST 4: Error Handling (Duplicate ID)"
test_endpoint "Duplicate ID Error" \
"curl -s -X POST $BASE_URL -H 'Content-Type: application/json' -d '{\"data\":[{\"programTypeId\":\"ptyp_test123\",\"programTypeName\":\"Duplicate Test\",\"description\":\"This should fail due to duplicate ID\",\"typicalDuration\":\"1 day\",\"format\":\"Online\",\"targetAudience\":\"Test\",\"defaultBaseFee\":1000,\"isEntryLevel\":true,\"isAdvancedLevel\":false,\"isKidsProgram\":false,\"healthDeclarations\":\"Test\",\"isActive\":true}]}'"

# Test 5: Retrieve all created data
echo "🧪 TEST 5: Data Verification"
test_endpoint "Retrieve All Program Types" \
"curl -s '$BASE_URL?limit=20'"

echo "✅ All workflow tests completed!"
echo "📋 Check your wrangler dev terminal for detailed workflow logs"
echo "🔍 Look for emojis like 🔄 📊 📝 ✅ 🔗 ⚙️ 📦 📋 🏁 to track workflow steps" 