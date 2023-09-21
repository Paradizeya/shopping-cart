import styles from "@styles/shoppingCart/shoppingCartItem.module.scss";
import useCartStore from "../../stores/useCartStore";

type Props = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  amount: number;
};

const ShoppingCartItem = ({ id, name, price, imgUrl, amount }: Props) => {
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  return (
    <div className={styles.cartItem}>
      <div className={styles.cartItem__start}>
        {/* Item img */}
        <img
          className={styles.cartItem__img}
          src={imgUrl}
          alt=""
          loading="lazy"
        />
      </div>

      {/* Item Name x amount */}
      <div className={styles.cartItem__middle}>
        <span className={styles.cartItem__name}>
          {name} <span className={styles.cartItem__amount}>x{amount}</span>
        </span>
        <span className={styles.cartItem__price}>${price}</span>
      </div>

      <div className={styles.cartItem__end}>
        {/* Item total Price */}
        <span className={styles.cartItem__totalPrice}>${amount * price}</span>
        {/* Delete button */}
        <button
          className={styles.cartItem__removeButton}
          onClick={() => {
            removeFromCart(id);
          }}
        >
          x
        </button>
      </div>
    </div>
  );
};

export default ShoppingCartItem;
