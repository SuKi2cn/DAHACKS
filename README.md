# TransferHub

A modern web application that helps community college students navigate the complex process of transferring course credits to universities.

## Features

- **Open Access**: Browse transfer credit information without requiring an account
- **Course Mapping**: Comprehensive database of course equivalencies between institutions
- **User Contributions**: Registered users can submit new transfer credit experiences
- **Verification System**: All submissions are verified by administrators
- **Real-time Updates**: Stay informed about the latest transfer credit mappings
- **Smart Search**: Find course equivalencies by college, university, or course code
- **Modern UI**: Clean and responsive interface built with Tailwind CSS

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Prisma ORM
- **Database**: PostgreSQL
- **Authentication**: NextAuth.js with Google OAuth
- **State Management**: React Hooks
- **Type Safety**: TypeScript throughout the codebase

## Prerequisites

- Node.js 18+
- PostgreSQL 14+
- npm or yarn

## Getting Started

1. **Clone and Install**
```bash
git clone https://github.com/yourusername/transferhub.git
cd transferhub
npm install
```

2. **Set up Environment**
   - Copy `.env.example` to `.env`
   - Update the values in `.env` with your configuration:
```env
# Database
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/transferhub?schema=public"

# NextAuth.js
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-nextauth-secret"

# OAuth (Optional - for Google Sign-in)
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
```

3. **Database Setup**
```bash
# Create database and apply schema
npm run db:push

# Seed the database with initial data
npm run db:seed
```

4. **Start Development Server**
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/                  # Next.js app directory
│   ├── api/             # API routes
│   ├── auth/            # Authentication pages
│   ├── components/      # Shared components
│   └── ...             # Page routes
├── lib/                 # Utilities and services
│   ├── prisma.ts       # Prisma client
│   ├── validations.ts  # Zod schemas
│   └── ...             # Other utilities
├── prisma/             # Database
│   ├── schema.prisma   # Database schema
│   └── seed.ts        # Seed data
└── types/              # TypeScript types
```

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:push` - Push schema changes to database
- `npm run db:migrate` - Create and apply migrations
- `npm run db:studio` - Open Prisma Studio
- `npm run db:seed` - Seed database with initial data

### Database Management

The application uses Prisma as the ORM with PostgreSQL. Initial data includes:
- Community Colleges: De Anza College, Foothill College
- Universities: University of Michigan
- Sample course mappings between these institutions

### Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

# Transfer Credit App

A modern web application that helps students navigate the complex process of transferring course credits between educational institutions.

## Features

- **Open Access**: Browse transfer credit information without requiring an account
- **Course Mapping**: Comprehensive database of course equivalencies between institutions
- **User Contributions**: Registered users can submit new transfer credit experiences
- **Verification System**: All submissions are verified by administrators
- **Real-time Updates**: Stay informed about the latest transfer credit mappings

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Prisma ORM
- **Authentication**: NextAuth.js
- **Database**: PostgreSQL

## Prerequisites

- Node.js 18+
- PostgreSQL
- npm or yarn

## Quick Start

1. **Clone and Install**
```bash
git clone https://github.com/yourusername/transfer-credit-app.git
cd transfer-credit-app
npm install
```

2. **Set up Environment**
```bash
# Copy example env file and modify as needed
cp .env.example .env
```

Required environment variables:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/transfer_credit_db"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key"
```

3. **Database Setup**
```bash
# Run migrations and generate Prisma client
npx prisma migrate dev
```

4. **Start Development Server**
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/                  # Next.js app directory
│   ├── api/             # API routes
│   ├── (auth)/          # Authentication pages
│   └── ...              # Other routes
├── components/          # React components
├── lib/                 # Utilities and services
├── prisma/             # Database schema
└── types/              # TypeScript types
```

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:studio` - Open Prisma Studio

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
