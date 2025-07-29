# AC Vows Planner - Wedding Planning Application

## Overview

AC Vows Planner is a modern, faith-conscious wedding planning application specializing in elegant, modest, and halal-friendly celebrations. The application provides a comprehensive platform for couples to explore wedding packages, view portfolios, read testimonials, and book consultations with professional planner Aminah Clarke.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The application uses a **React-based Single Page Application (SPA)** architecture with modern tooling:

- **Framework**: React 18 with TypeScript for type safety
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **UI Framework**: Shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Build Tool**: Vite for fast development and optimized production builds

**Design Philosophy**: The frontend prioritizes performance, accessibility, and a clean component-based architecture. The application uses a wedding-themed color palette (cream, peach, gold, brown) to create an elegant, faith-conscious aesthetic.

### Backend Architecture
The backend follows a **REST API architecture** using Express.js:

- **Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for Neon Database)
- **Session Management**: Connect-pg-simple for PostgreSQL-backed sessions
- **API Design**: RESTful endpoints with proper HTTP status codes and error handling

**Architecture Pattern**: The backend uses a service layer pattern with separation of concerns between routes, storage, and business logic.

### Data Storage Architecture
The application uses **PostgreSQL** as the primary database with Drizzle ORM:

- **Schema Management**: Drizzle Kit for migrations and schema management
- **Type Safety**: Database schemas are co-located with TypeScript types
- **Connection**: Neon Database serverless PostgreSQL for scalability
- **Fallback**: In-memory storage implementation for development/testing

## Key Components

### Database Schema
Three main entities power the application:

1. **Consultations**: Stores client consultation requests with contact details, preferences, and messages
2. **Packages**: Wedding planning service packages with pricing, features, and styling
3. **Testimonials**: Client reviews and ratings for social proof

### API Endpoints
- `GET /api/packages` - Retrieve all wedding packages
- `GET /api/testimonials` - Retrieve client testimonials
- `POST /api/consultations` - Submit consultation requests
- `GET /api/consultations` - Admin endpoint for viewing submissions

### Frontend Components
**Layout Components**:
- Navigation with smooth scrolling
- Hero section with call-to-action
- Footer with social links

**Content Components**:
- Packages showcase with interactive selection
- About section featuring the planner
- Gallery with elegant image displays
- Testimonials carousel
- Contact form with validation

**UI Components**: Comprehensive set of accessible components from Shadcn/ui including forms, dialogs, buttons, and layout primitives.

## Data Flow

### Client-Server Communication
1. **Initial Load**: Client fetches packages and testimonials via React Query
2. **Form Submission**: Contact form data is validated client-side using Zod schemas, then submitted to REST API
3. **Real-time Updates**: React Query manages caching and background refetching
4. **Error Handling**: Comprehensive error boundaries and toast notifications

### Form Processing
1. Client-side validation using React Hook Form with Zod resolvers
2. Type-safe API requests with proper error handling
3. Optimistic UI updates and success/error feedback
4. Data persistence to PostgreSQL database

## External Dependencies

### Frontend Dependencies
- **UI Framework**: Radix UI primitives for accessibility
- **Form Management**: React Hook Form with Hookform Resolvers
- **Data Fetching**: TanStack React Query
- **Styling**: Tailwind CSS with class-variance-authority
- **Icons**: Font Awesome and Lucide React
- **Utilities**: clsx, date-fns, nanoid

### Backend Dependencies
- **Database**: Neon Database serverless PostgreSQL
- **ORM**: Drizzle ORM with Zod integration
- **Session Management**: Connect-pg-simple
- **Validation**: Zod schemas
- **Development**: tsx for TypeScript execution

### Development Tools
- **Build**: Vite with React plugin
- **Linting**: TypeScript compiler checking
- **Database Migrations**: Drizzle Kit
- **Development Server**: Express with hot reload

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite compiles React application to static assets
2. **Backend Build**: esbuild bundles Express server with external package references
3. **Database Setup**: Drizzle migrations ensure schema consistency
4. **Asset Optimization**: Static assets are optimized and served efficiently

### Environment Configuration
- **Development**: Local development with tsx and Vite dev server
- **Production**: Node.js server serving static frontend and API routes
- **Database**: Environment-based DATABASE_URL configuration
- **Replit Integration**: Special handling for Replit development environment

### Hosting Requirements
- Node.js runtime environment
- PostgreSQL database (Neon Database recommended)
- Environment variables for database connection
- Static file serving capability for frontend assets

The application is designed to be easily deployable to cloud platforms with minimal configuration, requiring only a PostgreSQL database connection and proper environment variable setup.