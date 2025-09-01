import React, { useState, useEffect } from "react";
import CardComponent from "./CardComponent";
import ShimmerUI from "./ShimmerUI";
import cardItems from "../data/cardItems";

const BodyComponent = ({ cart, setCart }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [restaurantList, setRestaurantList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");


  const filteredItems = restaurantList.filter((item) =>
    item?.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    async function fetchRestaurantData() {
      try {
        const url =
          "https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9525755&lng=77.5292796&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

        const response = await fetch(url);
        if (!response.ok) throw new Error("API not reachable");

        const data = await response.json();
         const cards = data?.data?.cards || [];
        let restaurants = [];

        for (let card of cards) {
          if (card?.card?.card?.gridElements?.infoWithStyle?.restaurants) {
            restaurants = card.card.card.gridElements.infoWithStyle.restaurants;
            break;
          }
        }

        const formatted = restaurants.map((r) => ({
          id: r?.info?.id,
          name: r?.info?.name || "Unknown",
          image: r?.info?.cloudinaryImageId || "",
          rating: r?.info?.avgRating || "-",
          cuisine: r?.info?.cuisines?.join(", ") || "N/A",
          deliveryTime: r?.info?.sla?.deliveryTime || "-",
        }));

        setRestaurantList(formatted);
      } catch {
        setError("API blocked or too many requests. Showing fallback data.");
        setRestaurantList(cardItems);
      } finally {
        setLoading(false);
      }
    }

    fetchRestaurantData();
  }, []);

  const addToCart = (item) => {
    setCart([...cart, item]);
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
        <h2>Popular Restaurants</h2>

        {error && <p className="error">{error}</p>}

        <div className="card-grid">
          {loading ? (
            <ShimmerUI />
          ) : filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <CardComponent key={item.id} item={item} addToCart={addToCart} />
            ))
          ) : (
            <p>No restaurants found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BodyComponent;
