import styles from "./shoppingCartItem.module.scss";
import formatCurrency from "../../helpers/formatCurrency";
import useCartStore from "../../stores/useCartStore";

import DiscardButton from "../buttons/discardButton/DiscardButton";

type Props = {
  id: number;
  price: number;
  amount: number;
};

const ShoppingCartItemFooter = ({ id, amount, price }: Props) => {
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  return (
    <div className={styles.cartItemFooter}>
      {/* Item total Price */}
      <span className={styles.cartItemFooter__totalPrice}>
        {formatCurrency(amount * price)}
      </span>
      {/* Delete button */}
      <DiscardButton id={id} eventHandler={removeFromCart} />
    </div>
  );
};

export default ShoppingCartItemFooter;
