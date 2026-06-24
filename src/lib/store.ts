import { create } from "zustand";
import { Product } from "./data";

type CartItem = {
  product: Product;
  quantity: number;
  size: string;
  color: string;
};

type CartStore = {
  items: CartItem[];
  addItem: (product: Product, size: string, color: string) => void;
  removeItem: (productId: string, size: string, color: string) => void;
  updateQuantity: (productId: string, size: string, color: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: () => number;
  totalPrice: () => number;
};

type WishlistStore = {
  items: Product[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  toggleItem: (product: Product) => void;
};

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  addItem: (product, size, color) => {
    const items = get().items;
    const existing = items.find(
      (i) => i.product.id === product.id && i.size === size && i.color === color
    );
    if (existing) {
      set({
        items: items.map((i) =>
          i.product.id === product.id && i.size === size && i.color === color
            ? { ...i, quantity: i.quantity + 1 }
            : i
        ),
      });
    } else {
      set({ items: [...items, { product, quantity: 1, size, color }] });
    }
  },
  removeItem: (productId, size, color) => {
    set({
      items: get().items.filter(
        (i) => !(i.product.id === productId && i.size === size && i.color === color)
      ),
    });
  },
  updateQuantity: (productId, size, color, quantity) => {
    if (quantity <= 0) {
      get().removeItem(productId, size, color);
      return;
    }
    set({
      items: get().items.map((i) =>
        i.product.id === productId && i.size === size && i.color === color
          ? { ...i, quantity }
          : i
      ),
    });
  },
  clearCart: () => set({ items: [] }),
  totalItems: () => get().items.reduce((sum, i) => sum + i.quantity, 0),
  totalPrice: () =>
    get().items.reduce((sum, i) => sum + i.product.salePrice * i.quantity, 0),
}));

export const useWishlistStore = create<WishlistStore>((set, get) => ({
  items: [],
  addItem: (product) => {
    if (!get().isInWishlist(product.id)) {
      set({ items: [...get().items, product] });
    }
  },
  removeItem: (productId) => {
    set({ items: get().items.filter((p) => p.id !== productId) });
  },
  isInWishlist: (productId) => get().items.some((p) => p.id === productId),
  toggleItem: (product) => {
    if (get().isInWishlist(product.id)) {
      get().removeItem(product.id);
    } else {
      get().addItem(product);
    }
  },
}));
