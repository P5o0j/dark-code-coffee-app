"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import GroundStyle from "./GroundStyle";
import Weight from "./Weight";
import { FaArrowLeft } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Button from "./Button";

function CoffeeSide() {
  const fakeCoffee = {
    id: "dcc001",
    title: "Sample Coffee",
    description:
      "111Cupcake ipsum dolor sit amet pastry sweet roll wafer. Sugar plum lemon drops pudding fruitcake marshmallow. Icing shortbread sugar plum dragée oat cake cake pie. Chupa chups dragée chocolate cake cupcake liquorice candy canes sweet roll.  222Chupa chups liquorice macaroon muffin wafer pie soufflé gingerbread wafer. Dragée soufflé marzipan shortbread chocolate bonbon powder cake. Brownie croissant bonbon cupcake icing muffin macaroon. Jelly pie wafer ice cream sweet roll oat cake powder marshmallow oat cake.  333Croissant sesame snaps sesame snaps sweet roll chupa chups pastry lemon drops topping wafer. Cupcake brownie shortbread icing tootsie roll. Wafer marzipan macaroon sugar plum shortbread jelly-o carrot cake macaroon shortbread.",
    originalDescription:
      "Original desc Cupcake ipsum dolor sit amet pastry sweet roll wafer. Sugar plum lemon drops pudding fruitcake marshmallow. Icing shortbread sugar plum dragée oat cake cake pie. Chupa chups dragée chocolate cake cupcake liquorice candy canes sweet roll.",
    image: "/product_images/DDoSBag.jpg",
    blend: "Brazil",
    flavour: "Smooth, Dark Chocolate",
  };

  const [price, setPrice] = useState(7.99);
  const [selectedBagSize, setSelectedBagSize] = useState("250");
  const [selectedGround, setSelectedGround] = useState("");

  const router = useRouter();

  function handleBagSizeChange(size) {
    setSelectedBagSize(size);

    // Update price based on size
    switch (size) {
      case "500":
        setPrice(9.99);
        break;
      case "1000":
        setPrice(14.99);
        break;
      default:
        setPrice(7.99);
    }
  }

  function handleGroundChange(ground) {
    setSelectedGround(ground);
  }

  function handleAddToCart() {
    if (!selectedBagSize || !selectedGround) {
      toast.error("Please select both Bag Size and Grind Style.");
      return;
    }

    toast.success(
      `Your Order: ${fakeCoffee.id}, ${fakeCoffee.title}, ${selectedBagSize}g, ${selectedGround}`
    );
  }

  return (
    <>
      <Toaster />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 border lg:divide-x py-5 px-5 lg:px-10 mb-24 rounded-lg bg-black">
        {/* IMAGE SECTION */}
        <div>
          <Image
            src={fakeCoffee.image}
            alt={`${fakeCoffee.title} coffee`}
            width={900}
            height={1150}
            className="object-cover mx-auto transition-transform duration-1000 transform hover:scale-110"
          />
        </div>

        {/* DETAILS SECTION */}
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
          <h3 className="lg:text-lg">
            <span className="font-extrabold">Blend:</span> {fakeCoffee.blend}
          </h3>
          <h3 className="lg:text-lg">
            <span className="font-extrabold">Flavour:</span>{" "}
            {fakeCoffee.flavour}
          </h3>

          {/* GRIND STYLE */}
          <GroundStyle onGroundChange={handleGroundChange} />

          {/* BAG SIZE */}
          <Weight onBagSizeChange={handleBagSizeChange} />

          {/* PRICE DISPLAY */}
          <div className="py-6 flex justify-start items-end">
            <h3 className="mb-5 text-lg font-extrabold">Price:</h3>
            <span className="mb-5 px-8 text-4xl">£{price.toFixed(2)}</span>
          </div>

          {/* BUTTONS */}
          <div className="flex justify-between py-6">
            <Button onClick={() => router.back()}>
              <FaArrowLeft /> <span className="px-3">Back</span>
            </Button>
            <Button
              onClick={handleAddToCart}
              disabled={!selectedBagSize || !selectedGround}
            >
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CoffeeSide;
