import {
  useCreateMyRestaurant,
  useGetMyRestaurant,
} from "../api/MyRestaurantApi";
import ManageRestaurantForm from "../forms/mange-restaurant-form/ManageRestaurantForm";

const ManageRestaurantPage = () => {
  const { restaurant } = useGetMyRestaurant();
  const { createRestaurant, isLoading } = useCreateMyRestaurant();

  return (
    <ManageRestaurantForm
      restaurant={restaurant}
      onSave={createRestaurant}
      isLoading={isLoading}
    />
  );
};

export default ManageRestaurantPage;
