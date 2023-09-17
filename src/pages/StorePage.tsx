//Getting data
import items from "../data/items.json";

import StoreItem from "../components/storePage/StoreItem";
import styles from "_styles/storePage/storePage.module.scss";
import useCartStore from "../stores/useCartStore";

type Props = {};

const StorePage = ({}: Props) => {
  const cartItems = useCartStore((state) => state.cartItems);

  return (
    <section className={styles.storePage}>
      <h1 className="pageTitle">
        <span>C</span>ool <span>S</span>tore
      </h1>
      <div className={styles.wrapper}>
        {items.map((item) => {
          return (
            <StoreItem
              key={item.id}
              {...item}
              amount={
                cartItems.find((cartItem) => cartItem.id === item.id)?.amount ||
                0
              }
            />
          );
        })}
      </div>
    </section>
  );
};

export default StorePage;
