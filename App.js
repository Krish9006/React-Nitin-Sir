import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./templeate.css";

import BodyComponent from "./src/components/BodyComponent";
import HeaderComponent from "./src/components/HeaderComponent";
import FooterComponent from "./src/components/FooterComponent";
import Shop from "./src/components/pages/Shop.jsx";
import About from "./src/components/pages/About.jsx";
import Restaraunt from "./src/components/pages/Contact.jsx";
import Cart from "./src/components/pages/Cart.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [cartCount, setCartCount] = useState(0);

  // useEffect hook that loads cart items from localStorage and updates the count
  useEffect(() => {
    const updateCartCount = () => {
      const existingCart = JSON.parse(localStorage.getItem('cartItems')) || [];
      const totalCount = existingCart.reduce((count, item) => count + item.quantity, 0);
      setCartCount(totalCount);
    };

    // 'storage' event listener to update the count when a change occurs in another tab
    window.addEventListener('storage', updateCartCount);

    // Initial load
    updateCartCount();

    // Cleanup the event listener
    return () => {
      window.removeEventListener('storage', updateCartCount);
    };
  }, []);

  return (
    <BrowserRouter>
      <HeaderComponent cartCount={cartCount} />
      <Routes>
        <Route path="/" element={<BodyComponent />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Restaraunt />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
