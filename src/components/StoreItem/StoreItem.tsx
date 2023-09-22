import styles from "./storeItem.module.scss";
import StoreItemHeader from "./StoreItemHeader";
import StoreItemBody from "./StoreItemBody";

type Props = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

const StoreItem = ({ id, name, price, imgUrl }: Props) => {
  return (
    <article className={styles.card}>
      <StoreItemHeader imgUrl={imgUrl} />
      <StoreItemBody id={id} name={name} price={price} />
    </article>
  );
};

export default StoreItem;
