import styles from "./storeItem.module.scss";

type Props = {
  imgUrl: string;
};

const StoreItemHeader = ({ imgUrl }: Props) => {
  return (
    <div className={styles.card__header}>
      <img className={styles.card__img} src={imgUrl} alt="" loading="lazy" />
    </div>
  );
};

export default StoreItemHeader;
