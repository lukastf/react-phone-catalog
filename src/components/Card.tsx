import likeImg from "../assets/like.svg";

interface cardProps {
  imgSrc: string;
  imgDescription: string;
  title: string;
  description: string;
}

const Card = ({ imgSrc, imgDescription, title, description }: cardProps) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      {/*<!-- Seção da Imagem -->*/}
      <img className="w-full h-1/2" src={imgSrc} alt={imgDescription} />

      {/*<!-- Seção do Conteúdo -->*/}
      <div className="px-6 py-4">
        <h3 className="font-bold text-base mb-2">{title}</h3>
        <p className="text-gray-700 text-4xl">{description}</p>
      </div>

      {/*<!-- Seção de Ações/Rodapé (Opcional) -->*/}
      <div className="px-6 pt-4 pb-2 flex justify-between">
        <button className="px-5 py-3 bg-black hover:bg-gray-700 border border-black text-white cursor-pointer">
          Add to Cart
        </button>
        <button className="px-5 py-4 bg-white hover:border hover:border-black text-white cursor-pointer">
          <img src={likeImg} alt="like" />
        </button>
      </div>
    </div>
  );
};

export default Card;
