import styles from "@styles/storePage/storeItem.module.scss";
import StoreItemActions from "./StoreItemActions";
import formatCurrency from "../../helpers/formatCurrency";

type Props = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

const StoreItem = ({ id, name, price, imgUrl }: Props) => {
  return (
    <article className={styles.card}>
      {/* Card image */}
      <img className={styles.card__img} src={imgUrl} alt="" loading="lazy" />
      {/* Card Body */}
      <div className={styles.card__body}>
        {/* Name  -  Price */}
        <div className={styles.card__info}>
          <h2 className={styles.card__title}>{name}</h2>
          <span className={styles.card__price}>{formatCurrency(price)}</span>
        </div>

        {/* Actions [Add] [Remove] [Less - | More +] */}
        <StoreItemActions id={id} />
      </div>
    </article>
  );
};

export default StoreItem;
