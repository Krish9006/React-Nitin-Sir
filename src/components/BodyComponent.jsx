import React, { useState } from "react";
import CardComponent from "./CardComponent";
import cardItems from "../data/cardItems";

const BodyComponent = ({ cart, setCart }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // search by restaurant name
  const filteredItems = cardItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addToCart = (item) => {
    setCart([...cart, item]); // add item to cart
  };

  return (
    <div className="body-container">
      <div className="search-section">
        <input
          type="text"
          placeholder="Search restaurants..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="additional-content">
        <h2>Our Collection</h2>
        <div className="card-grid">
          {filteredItems.map((item) => (
            <CardComponent
              key={item.id}
              {...item}
              addToCart={() => addToCart(item)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BodyComponent;
