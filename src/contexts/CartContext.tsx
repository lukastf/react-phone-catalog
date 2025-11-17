import { createContext } from "react";
import type { CartContextType } from "../interfaces/cartContext";

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);
