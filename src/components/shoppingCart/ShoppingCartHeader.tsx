import styles from "./shoppingCart.module.scss";
import CloseButton from "../buttons/closeButton/closeButton";
import useCartStore from "../../stores/useCartStore";

type Props = {};

const ShoppingCartHeader = ({}: Props) => {
  const closeCart = useCartStore((state) => state.closeCart);

  return (
    <div className={styles.cartHeader}>
      <h2 className={styles.cartHeader__title}>Cart</h2>
      <CloseButton eventHandler={closeCart} />
    </div>
  );
};

export default ShoppingCartHeader;
