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
    <div className="border rounded-lg py-5 lg:w-[700] mx-auto">
      <Image
        src={fakeCoffee.image}
        alt={fakeCoffee.title}
        width={500}
        height={700}
        className="mx-auto mb-5 object-cover transition-transform duration-1000 transform hover:scale-150"
      />
      <h1 className="text-center mb-5 uppercase font-bold text-4xl">
        {fakeCoffee.title}
      </h1>
      <hr />
      <div className="p-5">
        <p className="text-md text-primary-300 mb-10">
          {fakeCoffee.description.split("  ").at(0)}
        </p>
        <p className="text-md text-primary-300 mb-10 text-right">
          {fakeCoffee.description.split("  ").at(1)}
        </p>
        <p className="text-md text-primary-300 mb-10">
          {fakeCoffee.description.split("  ").at(2)}
        </p>
        <p className="text-md text-primary-300 mb-10 text-right">
          {fakeCoffee.originalDescription}
        </p>
        <p>Blend: {fakeCoffee.blend}</p>
        <p>Flavour: {fakeCoffee.flavour}</p>
      </div>
    </div>
  );
}

export default Coffee;
