import styles from "./shoppingCart.module.scss";
import CloseButton from "../buttons/closeButton/CloseButton";

type Props = {};

const ShoppingCartHeader = ({}: Props) => {
  return (
    <div className={styles.cart__header}>
      <h2 className={styles.cart__title}>Cart</h2>
      <CloseButton />
    </div>
  );
};

export default ShoppingCartHeader;
