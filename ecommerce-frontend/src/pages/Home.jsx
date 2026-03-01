// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        let url = 'https://ecommerce-backend-1feg.onrender.com/products';
        if (category !== 'all') url += `/${category}`;

        const res = await axios.get(url);
        console.log('Products fetched:', res.data); // debugging ke liye
        setProducts(res.data);
      } catch (err) {
        console.error('Fetch error:', err.message || err.response?.data);
        toast.error('Failed to load products 😔');
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [category]);

  const addToCart = async (productId) => {
    console.log('Add to Cart clicked for ID:', productId);
    try {
      const res = await axios.post('https://ecommerce-backend-1feg.onrender.com/cart', {
        userId: 'user1',
        productId,
        quantity: 1
      });
      console.log('Cart success:', res.data);
      toast.success('Added to Cart! 🛒');
    } catch (err) {
      console.error('Cart error:', err.message || err.response?.data);
      toast.error('Error adding to cart 😔');
    }
  };

  const addToFavorites = async (productId) => {
    console.log('Add to Fav clicked for ID:', productId);
    try {
      const res = await axios.post('https://ecommerce-backend-1feg.onrender.com/favorites', {
        userId: 'user1',
        productId
      });
      console.log('Fav success:', res.data);
      toast.success('Added to Favorites! ❤️');
    } catch (err) {
      console.error('Fav error:', err.message || err.response?.data);
      toast.error('Error adding to favorites 😔');
    }
  };

  return (
    <div className="pt-20">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Our Products</h1>

      <div className="flex justify-center space-x-4 mb-10 flex-wrap gap-4">
        <button 
          onClick={() => setCategory('all')}
          className={`px-6 py-3 rounded-full font-medium transition ${category === 'all' ? 'bg-blue-700 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
        >
          All
        </button>
        <button 
          onClick={() => setCategory('electronics')}
          className={`px-6 py-3 rounded-full font-medium transition ${category === 'electronics' ? 'bg-blue-700 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
        >
          Electronics
        </button>
        <button 
          onClick={() => setCategory('clothing')}
          className={`px-6 py-3 rounded-full font-medium transition ${category === 'clothing' ? 'bg-blue-700 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
        >
          Clothing
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600"></div>
          <span className="ml-4 text-xl">Loading products...</span>
        </div>
      ) : products.length === 0 ? (
        <div className="text-center text-xl text-gray-600">No products found in this category</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map(product => (
            <div key={product._id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <img 
                src={product.image || 'https://via.placeholder.com/400x300?text=' + product.name} 
                alt={product.name} 
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{product.description || 'No description available'}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-green-600">₹{product.price}</span>
                  <span className="text-sm text-gray-500 capitalize">{product.category}</span>
                </div>
                <div className="flex space-x-4">
                  <button 
                    onClick={() => addToCart(product._id)}
                    className="flex-1 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition font-medium"
                  >
                    Add to Cart
                  </button>
                  <button 
                    onClick={() => addToFavorites(product._id)}
                    className="flex-1 bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition font-medium"
                  >
                    Add to Fav
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;