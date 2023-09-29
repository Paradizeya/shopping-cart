import styles from "./shoppingCartItem.module.scss";
import ImageLoader from "../imageLoader/ImageLoader";

type Props = {
  imgUrl: string;
};

const ShoppingCartItemHeader = ({ imgUrl }: Props) => {
  return (
    <div className={styles.cartItemHeader}>
      <ImageLoader style={styles.cartItemHeader__img} src={imgUrl} />
    </div>
  );
};

export default ShoppingCartItemHeader;
