import { useState, useEffect } from "react";
import { json, useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { id } = useParams();
  console.log(id);
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);
  const url =
    "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0929272&lng=72.86537679999999&restaurantId=" +
    id;
  console.log(url);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0929272&lng=72.86537679999999&restaurantId=" +
        id
    );
    const json = await data.json();
    console.log(json);
    setRestaurant(json.data);
  }

  if (!restaurant) {
    return <Shimmer />;
  }

  function findCard(restaurant) {
    for (let i = 0; i < restaurant?.cards?.length; i++) {
      if (restaurant?.cards[i]?.groupedCard) {
        return restaurant?.cards[i];
      }
    }
  }

  const foodData = findCard(restaurant)
    .groupedCard.cardGroupMap.REGULAR.cards.filter(
      (card) => card?.card?.card?.categories || card?.card?.card?.itemCards
    )
    .map((card) => card?.card?.card);

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h1>Restaurant id: {id}</h1>
        <h2>{restaurant?.cards[0]?.card?.card?.info?.name}</h2>
        <img
          src={
            IMG_CDN_URL +
            restaurant?.cards[0]?.card?.card?.info?.cloudinaryImageId
          }
        ></img>
        <h3>{restaurant?.cards[0]?.card?.card?.info?.areaName}</h3>
        <h3>{restaurant?.cards[0]?.card?.card?.info?.city}</h3>
        <h3>{restaurant?.cards[0]?.card?.card?.info?.avgRating}</h3>
        <h3>{restaurant?.cards[0]?.card?.card?.info?.costForTwoMessage}</h3>
      </div>
      <div>
        {console.log(restaurant)}
        {console.log(
          Object.values(
            findCard(restaurant).groupedCard.cardGroupMap.REGULAR.cards
          )
        )}
        {console.log(
          findCard(restaurant)
            .groupedCard.cardGroupMap.REGULAR.cards.filter(
              (card) => card?.card?.card?.categories
            )
            .map((item) => item?.card?.card?.categories)
        )}
        {console.log(
          Object.values(
            findCard(restaurant)
              .groupedCard.cardGroupMap.REGULAR.cards.filter(
                (card) => card?.card?.card?.categories
              )
              .map((item) => item?.card?.card?.categories)
              .map((cat) => cat?.title)
          )
        )}
      </div>

      <div>
        <>
          <h1>Menu</h1>
          <ul>
            {foodData.map((mainTitle) => {
              console.log("mainTitle", mainTitle);
              if (mainTitle?.categories) {
                return (
                  <>
                    <li>{mainTitle?.title}</li>
                    <ul>
                      {mainTitle?.categories.map((catergoryTitle) => {
                        return (
                          <>
                            <li>{catergoryTitle?.title}</li>
                            <ul>
                              {catergoryTitle?.itemCards.map((item) => {
                                return (
                                  <>
                                    <li>{item?.card?.info?.name}</li>
                                    <li>{item?.card?.info?.price}</li>
                                  </>
                                );
                              })}
                            </ul>
                          </>
                        );
                      })}
                    </ul>
                  </>
                );
              } else {
                return (
                  <>
                    <li>{mainTitle?.title}</li>
                    <ul>
                      {mainTitle?.itemCards.map((item) => {
                        return (
                          <>
                            <li>{item?.card?.info?.name}</li>
                            <li>{item?.card?.info?.price}</li>
                          </>
                        );
                      })}
                    </ul>
                  </>
                );
              }
            })}
          </ul>
        </>
      </div>
    </div>
  );
};

export default RestaurantMenu;
