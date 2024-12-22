import Image from "next/image";

function Coffee() {
  const fakeCoffee = {
    id: "test",
    title: "Sample Coffee",
    description:
      "111Cupcake ipsum dolor sit amet pastry sweet roll wafer. Sugar plum lemon drops pudding fruitcake marshmallow. Icing shortbread sugar plum dragée oat cake cake pie. Chupa chups dragée chocolate cake cupcake liquorice candy canes sweet roll.  222Chupa chups liquorice macaroon muffin wafer pie soufflé gingerbread wafer. Dragée soufflé marzipan shortbread chocolate bonbon powder cake. Brownie croissant bonbon cupcake icing muffin macaroon. Jelly pie wafer ice cream sweet roll oat cake powder marshmallow oat cake.  333Croissant sesame snaps sesame snaps sweet roll chupa chups pastry lemon drops topping wafer. Cupcake brownie shortbread icing tootsie roll. Wafer marzipan macaroon sugar plum shortbread jelly-o carrot cake macaroon shortbread.",
    originalDescription:
      "Original desc Cupcake ipsum dolor sit amet pastry sweet roll wafer. Sugar plum lemon drops pudding fruitcake marshmallow. Icing shortbread sugar plum dragée oat cake cake pie. Chupa chups dragée chocolate cake cupcake liquorice candy canes sweet roll.",
    image: "/product_images/DDoSBag.jpg",
    blend: "Brazil",
    flavour: "Smooth, Dark Chocolate",
  };

  return (
    <div className="grid grid-cols-[3fr_4fr] gap-20 border border-primary-800 py-3 px-10 mb-24">
      <div className="relative scale-[1.15] -translate-x-3">
        <Image
          src={fakeCoffee.image}
          alt={`${fakeCoffee.title} coffee`}
          fill
          className="object-cover"
        />
      </div>

      <div>
        <h3 className="text-accent-100 font-black text-7xl mb-5 translate-x-[-254px] bg-primary-950 p-6 pb-1 w-[150%]">
          {fakeCoffee.title}
        </h3>

        <p className="text-lg text-primary-300 mb-10">
          {fakeCoffee.description.split("  ").at(0)}
        </p>
        <p className="text-lg text-primary-300 mb-10">
          {fakeCoffee.description.split("  ").at(1)}
        </p>
        <p className="text-lg text-primary-300 mb-10">
          {fakeCoffee.description.split("  ").at(2)}
        </p>
        <p className="text-lg text-primary-300 mb-10">
          {fakeCoffee.originalDescription}
        </p>

        <ul className="flex flex-col gap-4 mb-7">
          <li className="flex gap-3 items-center">
            <span className="text-lg">
              {/* For up to <span className="font-bold">{maxCapacity}</span> guests */}
            </span>
          </li>
          <li className="flex gap-3 items-center">
            <span className="text-lg">
              Located in the heart of the{" "}
              <span className="font-bold">Dolomites</span> (Italy)
            </span>
          </li>
          <li className="flex gap-3 items-center">
            <span className="text-lg">
              Privacy <span className="font-bold">100%</span> guaranteed
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Coffee;
