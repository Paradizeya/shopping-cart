import styles from "./storeItem.module.scss";
import StoreItemActions from "./StoreItemActions";
import formatCurrency from "../../helpers/formatCurrency";

type Props = {
  id: number;
  name: string;
  price: number;
};

const StoreItemBody = ({ id, name, price }: Props) => {
  return (
    <div className={styles.card__body}>
      <div className={styles.card__info}>
        <h2 className={styles.card__title}>{name}</h2>
        <span className={styles.card__price}>{formatCurrency(price)}</span>
      </div>

      {/* Actions [Add] [Remove] [Less - | More +] */}
      <StoreItemActions id={id} />
    </div>
  );
};

export default StoreItemBody;
