import { useState } from "react";
import type { ReactNode } from "react";
import type { ProductFavoriteType } from "../interfaces/favorites";
import { FavoritesContext } from "./FavoritesContext";

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<ProductFavoriteType[]>([]);

  const addToFavorites = (product: ProductFavoriteType) => {
    setFavorites((prevFavorites) => {
      /*const existingItem = prevFavorites.find((item) => item.id === product.id);
      if (existingItem) {
        return prevFavorites.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }*/
      return [...prevFavorites, { ...product }];
    });
  };

  const removeFromFavorites = (productId: number) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((item) => item.id !== productId)
    );
  };

  const value = { favorites, addToFavorites, removeFromFavorites };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};
