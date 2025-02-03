"use client";

import Image from "next/image";
import { useState } from "react";

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
    price: 7.99,
  };

  const [price, setPrice] = useState(fakeCoffee.price);

  return (
    // <div className="grid grid-cols-[3fr_4fr] grid-flow-col hover:grid-flow-row gap-20 border border-primary-800 py-3 px-10 mb-24">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 border lg:divide-x py-5 px-5 lg:px-10 mb-24 rounded-lg bg-black">
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

        <h3 className="lg:text-lg">Blend: {fakeCoffee.blend}</h3>
        <h3 className="lg:text-lg">Flavour: {fakeCoffee.flavour}</h3>

        {/* BAG SIZE */}
        <div className="py-3">
          <h3 className="mb-5 text-lg font-medium">Bag Size:</h3>
        </div>

        {/* GRIND STYLE */}
        <div className="py-3">
          <h3 className="mb-5 text-lg font-medium">Grind Style:</h3>
          <ul className="grid w-full gap-6 md:grid-cols-5">
            <li className="w-full text-center">
              <input
                type="radio"
                id="beans"
                name="grind"
                value="beans"
                className="hidden peer"
                required
              />
              <label
                htmlFor="beans"
                title="Roasted coffee beans"
                className="inline-flex items-center justify-between p-2 text-gray-500  border border-black rounded-lg cursor-pointer peer-checked:border-white  hover:text-gray-600 opacity-50 hover:opacity-100 peer-checked:opacity-100 "
              >
                <span>
                  <Image
                    src="/grind/coffee-beans.png"
                    alt="Roasted coffee beans"
                    height={50}
                    width={50}
                  />
                </span>
              </label>
            </li>
            <li className="w-full text-center">
              <input
                type="radio"
                id="espresso"
                name="grind"
                value="espresso"
                className="hidden peer"
                required
              />
              <label
                htmlFor="espresso"
                title="Ground for espresso"
                className="inline-flex items-center justify-between p-2 text-gray-500  border border-black rounded-lg cursor-pointer peer-checked:border-white  hover:text-gray-600 opacity-50 hover:opacity-100 peer-checked:opacity-100"
              >
                <span>
                  <Image
                    src="/grind/coffee-machine.png"
                    alt="Ground for espresso"
                    height={50}
                    width={50}
                  />
                </span>
              </label>
            </li>
            <li className="w-full text-center">
              <input
                type="radio"
                id="pods"
                name="grind"
                value="pods"
                className="hidden peer"
                required
              />
              <label
                htmlFor="pods"
                title="Ground for pods"
                className="inline-flex items-center justify-between p-2 text-gray-500  border border-black rounded-lg cursor-pointer peer-checked:border-white  hover:text-gray-600 opacity-50 hover:opacity-100 peer-checked:opacity-100"
              >
                <span>
                  <Image
                    src="/grind/pod.png"
                    alt="Ground for pods"
                    height={50}
                    width={50}
                  />
                </span>
              </label>
            </li>
            <li className="w-full text-center">
              <input
                type="radio"
                id="aeropress"
                name="grind"
                value="aeropress"
                className="hidden peer"
                required
              />
              <label
                htmlFor="aeropress"
                title="Ground for aeropress"
                className="inline-flex items-center justify-between p-2 text-gray-500  border border-black rounded-lg cursor-pointer peer-checked:border-white  hover:text-gray-600 opacity-50 hover:opacity-100 peer-checked:opacity-100"
              >
                <span>
                  <Image
                    src="/grind/drip-glass.png"
                    alt="aeropress"
                    height={50}
                    width={50}
                  />
                </span>
              </label>
            </li>
            <li className="w-full text-center">
              <input
                type="radio"
                id="cafetiere"
                name="grind"
                value="cafetiere"
                className="hidden peer"
                required
              />
              <label
                htmlFor="cafetiere"
                title="Ground for cafetiere"
                className="inline-flex items-center justify-between p-2 text-gray-500  border border-black rounded-lg cursor-pointer peer-checked:border-white  hover:text-gray-600 opacity-50 hover:opacity-100 peer-checked:opacity-100"
              >
                <span>
                  <Image
                    src="/grind/french-press.png"
                    alt="Ground for cafetiere"
                    height={50}
                    width={50}
                  />
                </span>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CoffeeSide;
