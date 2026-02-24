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
        let url = 'http://localhost:3000/products';
        if (category !== 'all') url += `/${category}`;
        
        const res = await axios.get(url);
        setProducts(res.data);
      } catch (err) {
        toast.error('Failed to load products');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [category]);

  const addToCart = async (productId) => {
    try {
      await axios.post('http://localhost:3000/cart', {
        userId: 'user1',
        productId,
        quantity: 1
      });
      toast.success('Added to Cart!');
    } catch (err) {
      toast.error('Error adding to cart');
    }
  };

  const addToFavorites = async (productId) => {
    try {
      await axios.post('http://localhost:3000/favorites', {
        userId: 'user1',
        productId
      });
      toast.success('Added to Favorites!');
    } catch (err) {
      toast.error('Error adding to favorites');
    }
  };

  return (
    <div>
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
        <div className="text-center text-xl">Loading products...</div>
      ) : products.length === 0 ? (
        <div className="text-center text-xl text-gray-600">No products found</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map(product => (
            <div key={product._id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
              <img 
                src={product.image || 'https://via.placeholder.com/400x300?text=' + product.name} 
                alt={product.name} 
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{product.description || 'No description'}</p>
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