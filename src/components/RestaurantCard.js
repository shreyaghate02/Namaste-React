import { IMG_CDN_URL } from '../constants';

const RestaurantCard = ({ name,cloudinaryImageId, cuisines, lastMileTravelString }) => {
  console.log("hello")
    return (
      <div className='card'>
        <img src={IMG_CDN_URL + cloudinaryImageId} alt="cardimg" />
        <h2>{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{lastMileTravelString}</h4>
      </div>
    )
}

export default RestaurantCard;