import { useParams, useNavigate } from "react-router-dom";
import type { ProductType } from "../interfaces/carrinho";
// se você tem um array de produtos, importe-o; caso contrário use contexto ou fetch
import phones from "../apis/phones.json"; // opcional, ajuste conforme seu projeto
import { useCart } from "../contexts/UseCart";
import { useFavorites } from "../contexts/UseFavorites";
import type { ProductFavoriteType } from "../interfaces/favorites";
import likeImg from "../assets/like.svg";
import { useEffect } from "react";

function Phone() {
  const { cart, addToCart, removeFromCart } = useCart();
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();

  const { id } = useParams();
  const productId = Number(id);

  useEffect(() => {
    // leva a página ao topo ao entrar na rota / quando o id mudar
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [productId]);

  const product = phones?.find((p: ProductType) => p.id === productId);
  const navigate = useNavigate();

  if (!product) return <div>Produto não encontrado</div>;

  const inCart = cart.some((item: ProductType) => item.id === productId);
  const inFavorites = favorites.some(
    (item: ProductFavoriteType) => item.id === productId
  );

  return (
    <div className="p-6">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 bg-white px-3 py-3 cursor-pointer"
      >
        {"<"} Back
      </button>
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <img
          src={product.imgSrc}
          alt={product.imgDescription}
          className="my-4 max-w-xs"
        />
        <div className="flex">
          <p className="w-1/2 text-center">{product.description}</p>
          <div className="w-1/2 text-center">
            <p className="text-6xl mb-10">$ {product.price}</p>
            <p className="flex justify-evenly">
              <span className="font-bold">Screen:</span>
              {product.screen}
            </p>
            <p className="flex justify-evenly">
              <span className="font-bold">Capacity:</span>
              {product.capacity}
            </p>
            <p className="flex justify-evenly">
              <span className="font-bold">Ram:</span>
              {product.ram}
            </p>
          </div>
        </div>

        <div className="px-6 pt-4 pb-2 lg:w-100 flex justify-between">
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
      </div>
    </div>
  );
}

export default Phone;
