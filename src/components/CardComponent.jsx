import React from "react";
const Card = ({ title, price, image, addToCart ,rating}) => (
  <div className="card">
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <p>Price: ₹{price}</p>
    <p>Rating: {rating} ⭐</p>
    <button onClick={addToCart}>Add to Cart</button>
  </div>
);

export default Card;
