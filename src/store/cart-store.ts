import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { Bouquet } from '@/lib/mock-data';
export interface CartItem extends Bouquet {
  quantity: number;
}
type CartState = {
  items: CartItem[];
  isCartOpen: boolean;
};
type CartActions = {
  addToCart: (item: Bouquet) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  setCartOpen: (isOpen: boolean) => void;
};
export const useCartStore = create<CartState & CartActions>()(
  immer((set) => ({
    items: [],
    isCartOpen: false,
    addToCart: (item) =>
      set((state) => {
        const existingItem = state.items.find((i) => i.id === item.id);
        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          state.items.push({ ...item, quantity: 1 });
        }
        state.isCartOpen = true;
      }),
    removeFromCart: (itemId) =>
      set((state) => {
        state.items = state.items.filter((item) => item.id !== itemId);
      }),
    updateQuantity: (itemId, quantity) =>
      set((state) => {
        const item = state.items.find((i) => i.id === itemId);
        if (item) {
          if (quantity > 0) {
            item.quantity = quantity;
          } else {
            state.items = state.items.filter((i) => i.id !== itemId);
          }
        }
      }),
    clearCart: () => set({ items: [] }),
    toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
    setCartOpen: (isOpen) => set({ isCartOpen: isOpen }),
  }))
);
import { shallow } from 'zustand/shallow';

export const useCartTotals = () => {
  return useCartStore(
    (state) => {
      const totalItems = state.items.reduce(
        (total, item) => total + item.quantity,
        0
      );
      const totalPrice = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      return { totalItems, totalPrice };
    },
    shallow
  );
};