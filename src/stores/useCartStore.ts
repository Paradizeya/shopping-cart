import { create } from "zustand";

type CartItem = {
  id: number;
  amount: number;
};

type ShoppingCart = {
  cartAmount: () => number;
  cartItems: CartItem[];
  //openCart: () => void;
  //closeCart: () => void;
  increaseCartAmount: (id: number) => void;
  decreaseCartAmount: (id: number) => void;
  removeFromCart: (id: number) => void;
  getCartItemAmount: (id: number) => number;
};

const useCartStore = create<ShoppingCart>((set, get) => ({
  cartAmount: () => {
    return get().cartItems.reduce((accum, item) => {
      return accum + item.amount;
    }, 0);
  },
  cartItems: [],

  increaseCartAmount: (id: number) => {
    if (get().cartItems.find((item) => item.id === id) == null) {
      set({
        cartItems: [...get().cartItems, { id, amount: 1 }],
      });
    } else {
      set({
        cartItems: get().cartItems.map((item: CartItem) => {
          if (item.id === id) {
            return { ...item, amount: item.amount + 1 };
          } else {
            return item;
          }
        }),
      });
    }
  },

  decreaseCartAmount: (id: number) => {
    if (get().cartItems.find((item) => item.id === id)?.amount === 1) {
      set({
        cartItems: get().cartItems.filter((item) => item.id !== id),
      });
    } else {
      set({
        cartItems: get().cartItems.map((item: CartItem) => {
          if (item.id === id) {
            return { ...item, amount: item.amount - 1 };
          } else {
            return item;
          }
        }),
      });
    }
  },

  removeFromCart: (id: number) =>
    set({
      cartItems: get().cartItems.filter((item) => item.id !== id),
    }),

  getCartItemAmount: (id: number) => {
    return get().cartItems.find((cartItem) => cartItem.id === id)?.amount || 0;
  },
}));

export default useCartStore;
