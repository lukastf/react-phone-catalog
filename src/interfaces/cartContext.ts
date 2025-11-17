import type { CartItemType, ProductType } from "../interfaces/carrinho";

export interface CartContextType {
  cart: CartItemType[];
  addToCart: (product: ProductType) => void;
  removeFromCart: (productId: number) => void;
  cartTotal: number;
}
