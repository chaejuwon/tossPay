import { create } from "zustand";
import { product } from "../types/product";
import { persist } from "zustand/middleware";

interface ProductProps {
  products: product[];
  setProducts: (list: product[]) => void;
}

export const useProductStore = create<ProductProps>()(
  persist(
    (set) => ({
      products: [],
      setProducts: (list) => set({ products: list })
    }),
    {
      name: "product-storage", // localStorage key
    }
  )
);