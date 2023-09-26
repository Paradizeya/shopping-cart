import styles from "./shoppingCartItem.module.scss";
import formatCurrency from "../../helpers/formatCurrency";

type Props = {
  name: string;
  price: number;
  amount: number;
};

const ShoppingCartItemBody = ({ name, amount, price }: Props) => {
  return (
    <div className={styles.cartItemBody}>
      <span className={styles.cartItemBody__name}>
        {name} <span className={styles.cartItemBody__amount}>x{amount}</span>
      </span>
      <span className={styles.cartItemBody__price}>
        {formatCurrency(price)}
      </span>
    </div>
  );
};

export default ShoppingCartItemBody;
