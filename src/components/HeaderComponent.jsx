import React from "react";

const HeaderComponent = ({ cartCount }) => (
  <header className="header">
    <div className="logo">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMoIcRMu90nCKAaBjkVsssmL6BS8dShFhRow&s"
        alt="Logo"
      />
    </div>
    <nav className="nav">
      <span>Home</span>
      <span>About</span>
      <span>Shop</span>
      <span>Contact</span>
      <span className="cart">🛒 {cartCount}</span>
      <span className="signup">Sign Up</span>
    </nav>
  </header>
);

export default HeaderComponent;
