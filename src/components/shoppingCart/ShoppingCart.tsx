import styles from "./shoppingCart.module.scss";
import ShoppingCartHeader from "./ShoppingCartHeader";
import ShoppingCartBody from "./ShoppingCartBody";

import useCartStore from "../../stores/useCartStore";
import useHideScroll from "../../hooks/useHideScroll";

type Props = {};

const ShoppingCart = ({}: Props) => {
  const isOpen = useCartStore((state) => state.isOpen);
  const closeCart = useCartStore((state) => state.closeCart);
  //Hide scroll on body
  useHideScroll(isOpen, document.body);

  return (
    <>
      {isOpen && (
        <>
          {/* Overlay */}
          <div className={styles.overlay} onClick={() => closeCart()}></div>

          {/* Cart side-bar */}
          <aside className={`${styles.cart}`}>
            <ShoppingCartHeader />
            <ShoppingCartBody />
          </aside>
        </>
      )}
    </>
  );
};

export default ShoppingCart;
