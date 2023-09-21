import StoreItem from "../components/storePage/StoreItem";
import styles from "@styles/storePage/storePage.module.scss";
import useShopItems from "../stores/useShopItems";

type Props = {};

const StorePage = ({}: Props) => {
  const items = useShopItems((state) => state.ShopItems);

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
