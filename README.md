# Naksh Jewels E-Commerce Platform

A modern full-stack e-commerce web application for jewelry, inspired by geer.in. Built with Next.js (React, TypeScript, Tailwind CSS) for the frontend and Express.js for the backend.

## Features
- Modern, responsive UI with Tailwind CSS
- Product listing, detail, and add product pages
- RESTful backend API (Express.js)
- Persistent product storage (JSON file)
- Easy integration between frontend and backend

## Project Structure
```
backend/
  controllers/           # Business logic
  routes/                # API route definitions
  models/                # Data model
  data/                  # Persistent JSON file
  middleware/            # Logging, error handling
  app.js                 # Express app setup
  server.js              # Server entry point
  package.json           # Backend dependencies
  .env                   # Environment variables
frontend/
  src/app/               # Next.js app directory
    products/            # Product listing & detail pages
    add-product/         # Add product page
    layout.tsx           # Main layout
    page.tsx             # Home/landing page
  pages/api/products/    # API routes (proxy to backend)
  public/                # Static assets
  package.json           # Frontend dependencies
  tailwind.config.js     # Tailwind CSS config
  ...
```

## Getting Started

### 1. Backend
```
cd backend
npm install
npm run dev
```
- The backend runs on `http://localhost:5000` by default.

### 2. Frontend
```
cd frontend
npm install
npm run dev
```
- The frontend runs on `http://localhost:3000` by default.

## Customization
- Update product images and details in the UI as needed.
- Tailwind CSS makes it easy to adjust the design.

## Credits
- Inspired by [geer.in](https://geer.in/)
- Built with Next.js, React, Tailwind CSS, and Express.js

---
© 2025 Naksh Jewels. All rights reserved.
