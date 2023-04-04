import { useState, useEffect } from "react";
import { json, useParams } from "react-router-dom";
import { IMG_CDN_URL } from '../constants';
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const {id} = useParams();
    console.log(id);
    const [restaurant, setRestaurant] = useState(null);

    useEffect(() => {
        getRestaurantInfo();
    }, []);
    const url = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0929272&lng=72.86537679999999&restaurantId=" + id;
    console.log(url);
    
    async function getRestaurantInfo() {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0929272&lng=72.86537679999999&restaurantId=" + id);
        const json = await data.json();
        console.log(json);
        setRestaurant(json.data);
     }

    if (!restaurant) {
        return <Shimmer />
    }

    function findCard(restaurant) {
        for (let i = 0; i < restaurant?.cards?.length; i++) {
            if (restaurant?.cards[i]?.groupedCard) {
                return restaurant?.cards[i];
            }
        }
    }
        console.log(findCard(restaurant))
    return (!restaurant) ? <Shimmer /> : (
        <div className="menu">
        <div>
            <h1>Restaurant id: {id}</h1>
            <h2>{restaurant?.cards[0]?.card?.card?.info?.name}</h2>
            <img src={IMG_CDN_URL + restaurant?.cards[0]?.card?.card?.info?.cloudinaryImageId}></img>
            <h3>{restaurant?.cards[0]?.card?.card?.info?.areaName}</h3>
            <h3>{restaurant?.cards[0]?.card?.card?.info?.city}</h3>
            <h3>{restaurant?.cards[0]?.card?.card?.info?.avgRating}</h3>
            <h3>{restaurant?.cards[0]?.card?.card?.info?.costForTwoMessage}</h3>
        </div>
        </div>
    )
};

export default RestaurantMenu;