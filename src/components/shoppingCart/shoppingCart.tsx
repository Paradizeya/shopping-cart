import styles from "@styles/shoppingCart/shoppingCart.module.scss";
import useCartStore from "../../stores/useCartStore";

type Props = {};

const ShoppingCart = ({}: Props) => {
  console.log("render Cart");
  const closeCart = useCartStore((state) => state.closeCart);

  const clickHandler = () => {
    closeCart();
  };

  return (
    <aside className={styles.wrapper}>
      <button
        onClick={() => {
          clickHandler();
        }}
      >
        Close
      </button>
      shoppingCart
    </aside>
  );
};

export default ShoppingCart;
