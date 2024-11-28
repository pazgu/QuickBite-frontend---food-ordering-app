import { useParams } from "react-router-dom";
import { useSearchRestaurants } from "../api/RestaurantApi";

const SearchPage = () => {
  const { city } = useParams();
  const { results } = useSearchRestaurants(city);

  return (
    <div>
      {results?.data.map((restaurant) => (
        <span>
          found - {restaurant.restaurantName}, {restaurant.city}
        </span>
      ))}
    </div>
  );
};

export default SearchPage;
