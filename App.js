import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./templeate.css";
import BodyComponent from "./src/components/BodyComponent";
import HeaderComponent from "./src/components/HeaderComponent";
import FooterComponent from "./src/components/FooterComponent";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <HeaderComponent cartCount={cart.length} />
      <BodyComponent cart={cart} setCart={setCart} />
      <FooterComponent />
    </>
  );
}

// ✅ Yaha render hoga
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
