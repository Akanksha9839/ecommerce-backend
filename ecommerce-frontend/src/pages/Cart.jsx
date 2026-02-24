// src/pages/Cart.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await axios.get('http://localhost:3000/cart/user1');
        setCartItems(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchCart();
  }, []);

  if (loading) return <div className="text-center py-20 text-xl">Loading cart...</div>;

  const total = cartItems.reduce((sum, item) => sum + (item.productId?.price * item.quantity || 0), 0);

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">Your Cart</h1>
      
      {cartItems.length === 0 ? (
        <div className="text-center text-xl text-gray-600">Your cart is empty</div>
      ) : (
        <div className="space-y-6">
          {cartItems.map(item => (
            <div key={item._id} className="flex flex-col sm:flex-row justify-between bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center space-x-6">
                <img 
                  src={item.productId?.image || 'https://via.placeholder.com/100'} 
                  alt={item.productId?.name} 
                  className="w-24 h-24 object-cover rounded"
                />
                <div>
                  <h3 className="text-xl font-semibold">{item.productId?.name}</h3>
                  <p>₹{item.productId?.price} × {item.quantity}</p>
                </div>
              </div>
              <p className="text-2xl font-bold text-green-600 mt-4 sm:mt-0">
                ₹{(item.productId?.price * item.quantity) || 0}
              </p>
            </div>
          ))}
          <div className="bg-white p-6 rounded-xl shadow-md mt-8">
            <div className="flex justify-between text-2xl font-bold">
              <span>Total</span>
              <span className="text-green-600">₹{total}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;