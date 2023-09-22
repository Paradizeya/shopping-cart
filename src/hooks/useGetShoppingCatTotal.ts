import useCartStore from "../stores/useCartStore";
import useShopItems from "../stores/useShopItems";

const useGetShoppingCatTotal = () => {
  const { cartItems } = useCartStore();
  const { getShopItem } = useShopItems();

  const total = cartItems.reduce((accum, item) => {
    return accum + item.amount * (getShopItem(item.id)?.price || 0);
  }, 0);
  return total;
};

export default useGetShoppingCatTotal;
