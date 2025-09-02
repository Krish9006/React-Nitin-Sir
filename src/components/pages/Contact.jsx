import react, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

const Restaraunt = () => {
  console.log("restaraunt called .... ")
  const [Restaurentdata, setRestaurentData] = useState(null);
  const [recommendation, setRecommendation] = useState([]);

  useEffect(() => {
    fetchData()//h restaurant data or perform any side effects here
  }, []);
  const param = useParams();
  const URL = "https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9507849&lng=77.532563&restaurantId="+ param.id;

  const fetchData = async () => {
    try {
      const response = await fetch(URL);
      const jsonData = await response.json();
      console.log(jsonData);
      const cardInfo = jsonData?.data?.cards.find((c) => c?.card?.card.info );
      console.log("Card Dat : ", cardInfo);
      setRestaurentData(cardInfo?.card?.card?.info);

      const gDATA = jsonData?.data?.cards.find((c) => c?.groupedCard);
      console.log("gData: ", gDATA);
      
      const RecommendatationCards = gDATA?.groupedCard?.cardGroupMap?.REGULAR?.cards;
      console.log("Recommendation Cards: ", RecommendatationCards);

      const result = RecommendatationCards.find((c)=> c?.card?.card?.itemCards)
      console.log("result : ", result);
      

      setRecommendation(result?.card?.card?.itemCards || []);

    } catch (error) {
      console.error("Error fetching restaurant data:", error);
    }
  };

  
  return (
    <div>
      <h1>Restaraunt</h1>
      {Restaurentdata === null ? 
            (<h1>Baba Ji ka thullu wait kriye.....</h1>) :
            (<div>
              <h1>{Restaurentdata?.name}</h1>
              <h2>{Restaurentdata?.cuisines?.join(", ")}</h2>
              <span>{Restaurentdata?.avgRating} stars</span> &nbsp;
              <span>{Restaurentdata?.costForTwoMessage} </span>
              <p>{Restaurentdata?.address}</p>
            </div>)
      }

      <section className='recommendation-section'>
        { recommendation.length === 0 ?
          (<h1>recommendation aa rha hai loading ho rha hia....</h1>):
          (
            <>
              <h2>Recommendations ({recommendation.length})</h2>
              <ul>
                {recommendation.map((item, index) => (
                  <li key={index}>{item?.card?.info?.name} <br /> <span>{item?.card?.info?.price/ 100} Rs/- Only</span> </li>
                ))} 
              </ul>

            </>
          )
        }

      </section>
      
    </div>
  );
};

export default Restaraunt 