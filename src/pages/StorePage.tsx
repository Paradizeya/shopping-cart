import "@styles/storePage.scss";
import StoreItem from "../components/storeItem/StoreItem";
import useShopItems from "../stores/useShopItems";

type Props = {};

const StorePage = ({}: Props) => {
  const items = useShopItems((state) => state.ShopItems);

  return (
    <>
      <div className="page__header">
        <h1 className="page__title">
          <span>C</span>ool <span>S</span>tore
        </h1>
      </div>
      <div className="page__body storePage_body">
        {items.map((item) => {
          return <StoreItem key={item.id} {...item} />;
        })}
      </div>
    </>
  );
};

export default StorePage;
