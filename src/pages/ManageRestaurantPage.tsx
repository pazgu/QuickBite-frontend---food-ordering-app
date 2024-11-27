import {
  useCreateMyRestaurant,
  useGetMyRestaurant,
  useUpdateMyRestaurant,
} from "../api/MyRestaurantApi";
import ManageRestaurantForm from "../forms/mange-restaurant-form/ManageRestaurantForm";

const ManageRestaurantPage = () => {
  const { restaurant } = useGetMyRestaurant();
  const { createRestaurant, isLoading: isCreateLoading } =
    useCreateMyRestaurant();
  const { updateRestaurant, isLoading: isUpdateLoading } =
    useUpdateMyRestaurant();

  const isEditing = !!restaurant;
  //whenever the page loads for the first time we check if the restaurant already exists for the user
  // !! means give me the truthy value of this variable

  return (
    <ManageRestaurantForm
      restaurant={restaurant}
      onSave={isEditing ? updateRestaurant : createRestaurant}
      isLoading={isCreateLoading || isUpdateLoading}
    />
  );
};

export default ManageRestaurantPage;
