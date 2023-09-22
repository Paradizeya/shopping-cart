import styles from "./shoppingCart.module.scss";
import ShoppingCartItem from "../shoppingCartItem/ShoppingCartItem";

import useCartStore from "../../stores/useCartStore";
import useShopItems from "../../stores/useShopItems";
import useGetShoppingCatTotal from "../../hooks/useGetShoppingCatTotal";

import formatCurrency from "../../helpers/formatCurrency";

type Props = {};

const ShoppingCartBody = ({}: Props) => {
  const { cartItems } = useCartStore();
  const { getShopItem } = useShopItems();
  const total = useGetShoppingCatTotal();

  return (
    <div className={styles.cartWrapper}>
      <div className={styles.cartItems}>
        {cartItems.map((cartItem) => {
          const item = getShopItem(cartItem.id);
          if (item) {
            return (
              <ShoppingCartItem
                key={item.id}
                {...item}
                amount={cartItem.amount}
              />
            );
          } else return;
        })}
      </div>
      <div className={styles.total}>Total: {formatCurrency(total)}</div>
    </div>
  );
};

export default ShoppingCartBody;
