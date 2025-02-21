import Image from "next/image";
import { useState } from "react";

function GroundStyle() {
  const [ground, setGround] = useState();

  function handleChange(e) {
    e.preventDefault;
    setGround(e.target.value);

    return ground;
  }

  console.log(ground);

  return (
    <div className="py-6">
      <h3 className="mb-5 text-lg font-extrabold">Grind Style:</h3>
      {/* <ul className="grid w-full gap-6 md:grid-cols-5 flex-wrap"> */}
      <ul className="grid grid-flow-row-dense grid-cols-2 md:grid-cols-5 ">
        <li className="w-full text-center">
          <input
            type="radio"
            id="beans"
            name="grind"
            value="beans"
            className="hidden peer"
            required
            onClick={handleChange}
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
            onClick={handleChange}
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
            onClick={handleChange}
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
            onClick={handleChange}
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
            onClick={handleChange}
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
  );
}

export default GroundStyle;
