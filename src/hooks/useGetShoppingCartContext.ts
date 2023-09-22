import useCartStore from "../stores/useCartStore";
import useShopItems from "../stores/useShopItems";

type CartItemsFull = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  amount: number;
};

const getShoppingCartItemsFullInfo = () => {
  const { cartItems } = useCartStore();
  const { getShopItem } = useShopItems();

  let items: CartItemsFull[] = [];

  cartItems.map((cartItem) => {
    const item = getShopItem(cartItem.id);
    if (item) {
      return items.push({ ...item, amount: cartItem.amount });
    } else return;
  });

  return items;
};

const getShoppingCartTotal = () => {
  const { cartItems } = useCartStore();
  const { getShopItem } = useShopItems();

  const total = cartItems.reduce((accum, item) => {
    return accum + item.amount * (getShopItem(item.id)?.price || 0);
  }, 0);
  return total;
};

const useGetShoppingCartContext = () => {
  const cartItems = getShoppingCartItemsFullInfo();
  const cartTotal = getShoppingCartTotal();
  return { cartItems, cartTotal };
};

export default useGetShoppingCartContext;
