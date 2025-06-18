# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Tech Stack & Platform

This is a **Cloudflare Workers** application built with:
- **TypeScript** and **Hono** framework for HTTP routes
- **Prisma** ORM with **PlanetScale** MySQL database
- **Real Cloudflare Workflows** for asynchronous processing
- **Vitest** for testing

## Core Commands

### Development
```bash
npm run dev              # Start development server with hot reload
npm run start            # Alternative dev command
```

### Database Operations
```bash
npm run prisma:generate  # Generate Prisma client (run after schema changes)
npm run prisma:dbpush    # Push schema changes to database
npm run prisma:studio    # Open database browser UI
npm run prisma:seed      # Seed database with sample data
npm run prisma:seed:dev  # Seed with development data
npm run db:reset         # Reset database and reseed
```

### Testing & Validation
```bash
npm test                 # Run tests with Vitest
npm run check            # TypeScript check + dry-run deployment
```

### Deployment
```bash
npm run deploy           # Deploy to Cloudflare Workers
npm run cf-typegen       # Generate Cloudflare Workers types
```

## Architecture Overview

### API Structure
- **Main app**: `src/index.ts` - Hono application with global middleware
- **Routes**: `src/api/v1/taol/program-types.ts` - REST API endpoints
- **Services**: `src/services/program-type.service.ts` - Business logic layer
- **Types**: `src/types/` - TypeScript definitions for API, common utilities, and environment

### Database Layer
- **Schema**: `prisma/schema.prisma` - Complete CRM data model
- **Generated client**: `src/generated/prisma/` - Auto-generated Prisma client
- **Connection**: Initialized via `getPrismaClient()` utility in `src/utils.ts`

### Cloudflare Workflows Integration
- **Workflow class**: `src/workflows/program-type-processor.ts` - Real Cloudflare Workflow implementation
- **Intelligent routing**: Small datasets (≤5 items) processed directly, larger datasets use workflows
- **Status monitoring**: Real-time workflow tracking via `/workflow/:workflowId` endpoint
- **Configuration**: Workflow bindings defined in `wrangler.json`

### Key Features
- **Dual processing modes**: Synchronous for small datasets, asynchronous workflows for large datasets
- **Comprehensive validation**: Input validation with detailed error responses
- **Error handling**: Multi-level retry mechanisms with graceful degradation
- **Pagination**: Full pagination support with metadata
- **Observability**: Structured logging and monitoring capabilities

## Development Guidelines

### When making changes to the database schema:
1. Edit `prisma/schema.prisma`
2. Run `npm run prisma:generate` to update the client
3. Run `npm run prisma:dbpush` to apply changes to database

### When adding new API endpoints:
- Follow the existing pattern in `src/api/v1/taol/program-types.ts`
- Use the service layer for business logic
- Implement proper validation and error handling
- Add types to appropriate files in `src/types/`

### When working with workflows:
- Large datasets (>5 items) automatically use Cloudflare Workflows
- Monitor workflow status using the tracking endpoint
- Check workflow logs in development with `wrangler tail`

### Testing approach:
- Use Vitest for unit tests
- Test both direct processing and workflow modes
- Validate error handling and edge cases
- Use `npm run check` before committing to ensure TypeScript compliance

## Environment Configuration

### Development
- Uses `wrangler dev` for local development
- Database connection via `DATABASE_URL` environment variable
- Workflow bindings automatically configured

### Production
- Deployed via `wrangler deploy`
- Environment-specific configurations in `wrangler.json`
- Separate workflow instances for sandbox/production

## Important Notes

- **Never commit secrets** - Use `wrangler secret put` for sensitive data
- **Database relationships** use `relationMode = "prisma"` for PlanetScale compatibility
- **Workflow processing** is real Cloudflare Workflows, not simulation
- **Error responses** follow structured format with request IDs for tracking
- **Batch operations** support partial success scenarios