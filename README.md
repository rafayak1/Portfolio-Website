# My Portfolio

## Overview

This is a single-page portfolio application for me that showcases a dual-persona concept - Software Engineer and Data Engineer. The application features a 3D gateway with animated avatars that transition into detailed persona sections with smooth animations, parallax effects, and interactive elements. Built with React, TypeScript, and modern web technologies, it creates an immersive "wow" experience for visitors.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for development and build tooling
- **Styling**: Tailwind CSS with custom CSS variables for theming and glass morphism effects
- **Component Library**: Radix UI primitives with shadcn/ui component system for consistent design
- **Animations**: Framer Motion for complex animations, transitions, and gesture handling
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React hooks with TanStack Query for server state management

### Backend Architecture
- **Server**: Express.js with TypeScript for API endpoints
- **Development**: Vite middleware integration for hot module replacement in development
- **Build Process**: ESBuild for production server bundling
- **Storage Interface**: Abstracted storage layer with in-memory implementation for user management

### Component Architecture
- **Portfolio Components**: Modular persona sections (About, Tech Stack, Experience, Projects)
- **3D Elements**: Custom Three.js-inspired components for avatar stage and floating particles
- **UI Components**: Comprehensive shadcn/ui component library with custom animations
- **Responsive Design**: Mobile-first approach with device-specific optimizations

### Animation System
- **Scroll Animations**: Intersection Observer hooks for triggering animations on scroll
- **Particle Effects**: Floating background particles with physics-based movement
- **Counter Animations**: Animated number counting for metrics and statistics
- **Gesture Handling**: Touch and mouse interaction support for avatar selection

### Development Workflow
- **Hot Reload**: Vite development server with React Fast Refresh
- **Type Safety**: Strict TypeScript configuration with path mapping
- **Code Quality**: ESLint integration with modern React patterns
- **Build Optimization**: Separate client and server builds with asset optimization

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Router (Wouter)
- **Build Tools**: Vite, ESBuild, TypeScript compiler
- **Animation**: Framer Motion for complex animations and gestures

### Database and ORM
- **Database**: Neon Database (PostgreSQL serverless)
- **ORM**: Drizzle ORM with PostgreSQL adapter
- **Migrations**: Drizzle Kit for schema management
- **Validation**: Zod with Drizzle integration

### UI and Styling
- **CSS Framework**: Tailwind CSS with PostCSS processing
- **Component Library**: Radix UI primitives for accessibility
- **Design System**: shadcn/ui component collection
- **Icons**: Lucide React icons, Font Awesome for branding
- **Fonts**: Google Fonts (Inter) for typography

### Server Infrastructure
- **Web Server**: Express.js with TypeScript
- **Session Management**: Express sessions with PostgreSQL store
- **Development**: Replit-specific plugins for cartographer and error overlay

### Development Tools
- **Type Safety**: TypeScript with strict configuration
- **Code Quality**: Class Variance Authority for component variants
- **Utilities**: Date-fns for date manipulation, clsx for class management
- **Query Management**: TanStack React Query for server state

### Third-Party Integrations
- **Replit Platform**: Custom Vite plugins for Replit development environment
- **Font Services**: Google Fonts CDN for web fonts
- **Icon Libraries**: Font Awesome CDN for social and brand icons
