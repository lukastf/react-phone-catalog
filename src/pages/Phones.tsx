import phones from "../apis/phones.json";
import Card from "../components/Card";

function Phones() {
  return (
    <section className="">
      <h2 className="font-semibold text-2xl mb-7">Mobile Phones</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {phones.map((card) => {
          return <Card key={card.id} {...card} prefixImg={"/phones/"} />;
        })}
      </div>
    </section>
  );
}

export default Phones;
