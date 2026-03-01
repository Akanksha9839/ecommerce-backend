// src/pages/Favorites.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFavorites = async () => {
      setLoading(true);
      try {
        const res = await axios.get('https://ecommerce-backend-1feg.onrender.com/favorites/user1');
        console.log('Favorites fetched:', res.data); // debug ke liye
        setFavorites(res.data);
      } catch (err) {
        console.error('Favorites fetch error:', err.message || err.response?.data);
      } finally {
        setLoading(false);
      }
    };
    fetchFavorites();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600"></div>
        <span className="ml-4 text-xl">Loading favorites...</span>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">Your Favorites</h1>

      {favorites.length === 0 ? (
        <div className="text-center text-xl text-gray-600">No favorites yet. Add some products!</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {favorites.map(product => (
            <div key={product._id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <img 
                src={product.image || 'https://via.placeholder.com/400x300?text=' + product.name} 
                alt={product.name} 
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description || 'No description available'}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-green-600">₹{product.price}</span>
                  <span className="text-sm text-gray-500 capitalize">{product.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;