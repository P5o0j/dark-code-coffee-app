import Image from "next/image";

function CoffeeSide() {
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
    // <div className="grid grid-cols-[3fr_4fr] grid-flow-col hover:grid-flow-row gap-20 border border-primary-800 py-3 px-10 mb-24">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 border lg:divide-x py-5 px-5 lg:px-10 mb-24 rounded-lg">
      <div>
        <Image
          src={fakeCoffee.image}
          alt={`${fakeCoffee.title} coffee`}
          width={900}
          height={1150}
          className="object-cover	mx-auto transition-transform duration-1000 transform hover:scale-110"
        />
      </div>

      <div className="lg:pl-10">
        <h1 className="lg:text-7xl mb-5 lg:translate-x-[-300px] lg:w-[125%] bg-black/65 uppercase font-bold w-[100%] px-6 text-center lg:text-left rounded-3xl">
          {fakeCoffee.title}
        </h1>

        <p className="lg:text-lg mb-10 lg:mr-[15%]">
          {fakeCoffee.description.split("  ").at(0)}
        </p>
        <p className="lg:text-lg mb-10 lg:ml-[15%] text-right">
          {fakeCoffee.description.split("  ").at(1)}
        </p>
        <p className="lg:text-lg mb-10 lg:mr-[15%]">
          {fakeCoffee.description.split("  ").at(2)}
        </p>
        <p className="lg:text-lg mb-10 lg:ml-[15%] text-right">
          {fakeCoffee.originalDescription}
        </p>

        <p className="lg:text-lg">Blend: {fakeCoffee.blend}</p>
        <p className="lg:text-lg">Flavour: {fakeCoffee.flavour}</p>
        <div>
          <p>
            Grind Style: <br />{" "}
          </p>

          <div className="flex justify-between py-8">
            {/* Option 1 */}
            <input
              type="radio"
              name="ground"
              id="beans"
              value="roasted coffee beans"
              className="peer hidden"
              required
            />
            <label
              htmlFor="beans"
              className="cursor-pointer border-2 border-transparent rounded p-2 hover:border-gray-300 peer-checked:border-blue-500 peer-focus:bg-slate-500"
              title="Roasted coffee beans"
            >
              <Image
                src="/grind/coffee-beans.png"
                alt="Roasted coffee beans"
                height={50}
                width={50}
              />
            </label>

            {/* Option 2 */}
            <label
              htmlFor="espresso"
              className="cursor-pointer border-2 border-transparent rounded p-2 hover:border-gray-300 peer-checked:border-blue-500"
              title="Ground for espresso"
            >
              <input
                type="radio"
                name="ground"
                id="espresso"
                value="grounded for espresso"
                className="peer hidden"
                required
              />
              <Image
                src="/grind/coffee-machine.png"
                alt="Ground for espresso"
                height={50}
                width={50}
              />
            </label>

            {/* Option 3 */}
            <label
              htmlFor="pods"
              className="cursor-pointer border-2 border-transparent rounded p-2 hover:border-gray-300 peer-checked:border-blue-500"
              title="Ground for pods"
            >
              <input
                type="radio"
                name="ground"
                id="pods"
                value="grounded for pods"
                className="peer hidden"
                required
              />
              <Image
                src="/grind/pod.png"
                alt="Ground for pods"
                height={50}
                width={50}
              />
            </label>

            {/* Option 4 */}
            <label
              htmlFor="aeropress"
              className="cursor-pointer border-2 border-transparent rounded p-2 hover:border-gray-300 peer-checked:border-blue-500"
              title="Ground for aeropress"
            >
              <input
                type="radio"
                name="ground"
                id="aeropress"
                value="grounded for aeropress"
                className="peer hidden"
                required
              />
              <Image
                src="/grind/drip-glass.png"
                alt="Ground for aeropress"
                height={50}
                width={50}
              />
            </label>

            {/* Option 5 */}
            <label
              htmlFor="cafetiere"
              className="cursor-pointer border-2 border-transparent rounded p-2 hover:border-gray-300 peer-checked:border-blue-500"
              title="Ground for cafetiere"
            >
              <input
                type="radio"
                name="ground"
                id="cafetiere"
                value="grounded for cafetiere"
                className="peer hidden"
                required
              />
              <Image
                src="/grind/french-press.png"
                alt="Ground for cafetiere"
                height={50}
                width={50}
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoffeeSide;
