# E-Commerce Capstone Project (Full Stack)


Backend for E-commerce application using Node.js, Express & MongoDB Atlas

## Features
- GET /products – All products
- GET /products/:category – Category filter
- POST /cart – Add to cart
- GET /cart/:userId – View cart
- POST /favorites – Add to favorites
- GET /favorites/:userId – View favorites
- Swagger API docs: /api-docs
- Logging with morgan

## Live API
https://ecommerce-backend-1feg.onrender.com/api-docs

## Local Setup
1. `npm install`
2. Create `.env`:PORT=3000
MONGO_URI=your-atlas-uritext3. `npm run dev`

Made by Akanksha
Capstone Project – Full Stack Web Development# E-Commerce Backend – Capstone Project

Complete backend for an E-commerce application built with Node.js, Express, and MongoDB Atlas.  
This project fulfills all requirements for the Full Stack Web Development Capstone, including RESTful APIs, database integration, logging, and Swagger documentation.

## ✨ Features

- Get all products: `GET /products`
- Get products by category: `GET /products/:category` (e.g. `/products/electronics`)
- Add item to cart: `POST /cart` (body: userId, productId, quantity)
- Get user cart: `GET /cart/:userId`
- Add item to favorites: `POST /favorites` (body: userId, productId)
- Get user favorites: `GET /favorites/:userId`
- Interactive API documentation with Swagger: `/api-docs`
- Request logging with Morgan
- MongoDB Atlas cloud database
- CORS enabled for frontend integration
- Deployed on Render (free tier)

## 🛠 Tech Stack

- Node.js + Express.js  
- MongoDB Atlas + Mongoose  
- Swagger UI (for API documentation)  
- Morgan (logging)  
- CORS  
- dotenv (environment variables)  
- Hosted on Render.com

## 🚀 Live API

- Base URL: https://ecommerce-backend-1feg.onrender.com  
- Swagger Documentation: https://ecommerce-backend-1feg.onrender.com/api-docs

## 📋 Local Setup Instructions

1. Clone the repository
   ```bash
   git clone https://github.com/Akanksha9839/ecommerce-backend.git
   cd ecommerce-backend

Install dependenciesBashnpm install
Create .env file in root and add:envPORT=3000
MONGO_URI=your-mongodb-atlas-connection-string
Start the serverBashnpm run dev
Open Swagger docs: http://localhost:3000/api-docs

🧪 API Testing
All endpoints are tested with Postman / Swagger.
Sample responses:

GET /products → returns array of products
POST /cart → { message: "Added to cart", cart: {...} }
POST /favorites → { message: "Added to favorites" }


Deployment

Platform: Render.com (free tier)
Auto-deploy connected to GitHub
Environment variables set: PORT, MONGO_URI
Service restarts automatically on git push

Author
Akanksha
Full Stack Web Development Capstone Project
March 2026
Made with ❤️ and lots of debugging sessions
text
