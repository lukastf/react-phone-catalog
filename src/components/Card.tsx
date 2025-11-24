import likeImg from "../assets/like.svg";
import { useCart } from "../contexts/UseCart";
import { useFavorites } from "../contexts/UseFavorites";
import type { ProductType } from "../interfaces/carrinho";
import type { ProductFavoriteType } from "../interfaces/favorites";
import { Link } from "react-router-dom";

interface cardProps {
  id: number;
  name: string;
  price: number;

  imgSrc: string[];
  imgDescription: string;
  description: string;

  screen: string;
  capacity: string;
  ram: string;
  prefixImg: string;
}

const Card = ({
  id,
  name,
  price,
  imgSrc,
  imgDescription,
  screen,
  capacity,
  ram,
  prefixImg = "",
}: cardProps) => {
  const { cart, addToCart, removeFromCart } = useCart();
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();

  // verifica se o produto já está no carrinho
  const inCart = cart.some((item: ProductType) => item.id === id);
  const inFavorites = favorites.some(
    (item: ProductFavoriteType) => item.id === id
  );

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <Link to={`/phones/${id}`}>
        <img
          className="w-full h-1/2 object-contain"
          src={prefixImg + imgSrc[0]}
          alt={imgDescription}
        />

        {/*<!-- Seção do Conteúdo -->*/}
        <div className="px-6 py-4">
          <h3 className="font-bold text-base mb-2">{name}</h3>
          <p className="text-gray-700 text-4xl">$ {price}</p>
        </div>

        <div className="px-6 py-4">
          <p className="text-gray-700 text-base">Screen {screen}</p>
          <p className="text-gray-700 text-base">Capacity {capacity}</p>
          <p className="text-gray-700 text-base">Ram {ram}</p>
        </div>
      </Link>
      {/*<!-- Seção da Imagem -->*/}

      {/*<!-- Seção de Ações/Rodapé (Opcional) -->*/}
      <div className="px-6 pt-4 pb-2 flex justify-between">
        {inCart ? (
          <button
            className="px-5 py-3 bg-gray-700 hover:bg-gray-800 border-black text-white cursor-pointer"
            onClick={() => removeFromCart(id)}
          >
            Remove from Cart
          </button>
        ) : (
          <button
            className="px-5 py-3 bg-black hover:bg-gray-700 border border-black text-white cursor-pointer"
            onClick={() => addToCart({ id, name, price })}
          >
            Add to Cart
          </button>
        )}

        {inFavorites ? (
          <button
            className="px-5 py-4 bg-white hover:border hover:border-black text-white cursor-pointer"
            onClick={() => removeFromFavorites(id)}
          >
            <img src={likeImg} alt="like" className="bg-red-600" />
          </button>
        ) : (
          <button
            className="px-5 py-4 bg-white hover:border hover:border-black text-white cursor-pointer"
            onClick={() => addToFavorites({ id, name, price })}
          >
            <img src={likeImg} alt="like" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
