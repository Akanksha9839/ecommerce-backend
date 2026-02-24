// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Favorites from './pages/Favorites';

function App() {
  return (
    <Router>
      <Toaster position="top-right" reverseOrder={false} />
      <Navbar />
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="*" element={<div className="text-center py-20 text-3xl font-bold text-red-600">404 - Page Not Found</div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;