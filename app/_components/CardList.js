import Card from "./Card";

function CardList({ coffees }) {
  return (
    <div className="flex flex-col lg:flex-row gap-5 lg:justify-between px-5 lg:px-0">
      {coffees.map((coffee) => (
        <Card coffee={coffee} key={coffee.id} />
      ))}
    </div>
  );
}

export default CardList;
