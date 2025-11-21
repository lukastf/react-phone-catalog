import { useState } from "react";
import type { ReactNode } from "react";
import type { CartItemType, ProductType } from "../interfaces/carrinho";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItemType[]>([]);

  const addToCart = (product: ProductType) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        if (existingItem.quantity >= 99) {
          return prevCart;
        }
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const subtractFromCart = (product: ProductType) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (!existingItem) return prevCart;
      if (existingItem.quantity <= 1) {
        // remove o item do carrinho se a quantidade for 1 ou menos
        return prevCart.filter((item) => item.id !== product.id);
      }
      return prevCart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
      );
    });
  };

  const removeFromCart = (productId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const value = {
    cart,
    addToCart,
    removeFromCart,
    subtractFromCart,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
