# Cloudflare Workers Deployment Guide

## 🔐 Required GitHub Secrets

Before deploying, set up these secrets in your GitHub repository (Settings → Secrets and variables → Actions):

**CLOUDFLARE_API_TOKEN**: Cloudflare API token with Workers permissions  
**DATABASE_URL_SANDBOX**: Database connection string for sandbox environment  
**DATABASE_URL_PRODUCTION**: Database connection string for production environment  

## 🚀 Deployment Process

The GitHub Action automatically:
1. Builds and validates TypeScript
2. Generates Prisma client
3. Deploys to Cloudflare Workers sandbox
4. Sets database URL as secret
5. Provides deployment status

## 📊 Environment Configuration

**Sandbox Environment**: `crm2-be-sandbox`  
**Production Environment**: `crm2-be-production`  
**Workflow Names**: Environment-specific workflow instances 