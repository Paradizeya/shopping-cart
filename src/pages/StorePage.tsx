//Getting data
import items from "../data/items.json";

import StoreItem from "../components/storePage/StoreItem";
import styles from "_styles/storePage/storePage.module.scss";

type Props = {};

const StorePage = ({}: Props) => {
  return (
    <section className={styles.storePage}>
      <h1 className="pageTitle">
        <span>C</span>ool <span>S</span>tore
      </h1>
      <div className={styles.wrapper}>
        {items.map((item) => {
          return <StoreItem key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default StorePage;
