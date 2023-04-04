import { restList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from 'react-router-dom'

function filterData(searchText, restaurants) {
    const filterData = restaurants.filter((restaurant) => 
        restaurant.data.name.toLowerCase()?.includes(searchText.toLowerCase())
    );
    return filterData;
}

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]); //to create state variables
  const [filteredRestaurants, setFilteredRestaurants] = useState([]); //to create state variables
  const [searchText, setSearchText] = useState(""); //to create state variables

  useEffect(() => {
    console.log("call this when dependency is changed");
    getRestaurants();
  }, []); //dependency array
  console.log("render");

  async function getRestaurants() {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0929272&lng=72.86537679999999&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json();
    console.log(json);
    console.log(json?.data?.cards[1]?.data?.data?.cards);
    if (json?.data?.cards[0].cardType=="seeAllRestaurants") {
      value = json?.data?.cards[0]?.data?.data?.cards
    } else if (json?.data?.cards[1].cardType=="seeAllRestaurants") {
      value = json?.data?.cards[1]?.data?.data?.cards
    } else {
      value = json?.data?.cards[2]?.data?.data?.cards
    }
    setAllRestaurants(value)
    setFilteredRestaurants(value)
  }

  //Not render component - early return
  if (!allRestaurants) return null;

  return allRestaurants.length === 0 ? ( <Shimmer/> ) : (
    <div>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
        }}
        />
        <button className="search-btn" onClick={() => {
            //need to filter data
            const data = filterData(searchText, allRestaurants);
            //update the state - restaurants
            setFilteredRestaurants(data);
            console.log(data)
        }}>Search</button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants.length === 0 ? (
          <h1>No restaurants match your filter!</h1>
        ) : (
          filteredRestaurants.map((restaurant) => {
            restaurant.length === 0
            return (
              <Link to={"/restaurant/" + restaurant.data.id}
              key={restaurant.data.id}>
                <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
              </Link>
            );
          })
      )}
      </div>
    </div>
  );
};

export default Body;
