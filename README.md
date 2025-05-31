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

# TransferHub

A course transfer system for community college students.

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL 14+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/transferhub.git
cd transferhub
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Update the values in `.env` with your configuration:
     - `DATABASE_URL`: Your PostgreSQL connection string
     - `NEXTAUTH_SECRET`: A random string for session encryption
     - `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET`: Your Google OAuth credentials

4. Set up the database:
```bash
# Create database and apply migrations
npm run db:push

# Seed the database with initial data
npm run db:seed
```

5. Start the development server:
```bash
npm run dev
```

The application will be available at http://localhost:3000.

## Development

### Database Management

- `npm run db:push` - Push schema changes to the database
- `npm run db:migrate` - Create and apply migrations
- `npm run db:studio` - Open Prisma Studio to manage data
- `npm run db:seed` - Seed the database with initial data

### Environment Variables

The following environment variables are required:

```env
# Database
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/transferhub?schema=public"

# NextAuth.js
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-nextauth-secret"

# OAuth
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
```

Make sure to update these values in your `.env` file.
