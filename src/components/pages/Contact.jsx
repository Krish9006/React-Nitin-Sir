import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Restaraunt = () => {
  const [restaurentData, setRestaurentData] = useState(null);
  const [recommendation, setRecommendation] = useState([]);
  const param = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const URL = `https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9507849&lng=77.532563&restaurantId=${param.id}`;
        const response = await fetch(URL);
        const jsonData = await response.json();
        const cardInfo = jsonData?.data?.cards.find(c => c?.card?.card?.info);
        setRestaurentData(cardInfo?.card?.card?.info);

        const gDATA = jsonData?.data?.cards.find(c => c?.groupedCard);
        const RecommendationCards = gDATA?.groupedCard?.cardGroupMap?.REGULAR?.cards;
        const result = RecommendationCards?.find(c => c?.card?.card?.itemCards);
        setRecommendation(result?.card?.card?.itemCards || []);
      } catch (error) {
        console.error("Error fetching restaurant data:", error);
      }
    }
    fetchData();
  }, [param.id]); // dependency list me param.id

  return (
    <div>
      <h1>Restaraunt</h1>
      {restaurentData === null ? (
        <h1>Baba Ji ka thullu, wait kriye.....</h1>
      ) : (
        <div>
          <h1>{restaurentData?.name}</h1>
          <h2>{restaurentData?.cuisines?.join(", ")}</h2>
          <span>{restaurentData?.avgRating} stars</span> &nbsp;
          <span>{restaurentData?.costForTwoMessage}</span>
          <p>{restaurentData?.address}</p>
        </div>
      )}

      <section className="recommendation-section">
        {recommendation.length === 0 ? (
          <h1>recommendation aa rha hai, loading ho rha hia....</h1>
        ) : (
          <>
            <h2>Recommendations ({recommendation.length})</h2>
            <ul>
              {recommendation.map((item, index) => (
                <li key={index}>
                  {item?.card?.info?.name} <br />
                  <span>{item?.card?.info?.price / 100} Rs/- Only</span>
                </li>
              ))}
            </ul>
          </>
        )}
      </section>
    </div>
  );
};

export default Restaraunt;
