import Image from "next/image";
import { useState } from "react";

function Weight({ weight, onClick }) {
  const [bagSize, setBagSize] = useState("250");

  function handleChange(e) {
    e.preventDefault;
    setBagSize(e.target.value);

    return bagSize;
  }
  console.log(bagSize);

  return (
    <div className="py-6">
      <h3 className="mb-5 text-lg font-extrabold">Bag size:</h3>
      {/* <ul className="grid w-full gap-6 md:grid-cols-5 flex-wrap"> */}
      <ul className="grid grid-flow-row-dense grid-cols-3">
        <li className="w-full text-center">
          <input
            type="radio"
            id="250"
            name="weight"
            value="250"
            className="hidden peer"
            required
            onClick={handleChange}
          />
          <label
            htmlFor="250"
            title="250g"
            className="inline-flex items-center justify-between p-2 border border-black rounded-lg cursor-pointer peer-checked:border-white opacity-50 hover:opacity-100 peer-checked:opacity-100 "
          >
            <span>
              <h1>250g</h1>
            </span>
          </label>
        </li>
        <li className="w-full text-center">
          <input
            type="radio"
            id="500"
            name="weight"
            value="500"
            className="hidden peer"
            required
            onClick={handleChange}
          />
          <label
            htmlFor="500"
            title="500g"
            className="inline-flex items-center justify-between p-2 border border-black rounded-lg cursor-pointer peer-checked:border-white opacity-50 hover:opacity-100 peer-checked:opacity-100"
          >
            <span>
              <h1>500g</h1>
            </span>
          </label>
        </li>

        <li className="w-full text-center">
          <input
            type="radio"
            id="1000"
            name="weight"
            value="1000"
            className="hidden peer"
            required
            onClick={handleChange}
          />
          <label
            htmlFor="1000"
            title="1kg"
            className="inline-flex items-center justify-between p-2 border border-black rounded-lg cursor-pointer peer-checked:border-white opacity-50 hover:opacity-100 peer-checked:opacity-100"
          >
            <span>
              <h1>1kg</h1>
            </span>
          </label>
        </li>
      </ul>
    </div>
  );
}

export default Weight;
