import styles from "@styles/shoppingCart/shoppingCartBody.module.scss";

import useCartStore from "../../stores/useCartStore";
import useShopItems from "../../stores/useShopItems";
import ShoppingCartItem from "./ShoppingCartItem";
import formatCurrency from "../../helpers/formatCurrency";

type Props = {};

const ShoppingCartBody = ({}: Props) => {
  const { cartItems } = useCartStore();
  const { getShopItem } = useShopItems();
  const total = cartItems.reduce((accum, item) => {
    return accum + item.amount * (getShopItem(item.id)?.price || 0);
  }, 0);

  return (
    <div className={styles.wrapper}>
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
