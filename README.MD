Hi everyone! 👋  
This is my backend project for the AlmaBetter Full Stack Web Development course (Backend Development Capstone). I built a simple e-commerce API using Node.js, Express, and MongoDB. It covers all the required features: listing products, filtering by category, adding to cart, and managing favourites.

## Features
- Get all products (GET /api/products)  
- Get products by category (GET /api/products/:category)  
- Add product to cart (POST /api/cart)  
- View cart items (GET /api/cart)  
- Add product to favourites (POST /api/favorites)  
- View favourites (GET /api/favorites)  

All data is stored in MongoDB Atlas. The API returns success responses so the frontend can show toast messages like "Product added to cart!".

## Tech Stack
- Node.js  
- Express.js (for routing & server)  
- Mongoose (MongoDB ORM)  
- MongoDB Atlas (free cloud database)  
- dotenv (for environment variables)  
- nodemon (auto-restart during development)

## How to Run the Project

1. Clone the repo  
   ```bash
   git clone https://github.com/yourusername/ecommerce-backend.git
   cd ecommerce-backend

Install dependenciesBashnpm install
Create a .env file in the root folder and add:textPORT=5000
MONGO_URI=mongodb+srv://<your-username>:<your-password>@cluster0.mtaqs3o.mongodb.net/ecomdb?retryWrites=true&w=majority(Get your MONGO_URI from MongoDB Atlas dashboard)
Start the serverBashnpm run devYou should see something like:textMongoDB Connected Successfully!
Server running on port 5000
Add sample products (run once)Bashnode src/seed.jsThis inserts 5 demo products into the database.

API Endpoints (Test with Postman)


MethodEndpointDescriptionRequest Body (for POST)GET/api/productsGet all products-GET/api/products/:categoryGet products by category-POST/api/cartAdd product to cart{ "productId": "id_here" }GET/api/cartGet cart items-POST/api/favoritesAdd product to favourites{ "productId": "id_here" }GET/api/favoritesGet favourites list-
Test root route: http://localhost:5000 → "E-commerce Backend Running 🚀"
Folder Structure
textecommerce-backend/
├── src/
│   ├── models/           # Product, Cart, Favorite schemas
│   ├── routes/           # productRoutes.js, cartRoutes.js, favoriteRoutes.js
│   └── seed.js           # Inserts sample products
├── index.js              # Main server file
├── .env                  # Secrets (gitignore'd)
├── package.json
└── README.md
How I Tested

Used Postman to hit every endpoint
Checked data directly in MongoDB Atlas
Made sure add to cart/favourites returns success

(You can find Postman screenshots in the repo or in my submission video)
What I Learned

How to structure Express routes properly
Creating Mongoose schemas and using population
Connecting to MongoDB Atlas
Seeding data for quick testing
Handling async/await with try-catch

Future Plans

Add user authentication (JWT)
Allow quantity updates in cart
Add delete from cart/favourites
Connect to a React frontend

Thanks for checking out my project!
Feel free to reach out if you have any questions or feedback.
Made with ❤️ by Raj Karan
(AlmaBetter Full Stack Learner)