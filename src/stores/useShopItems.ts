import { create } from "zustand";
import useGetShopItems from "../hooks/useGetShopItems";

type ShopItem = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

type ShopItems = {
  ShopItems: ShopItem[];
  getShopItem: (id: number) => ShopItem | null;
};

const useShopItems = create<ShopItems>()((set, get) => ({
  ShopItems: useGetShopItems(),
  getShopItem: (id: number) => {
    return get().ShopItems.find((item: ShopItem) => item.id === id) || null;
  },
}));

export default useShopItems;
