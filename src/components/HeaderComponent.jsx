import React from "react";
import { NavLink } from "react-router-dom";

const HeaderComponent = ({ cartCount }) => (
  <header className="header">
    <div className="logo">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMoIcRMu90nCKAaBjkVsssmL6BS8dShFhRow&s"
        alt="Logo"
      />
    </div>
    <nav className="nav">
      <NavLink to="/" className="nav-link">Home</NavLink>
      <NavLink to="/about" className="nav-link">About</NavLink>
      <NavLink to="/shop" className="nav-link">Shop</NavLink>
      <NavLink to="/contact" className="nav-link">Contact</NavLink>
      <span className="cart">🛒 {cartCount}</span>
      <span className="signup">Sign Up</span>
    </nav>
  </header>
);

export default HeaderComponent;
