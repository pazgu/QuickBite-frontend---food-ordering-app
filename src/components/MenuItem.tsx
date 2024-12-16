import { MenuProduct } from "../types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type Props = {
  menuProduct: MenuProduct;
  addToCart: () => void;
};

const MenuItem = ({ menuProduct, addToCart }: Props) => {
  return (
    <Card className="cursor-pointer" onClick={addToCart}>
      <CardHeader>
        <CardTitle>{menuProduct.name}</CardTitle>
      </CardHeader>
      <CardContent className="font-bold">
        ${(menuProduct.price / 100).toFixed(2)}
      </CardContent>
    </Card>
  );
};

export default MenuItem;
