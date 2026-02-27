# E-Commerce Capstone Project (Full Stack)

Full Stack E-commerce website backend (Node.js + Express + MongoDB) aur frontend (React) ke saath – Capstone project complete.

## Features
- Backend:
  - Products API (GET all, GET by category)
  - Cart API (POST add, GET cart items)
  - Favorites API (POST add, GET favorites)
  - MongoDB Atlas connection
  - Swagger API documentation[](http://localhost:3000/api-docs)
  - Logging with morgan

- Frontend:
  - Products list with category filter
  - Add to Cart + Add to Favorites buttons
  - Toast notifications (react-hot-toast)
  - Cart & Favorites pages
  - Responsive UI

## Tech Stack
- Backend: Node.js, Express, MongoDB (Atlas), Mongoose, Swagger
- Frontend: React, React Router, Axios, React Icons, React Hot Toast

## How to Run Locally

### Prerequisites
- Node.js installed
- MongoDB Atlas account (free tier) – MONGO_URI .env mein daal dena

### Backend Setup
1. Backend folder mein ja:
cd backend
text2. Install dependencies:
npm install
text3. .env file bana aur ye daal:
PORT=3000
MONGO_URI=your-atlas-uri-here
text4. Run backend:
npm run dev
text### Frontend Setup
1. Frontend folder mein ja:
cd frontend
text2. Install dependencies:
npm install
text3. Run frontend:
npm start
textAb browser mein **http://localhost:3000** kholo – products dikhege, add to cart/fav try kar sakte ho.

### API Documentation
Backend chalane ke baad Swagger docs: **http://localhost:3000/api-docs**

### Screenshots
(Apne screenshots daal dena – products page, cart page, toast, swagger wagairah)

## Deployment
- Frontend: Netlify / Vercel
- Backend: Render.com (free tier)

Project complete hai – Full Stack E-commerce app ready for demo!

Made with ❤️ by Akanksha