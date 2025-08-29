import React from "react";

const CardComponent = ({ item, addToCart }) => {
  // safe option: agar full URL hai toh direct use kare,
  // agar sirf cloudinaryImageId hai toh base URL prepend kare
  const imageUrl = item.image.startsWith("http")
    ? item.image
    : `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${item.image}`;

  return (
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
      <button onClick={() => addToCart(item)}>Add to Cart</button>
    </div>
  );
};

export default CardComponent;
