import { lazy, Suspense } from "react";
//const ShoppingCartHeader = lazy(() => import("./ShoppingCartHeader"));
const ShoppingCartBody = lazy(() => import("./ShoppingCartBody"));

import styles from "./shoppingCart.module.scss";
import LoadingPlaceholder from "../loadingPlaceholder/LoadingPlaceholder";
import ShoppingCartHeader from "./ShoppingCartHeader";
// import ShoppingCartBody from "./ShoppingCartBody";

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
            <Suspense
              fallback={
                <LoadingPlaceholder>Looking for your cart</LoadingPlaceholder>
              }
            >
              <ShoppingCartBody />
            </Suspense>
          </aside>
        </>
      )}
    </>
  );
};

export default ShoppingCart;
