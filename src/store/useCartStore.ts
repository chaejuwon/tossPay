import { create } from "zustand";
import { product } from "../types/product";
import { persist } from "zustand/middleware";

export interface CartItem extends product {
  qty: number;
}

interface CartState {
  items: CartItem[];

  addItem: (p:product, qty: number) => void;
  removeItem: (id: number) => void;
  updateQty: (id: number, qty: number) => void;
  clear: () => void;
}

const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      // 장바구니 담기
      addItem: (p, qty) => {
        const exists = get().items.find((item) => item.id === p.id);

        if (exists) {
          // 이미 있으면 수량만 증가
          set({
            items: get().items.map((item) =>
              item.id === p.id
                ? { ...item, qty: item.qty + qty }
                : item
            ),
          });
        } else {
          // 없으면 새로 추가
          set({
            items: [...get().items, { ...p, qty }],
          });
        }
      },

      // 장바구니 삭제
      removeItem: (id) =>
        set({
          items: get().items.filter((item) => item.id !== id),
        }),

      // 수량 업데이트
      updateQty: (id, qty) =>
        set({
          items: get().items.map((item) =>
            item.id === id ? { ...item, qty } : item
          ),
        }),

      // 장바구니 비우기
      clear: () => set({ items: [] }),
    }),
    {
      name: "cart-storage", // localStorage key
    }
  )
);
export default useCartStore;