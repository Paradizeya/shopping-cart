import styles from "@styles/shoppingCart/shoppingCart.module.scss";

import useCartStore from "../../stores/useCartStore";

import ShoppingCartCloseButton from "./ShoppingCartCloseButton";
import ShoppingCartBody from "./ShoppingCartBody";
import { useEffect } from "react";

type Props = {};

const ShoppingCart = ({}: Props) => {
  const isOpen = useCartStore((state) => state.isOpen);
  //Hide scroll on body
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const closeCart = useCartStore((state) => state.closeCart);
  const clickHandler = () => {
    closeCart();
  };

  return (
    <>
      {isOpen && (
        <>
          <div
            className={styles.overlay}
            onClick={() => {
              clickHandler();
            }}
          ></div>

          <aside className={`${styles.cart}`}>
            <div className={styles.cart__header}>
              <h2 className={styles.cart__title}>Cart</h2>
              <ShoppingCartCloseButton />
            </div>
            <ShoppingCartBody />
          </aside>
        </>
      )}
    </>
  );
};

export default ShoppingCart;
