// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-blue-700 text-white p-4 shadow-md fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold hover:text-gray-200 transition">
          E-Commerce Store
        </Link>
        <div className="flex space-x-8">
          <Link to="/cart" className="flex items-center space-x-2 hover:text-gray-300 transition">
            <FaShoppingCart size={24} />
            <span className="font-medium">Cart</span>
          </Link>
          <Link to="/favorites" className="flex items-center space-x-2 hover:text-gray-300 transition">
            <FaHeart size={24} />
            <span className="font-medium">Favorites</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;