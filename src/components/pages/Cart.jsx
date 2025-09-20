import React, { useState, useEffect } from "react";

// Custom hook to manage cart state and logic
const useCart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCart);
  }, []);

  const updateQuantity = (itemId, change) => {
    const updatedCart = cartItems.map(item => {
      if (item.id === itemId) {
        const newQuantity = Math.max(1, item.quantity + change);
        return { ...item, quantity: newQuantity };
      }
      return item;
    });

    setCartItems(updatedCart);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    window.dispatchEvent(new Event('storage'));
  };

  const removeItem = (itemId) => {
    const filteredCart = cartItems.filter(item => item.id !== itemId);
    setCartItems(filteredCart);
    localStorage.setItem('cartItems', JSON.stringify(filteredCart));
    window.dispatchEvent(new Event('storage'));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price.replace(/[^\d.]/g, ''));
      return total + (price * item.quantity);
    }, 0);
  };

  const handlePayNow = () => {
    alert("Payment processing... Thank you for your order!");
    localStorage.removeItem('cartItems');
    setCartItems([]);
    window.dispatchEvent(new Event('storage'));
  };

  return { cartItems, updateQuantity, removeItem, calculateTotal, handlePayNow };
};

const Cart = () => {
  const { cartItems, updateQuantity, removeItem, calculateTotal, handlePayNow } = useCart();

  return (
    <div style={{ padding: '20px' }}>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <div className="cart-list">
            {cartItems.map((item) => (
              <div key={item.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #eee', padding: '10px 0' }}>
                <div className="item-details">
                  <h4>{item.name}</h4>
                  <p>₹{item.price}</p>
                </div>
                <div className="item-controls">
                  <button onClick={() => updateQuantity(item.id, -1)} style={{ marginRight: '5px' }}>-</button>
                  <span className="item-quantity">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)} style={{ marginLeft: '5px' }}>+</button>
                  <button onClick={() => removeItem(item.id)} style={{ marginLeft: '10px', backgroundColor: 'red', color: 'white', border: 'none' }}>Remove</button>
                </div>
              </div>
            ))}
          </div>
          <div className="total-section" style={{ marginTop: '20px', textAlign: 'right', fontWeight: 'bold' }}>
            <span className="total-text">Total Cost:</span>
            <span className="total-amount">₹{calculateTotal()}</span>
          </div>
          <div className="pay-now-section" style={{ textAlign: 'center', marginTop: '20px' }}>
            <button onClick={handlePayNow} className="pay-now-btn" style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: 'green', color: 'white', border: 'none', cursor: 'pointer' }}>Pay Now</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
