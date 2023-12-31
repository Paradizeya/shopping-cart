import styles from "./shoppingCart.module.scss";
import ShoppingCartItem from "../shoppingCartItem/ShoppingCartItem";

import useGetShoppingCartContext from "../../hooks/useGetShoppingCartContext";
import formatCurrency from "../../helpers/formatCurrency";

type Props = {};

const ShoppingCartBody = ({}: Props) => {
  const { cartItems, cartTotal } = useGetShoppingCartContext();

  return (
    <div className={styles.cartBody}>
      <div className={styles.cartBody__items}>
        {cartItems.map((item) => {
          return <ShoppingCartItem key={item.id} {...item} />;
        })}
      </div>

      <div className={styles.cartBody__total}>
        Total: {formatCurrency(cartTotal)}
      </div>
    </div>
  );
};

export default ShoppingCartBody;
