import type { ProductFavoriteType } from "./favorites";

export interface FavoritesContextType {
  favorites: ProductFavoriteType[];
  addToFavorites: (product: ProductFavoriteType) => void;
  removeFromFavorites: (productId: number) => void;
}
