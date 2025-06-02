# Prisma Database Seeding

This directory contains seed scripts to populate your database with sample data for development and testing.

## Available Seed Scripts

### 1. Full Seed (`seed.ts`)

This script creates a complete dataset from scratch and is perfect for initial setup or when you want to start with a clean database.

**What it creates:**

- 20 Users with emails, mobile numbers, and addresses
- 3 Centers (Ashram, Mumbai, Delhi)
- 4 Program Types (Happiness Program, Part 1 Course, Sahaj Samadhi Meditation, YES+ Course)
- 5 Teachers with eligibilities
- 5 Volunteers
- 10 Programs with realistic scheduling
- Multiple Program Participants with registrations
- Resources (PDFs, videos, audio files)
- Test leads

**Usage:**

```bash
npm run prisma:seed
```

⚠️ **Warning:** This script clears all existing data before seeding. Use with caution in non-development environments.

### 2. Development Seed (`seed-dev.ts`)

This script adds additional data without clearing existing records. Perfect for ongoing development when you need more test data.

**What it adds:**

- 5 Additional users
- 3 Additional programs
- Program participants for new programs
- Test leads

**Usage:**

```bash
npm run prisma:seed:dev
```

### 3. Database Reset

Completely resets the database and runs the full seed script.

**Usage:**

```bash
npm run db:reset
```

## Prerequisites

Before running the seed scripts, make sure you have:

1. **Generated Prisma Client:**

   ```bash
   npm run prisma:generate
   ```

2. **Applied database schema:**

   ```bash
   npm run prisma:dbpush
   ```

3. **Installed dependencies:**
   ```bash
   npm install
   ```

## Environment Setup

Ensure your `.env` or `.dev.vars` file contains the correct `DATABASE_URL` for your database connection.

## Sample Data Structure

The seed scripts create realistic Art of Living CRM data:

### Users

- Names: Indian names like "Arjun Sharma", "Priya Patel"
- User IDs: Format `AOL0001`, `AOL0002`, etc.
- Contact info: Realistic Indian mobile numbers and addresses

### Program Types

1. **Happiness Program** - Basic stress elimination (3 days, ₹2,500)
2. **Part 1 Course** - Advanced breathing techniques (5 days, ₹5,000)
3. **Sahaj Samadhi Meditation** - Meditation technique (2 days, ₹3,500)
4. **YES+ Course** - Youth empowerment (4 days, ₹2,000)

### Centers

1. **Art of Living Ashram** - Main ashram in Bangalore
2. **Mumbai Center** - Urban center
3. **Delhi Center** - Knowledge center

### Programs

- Realistic scheduling (programs within next 90 days)
- Proper registration windows
- Different statuses (draft, announced, in-progress)
- Fee structures with early bird pricing

## Customization

You can modify the seed scripts to:

- Add more users or different names
- Create different program types
- Add more centers in different cities
- Modify fee structures
- Add custom metadata

## Troubleshooting

### Common Issues

1. **"Table doesn't exist" error:**

   ```bash
   npm run prisma:dbpush
   ```

2. **"Prisma Client not generated" error:**

   ```bash
   npm run prisma:generate
   ```

3. **"tsx command not found" error:**

   ```bash
   npm install
   ```

4. **Foreign key constraint errors:**
   Make sure you run the full seed script first before using the dev seed script.

## Data Relationships

The seed data maintains proper relationships:

- Users → Teachers/Volunteers
- Teachers → Programs (primary teacher)
- Programs → Program Participants
- Program Participants → Registrations
- Users → Multiple emails, phone numbers, addresses
- Teachers → Eligibilities for different program types

This creates a realistic dataset for testing all aspects of the CRM system including user management, program scheduling, participant registration, and resource management.
