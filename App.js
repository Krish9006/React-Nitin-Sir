import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./templeate.css";

// Components
import BodyComponent from "./src/components/BodyComponent";
import HeaderComponent from "./src/components/HeaderComponent";
import FooterComponent from "./src/components/FooterComponent";

// Pages
import Shop from "./src/components/pages/Shop.jsx";
import About from "./src/components/pages/About.jsx";
import Contact from "./src/components/pages/Contact.jsx";

// React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
      <HeaderComponent cartCount={cart.length} />

      <Routes>
        <Route path="/" element={<BodyComponent cart={cart} setCart={setCart} />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <FooterComponent />
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
