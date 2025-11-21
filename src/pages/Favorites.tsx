import React from "react";
import { useCart } from "../contexts/UseCart";
import { useFavorites } from "../contexts/UseFavorites";
import type { ProductFavoriteType } from "../interfaces/favorites";
import likeImg from "../assets/like.svg";

const ProductCard: React.FC<{ product: ProductFavoriteType }> = ({
  product,
}) => {
  const { cart, addToCart, removeFromCart } = useCart();
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();

  const inCart = cart.some(
    (item: ProductFavoriteType) => item.id === product.id
  );
  const inFavorites = favorites.some(
    (item: ProductFavoriteType) => item.id === product.id
  );

  return (
    <div className="border p-4 rounded-lg shadow-md bg-white">
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-600">$ {product.price.toFixed(2)}</p>
      {inCart ? (
        <button
          className="px-5 py-3 bg-gray-700 hover:bg-gray-800 border-black text-white cursor-pointer"
          onClick={() => removeFromCart(product.id)}
        >
          Remove from Cart
        </button>
      ) : (
        <button
          className="px-5 py-3 bg-black hover:bg-gray-700 border border-black text-white cursor-pointer"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      )}
      {inFavorites ? (
        <button
          className="px-5 py-4 bg-white hover:border hover:border-black text-white cursor-pointer"
          onClick={() => removeFromFavorites(product.id)}
        >
          <img src={likeImg} alt="like" className="bg-red-600" />
        </button>
      ) : (
        <button
          className="px-5 py-4 bg-white hover:border hover:border-black text-white cursor-pointer"
          onClick={() => addToFavorites(product)}
        >
          <img src={likeImg} alt="like" />
        </button>
      )}
    </div>
  );
};

/*const CartSummary: React.FC = () => {
  const { cart, removeFromCart, cartTotal } = useCart();

  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Seu Carrinho de Compras</h2>
      {cart.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <>
          <ul className="mb-4">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center mb-2"
              >
                <span>
                  {item.name} (Qtd: {item.quantity})
                </span>
                <div>
                  <span className="font-semibold mr-3">
                    R$ {(item.price * item.quantity).toFixed(2)}
                  </span>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 text-sm"
                    title="Remover item"
                  >
                    Remover
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="text-xl font-bold">
            Total: R$ {cartTotal.toFixed(2)}
          </div>
        </>
      )}
    </div>
  );
};*/

function Favorites() {
  const { favorites } = useFavorites();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Favoritos</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {favorites.map((fav) => (
          <ProductCard key={fav.id} product={fav} />
        ))}
        {/*<div className="lg:col-span-1">
          <CartSummary />
        </div>*/}
      </div>
    </div>
  );
}

export default Favorites;
