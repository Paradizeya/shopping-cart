import useCartStore from "../../stores/useCartStore";
import ShoppingCart from "./ShoppingCart";

type Props = {};

const ShoppingCartWrapper = ({}: Props) => {
  console.log("render wrapper");
  const isOpen = useCartStore((state) => state.isOpen);

  return <>{isOpen && <ShoppingCart />}</>;
};

export default ShoppingCartWrapper;
