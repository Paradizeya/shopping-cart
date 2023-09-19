import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type CartItem = {
  id: number;
  amount: number;
};

type ShoppingCart = {
  cartAmount: () => number;
  cartItems: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  increaseCartAmount: (id: number) => void;
  decreaseCartAmount: (id: number) => void;
  removeFromCart: (id: number) => void;
  getCartItemAmount: (id: number) => number;
};

const useCartStore = create<ShoppingCart>()(
  devtools(
    persist(
      (set, get) => ({
        // Total Items in cart
        cartAmount: () => {
          return get().cartItems.reduce((accum, item) => {
            return accum + item.amount;
          }, 0);
        },
        // Array of Items + amount in cart
        cartItems: [],
        // Cart state and open/close functions
        isOpen: false,
        openCart: () => {
          set({ isOpen: true });
        },
        closeCart: () => {
          set({ isOpen: false });
        },
        // Add Item by ID
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
        // Remove one instance of Item by ID
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
        // Remove all instances if Item by ID
        removeFromCart: (id: number) =>
          set({
            cartItems: get().cartItems.filter((item) => item.id !== id),
          }),
        // Get amount of a single Item by ID
        getCartItemAmount: (id: number) => {
          return (
            get().cartItems.find((cartItem) => cartItem.id === id)?.amount || 0
          );
        },
      }),
      {
        name: "shoppingCartStorage",
      }
    )
  )
);

export default useCartStore;
