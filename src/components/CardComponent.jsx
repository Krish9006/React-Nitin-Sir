import React from "react";

const CardComponent = ({ id, name, image, rating, cuisine, deliveryTime, addToCart }) => (
  <div className="card">
    <img src={image} alt={name} className="card-img" />
    <h3>{name}</h3>
    <p>Cuisine: {cuisine}</p>
    <p>Rating: {rating} ⭐</p>
    <p>Delivery: {deliveryTime} mins</p>
    <button
      onClick={() => addToCart({ id, name, image, rating, cuisine, deliveryTime })}
      className="add-btn"
    >
      Add to Cart
    </button>
  </div>
);

export default CardComponent;
