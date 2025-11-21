import type { CartItemType, ProductType } from "./carrinho";

export interface CartContextType {
  cart: CartItemType[];
  addToCart: (product: ProductType) => void;
  subtractFromCart: (product: ProductType) => void;
  removeFromCart: (productId: number) => void;
  cartTotal: number;
}
