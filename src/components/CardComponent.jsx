import React from "react";
import { Link } from "react-router-dom";

const CardComponent = ({ item, addToCart }) => {
  const imageUrl = item.image.startsWith("http")
    ? item.image
    : `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${item.image}`;

  return (
    <Link to={`/rest/${item.id}`} className="card-link">

      <div className="card">
        <img
          src={imageUrl}
          alt={item.name}
          className="card-img"
        />
        <h3>{item.name}</h3>
        <p>{item.cuisine}</p>
        <p>⭐ {item.rating}</p>
        <p>⏱ {item.deliveryTime} min</p>
        <button onClick={e => {
          e.preventDefault();
          addToCart(item);
        }}>Add to Cart</button>
      </div>
    </Link>
  );
};
export default CardComponent;