# TinyTales Apparel Store - Frontend Task

A pixel-perfect Next.js implementation of the TinyTales apparel store, featuring integrated authentication with a backend API.

## Features

- **Authentication Flow**: 
  - Registration with full profile details.
  - Login with email and password.
  - Email verification (Test code: `123456`).
  - Token management via `localStorage`.
- **Pixel-Perfect UI**:
  - Detailed product page matching the provided mockup exactly.
  - Responsive design for mobile, tablet, and desktop.
  - Interactive image gallery and selection options.
- **API Integration**:
  - Real-world integration with the TinyTales API endpoints.

## Technical Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Components**: Shadcn/UI primitives
- **Animation**: Tw-animate-css

## Setup Instructions

1.  **Environment Variables**:
    - Ensure your API key is provided via `process.env.API_KEY` for any Gemini-powered features (internal Nexus assistant).
2.  **Installation**:
    ```bash
    npm install
    ```
3.  **Development Server**:
    ```bash
    npm run dev
    ```
4.  **Testing Auth**:
    - Go to `/register` to create an account.
    - After registering, you will be redirected to `/verify`. Enter `123456`.
    - Once verified, you'll reach the `/dashboard`.
    - Visit `/product/1` to view the pixel-perfect implementation.

## Project Structure

- `app/`: Contains the main routes (login, register, verify, dashboard, product).
- `components/`: Reusable UI components (Header, Footer, specific product sub-components).
- `lib/`: Utility functions and API service wrapper.
- `styles/`: Global CSS configurations.

## API Endpoints Used

- `POST /auth/register`: User registration.
- `POST /auth/login`: User authentication.
- `POST /auth/verify-email`: Account verification via code.
