import { useParams } from "react-router-dom";
import { useSearchRestaurants } from "../api/RestaurantApi";

const SearchPage = () => {
  const { city } = useParams();
  const { results, isLoading } = useSearchRestaurants(city);

  if (isLoading) {
    <span>Loading ...</span>;
  }

  if (!results?.data || !city) {
    return <span>No results found</span>;
  }

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
