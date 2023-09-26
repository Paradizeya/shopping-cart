import styles from "./shoppingCartItem.module.scss";

type Props = {
  imgUrl: string;
};

const ShoppingCartItemHeader = ({ imgUrl }: Props) => {
  return (
    <div className={styles.cartItemHeader}>
      <img
        className={styles.cartItemHeader__img}
        src={imgUrl}
        alt=""
        loading="lazy"
      />
    </div>
  );
};

export default ShoppingCartItemHeader;
