// src/components/Carousel.tsx
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType } from "embla-carousel";
//import carouselImg1 from '../assets/carousel/img1.jpg';
//import carouselImg2 from '../assets/carousel/img2.jpg';
//import carouselImg3 from '../assets/carousel/img3.jpg';

// Define o tipo para as propriedades do componente, incluindo opções do Embla
type PropType = {
  slides: string[]; // Array simples para exemplo, você pode passar objetos
  options?: EmblaOptionsType;
};

const Carousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;

  // Hook principal do Embla, retorna a referência (ref) para o contêiner e a API
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const scrollPrev = () => {
    if (emblaApi) emblaApi.scrollPrev();
  };

  const scrollNext = () => {
    if (emblaApi) emblaApi.scrollNext();
  };

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((img, index) => (
            <div className="flex-[0_0_100%] min-w-0" key={index}>
              <div className="flex items-center justify-center h-full bg-white text-white m-2 rounded-lg">
                <img src={img} alt="" />
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Botões de Navegação */}
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg ml-2"
        onClick={scrollPrev}
      >
        &#10094; {/* Seta esquerda */}
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg mr-2"
        onClick={scrollNext}
      >
        &#10095; {/* Seta direita */}
      </button>
    </div>
  );
};

export default Carousel;
