import styles from "./storeItem.module.scss";

type Props = {
  imgUrl: string;
};

const StoreItemHeader = ({ imgUrl }: Props) => {
  return (
    <div className={styles.storeItemHeader}>
      <img
        className={styles.storeItemHeader__img}
        src={imgUrl}
        alt=""
        loading="lazy"
      />
    </div>
  );
};

export default StoreItemHeader;
