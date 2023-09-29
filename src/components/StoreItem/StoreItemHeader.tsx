import styles from "./storeItem.module.scss";
import ImageLoader from "../imageLoader/ImageLoader";

type Props = {
  imgUrl: string;
};

const StoreItemHeader = ({ imgUrl }: Props) => {
  return (
    <div className={styles.storeItemHeader}>
      <ImageLoader style={styles.storeItemHeader__img} src={imgUrl} />
    </div>
  );
};

export default StoreItemHeader;
