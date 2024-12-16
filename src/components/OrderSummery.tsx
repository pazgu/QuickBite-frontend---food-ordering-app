import { CartItem } from "../pages/RestaurantPage";
import { Restaurant } from "../types";

type Props = {
  restaurant: Restaurant;
  cartItems: CartItem[];
};

const OrderSummary = ({ restaurant, cartItems }: Props) => {
  return <></>;
};

export default OrderSummary;
