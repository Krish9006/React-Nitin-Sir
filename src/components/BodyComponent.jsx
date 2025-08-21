import React from "react";
import Card from "./CardComponent";
import cardItems from "../data/cardItems";


const BodyComponent = ({ cart, setCart }) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const filteredItems = cardItems.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addToCart = (item) => {
    setCart([...cart, item]); // add the clicked item to cart
  };

  return (
    <div className="body-container">
      <div className="search-section">
        <input
          type="text"
          placeholder="Search products..."
          className="search-input"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="additional-content">
        <h2>Our Collection</h2>
        <div className="card-grid">
          {filteredItems.map(item => (
            <Card key={item.id} {...item} addToCart={() => addToCart(item)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BodyComponent;
