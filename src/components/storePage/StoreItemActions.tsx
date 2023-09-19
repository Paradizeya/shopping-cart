import styles from "_styles/storePage/storeItem.module.scss";
import useCartStore from "../../stores/useCartStore";

type Props = {
  id: number;
};

const StoreItemActions = ({ id }: Props) => {
  const { increaseCartAmount, decreaseCartAmount, removeFromCart } =
    useCartStore();

  const amount = useCartStore((state) => state.getCartItemAmount(id));

  return (
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
            {/* LESS */}
            <button
              className={styles.card__changeButton}
              onClick={() => {
                decreaseCartAmount(id);
              }}
            >
              -
            </button>
            {/* Display Amount */}
            <div className={styles.card__amountText}>
              <span className={styles.card__amountNumber}>{amount}</span> in
              cart
            </div>
            {/* MORE */}
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
  );
};

export default StoreItemActions;
