import styles from "./shoppingCartItem.module.scss";

import ShoppingCartItemHeader from "./ShoppingCartItemHeader";
import ShoppingCartItemBody from "./ShoppingCartItemBody";
import ShoppingCartItemFooter from "./ShoppingCartItemFooter";

type Props = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  amount: number;
};

const ShoppingCartItem = ({ id, name, price, imgUrl, amount }: Props) => {
  return (
    <div className={styles.cartItem}>
      <ShoppingCartItemHeader imgUrl={imgUrl} />
      <ShoppingCartItemBody name={name} price={price} amount={amount} />
      <ShoppingCartItemFooter id={id} price={price} amount={amount} />
    </div>
  );
};

export default ShoppingCartItem;
