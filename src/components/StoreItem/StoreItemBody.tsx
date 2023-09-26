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
    <div className={styles.storeItemBody}>
      <div className={styles.storeItemBody__info}>
        <h2 className={styles.storeItemBody__title}>{name}</h2>
        <span className={styles.storeItemBody__price}>
          {formatCurrency(price)}
        </span>
      </div>

      {/* Actions [Add] [Remove] [Less - | More +] */}
      <StoreItemActions id={id} />
    </div>
  );
};

export default StoreItemBody;
