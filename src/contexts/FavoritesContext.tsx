import { createContext } from "react";
import type { FavoritesContextType } from "../interfaces/favoritesContext";

export const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined
);
