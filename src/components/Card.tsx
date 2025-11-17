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
      <img className="w-full" src={imgSrc} alt={imgDescription} />

      {/*<!-- Seção do Conteúdo -->*/}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>

      {/*<!-- Seção de Ações/Rodapé (Opcional) -->*/}
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #tailwindcss
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #card
        </span>
      </div>
    </div>
  );
};

export default Card;
