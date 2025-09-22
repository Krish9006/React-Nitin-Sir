import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import "./templeate.css";

import BodyComponent from "./src/components/BodyComponent";
import HeaderComponent from "./src/components/HeaderComponent";
import FooterComponent from "./src/components/FooterComponent";
import Shop from "./src/components/pages/Shop.jsx";
import About from "./src/components/pages/About.jsx";
import Restaraunt from "./src/components/pages/Contact.jsx";
import Cart from "./src/components/pages/Cart.jsx";
//import Login from "./src/components/pages/Login.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// ✅ Toastify import
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateCartCount = () => {
      const existingCart = JSON.parse(localStorage.getItem("cartItems")) || [];
      const totalCount = existingCart.reduce(
        (count, item) => count + item.quantity,
        0
      );
      setCartCount(totalCount);
    };

    window.addEventListener("storage", updateCartCount);
    updateCartCount();

    return () => {
      window.removeEventListener("storage", updateCartCount);
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
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
      <FooterComponent />

      {/* ✅ Toast Container ek hi jagah App me */}
      <ToastContainer position="top-center" autoClose={1500} />
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Auth0Provider
    domain="dev-zn15tkvsm6p036d7.us.auth0.com"
    clientId="9J94PldkThtU7ghcD5pJ2nRXwmgWaG3u"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
);
