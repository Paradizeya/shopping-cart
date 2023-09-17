import styles from "_styles/storePage/storeItem.module.scss";
import useCartStore from "../../stores/useCartStore";

type Props = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

const StoreItem = ({ id, name, price, imgUrl }: Props) => {
  const { increaseCartAmount, decreaseCartAmount, removeFromCart } =
    useCartStore();

  const amount = useCartStore((state) => state.getCartItemAmount(id));

  return (
    <article className={styles.card}>
      {/* Card image */}
      <img className={styles.card__img} src={imgUrl} alt="" loading="lazy" />
      {/* Card Body */}
      <div className={styles.card__body}>
        {/* Name  -  Price */}
        <div className={styles.card__info}>
          <h2 className={styles.card__title}>{name}</h2>
          <span className={styles.card__price}>${price}</span>
        </div>
        {/* Actions [Add] [Remove] [Less - | More +] */}
        <div className={styles.card__actions}>
          {amount === 0 ? (
            // Add button
            <button
              className={styles.card__addButton}
              onClick={() => {
                increaseCartAmount(id);
              }}
            >
              + Add to Cart
            </button>
          ) : (
            <>
              {/* --- Buttons (- / +) and display Amount --- */}
              <div className={styles.card__amountActions}>
                <button
                  className={styles.card__changeButton}
                  onClick={() => {
                    decreaseCartAmount(id);
                  }}
                >
                  -
                </button>

                <div className={styles.card__amountText}>
                  <span className={styles.card__amountNumber}>{amount}</span> in
                  cart
                </div>

                <button
                  className={styles.card__changeButton}
                  onClick={() => {
                    increaseCartAmount(id);
                  }}
                >
                  +
                </button>
              </div>
              {/* Remove button */}
              <button
                className={styles.card__removeButton}
                onClick={() => {
                  removeFromCart(id);
                }}
              >
                Remove
              </button>
            </>
          )}
        </div>
      </div>
    </article>
  );
};

export default StoreItem;
