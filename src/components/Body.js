import { restList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

function filterData(searchText, restaurants) {
    const filterData = restaurants.filter((restaurant) => 
        restaurant.data.name.includes(searchText)
    );
    return filterData;
}

const Body = () => {
  const [restaurants, setRestaurants] = useState(restList); //to create state variables
  const [searchText, setSearchText] = useState(""); //to create state variables

  return (
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
            const data = filterData(searchText, restaurants);
            //update the state - restaurants
            setRestaurants(data);
        }}>Search</button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
