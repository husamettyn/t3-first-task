# t3-first-task

# t3-first-task

## Overview

This repository contains a full-stack web application built with a Next.js frontend and a Django backend. The application allows users to register, log in, and create posts. It also includes a theme toggle feature for switching between light and dark modes.

## Frontend

The frontend is built using Next.js and TypeScript. It utilizes Tailwind CSS for styling and includes several components for UI elements such as buttons, forms, and cards.

### Key Features

- **User Authentication**: Users can register and log in to the application.
- **Post Management**: Users can create and view posts.
- **Theme Toggle**: Users can switch between light and dark themes.

### Getting Started

To start the frontend development server, run:

npm run dev


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Relevant Files

- **Layout and Pages**: 
  - `src/app/layout.tsx` (startLine: 1, endLine: 39)
  - `src/app/page.tsx` (startLine: 1, endLine: 26)
  - `src/app/register/page.tsx` (startLine: 1, endLine: 153)
  - `src/app/login/page.tsx` (startLine: 1, endLine: 120)
  - `src/app/post/[postID]/page.tsx` (startLine: 1, endLine: 60)

- **Components**:
  - `src/components/Header.tsx` (startLine: 1, endLine: 28)
  - `src/components/Card.tsx` (startLine: 1, endLine: 45)
  - `src/components/ui/button.tsx` (startLine: 1, endLine: 58)
  - `src/components/ui/form.tsx` (startLine: 1, endLine: 167)

## Backend

The backend is built using Django and Django REST Framework. It provides API endpoints for user authentication and post management.

### Key Features

- **Custom User Model**: The application uses a custom user model for authentication.
- **REST API**: Provides endpoints for managing posts and user authentication.

### Relevant Files

- **Settings and Configuration**:
  - `backend/settings.py` (startLine: 1, endLine: 137)
  - `backend/urls.py` (startLine: 1, endLine: 13)

- **Models and Views**:
  - `accounts/models.py` (startLine: 1, endLine: 40)
  - `posts/models.py` (startLine: 1, endLine: 12)
  - `posts/views.py` (startLine: 1, endLine: 15)

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Learn More

To learn more about Next.js and Django, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Django Documentation](https://docs.djangoproject.com/en/stable/) - learn about Django features and API.
