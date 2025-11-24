import Carousel from "../components/Carousel";
import type { EmblaOptionsType } from "embla-carousel";
import carouselImg1 from "../assets/carousel/img1.jpg";
import carouselImg2 from "../assets/carousel/img2.jpg";
import carouselImg3 from "../assets/carousel/img3.jpg";
import Card from "../components/Card";
import homeNewPhones from "../apis/homeNewPhones.json";

function Home() {
  const SLIDES = [carouselImg1, carouselImg2, carouselImg3];
  const OPTIONS: EmblaOptionsType = { loop: true, slidesToScroll: 1 };

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
          {homeNewPhones.map((card) => {
            return <Card key={card.id} {...card} />;
          })}
        </div>
      </section>
    </>
  );
}

export default Home;
