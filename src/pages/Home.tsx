import Carousel from "../components/Carousel";
import type { EmblaOptionsType } from "embla-carousel";
import carouselImg1 from "../assets/carousel/img1.jpg";
import carouselImg2 from "../assets/carousel/img2.jpg";
import carouselImg3 from "../assets/carousel/img3.jpg";
import Card from "../components/Card";
//import phone1 from "../assets/phones/iphone_7_black.webp";
//import phone2 from "../assets/phones/iphone_8_gold.webp";
//import phone3 from "../assets/phones/iphone_11_black.webp";
import homeNewPhones from "../apis/homeNewPhones.json";

function Home() {
  const SLIDES = [carouselImg1, carouselImg2, carouselImg3];
  const OPTIONS: EmblaOptionsType = { loop: true, slidesToScroll: 1 };

  //mb-14 columns-4 grid grid-cols-24 gap-x-5 md:gap-x-6 md:mb-16 md:columns-12 lg:mb-22 lg:columns-24 relative

  const dadosArray = homeNewPhones;

  return (
    <>
      <section className="mb-14 md:mb-16 lg:mb-22">
        <h1 className="hidden">Product Catalog</h1>
        <h2 className="my-6 font-semibold text-2xl md:text-5xl">
          Welcome to Nice Gadgets store!
        </h2>
        <div className="col-span-full">
          <Carousel slides={SLIDES} options={OPTIONS} />
        </div>
      </section>
      <section className="">
        <h2 className="font-semibold text-2xl mb-7">Brand new models</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {dadosArray.map((card) => {
            return (
              <Card
                imgSrc={card.imgSrc}
                imgDescription={card.imgDescription}
                title={card.title}
                description={card.description}
              />
            );
          })}
          ;
        </div>
      </section>
    </>
  );
}

export default Home;
