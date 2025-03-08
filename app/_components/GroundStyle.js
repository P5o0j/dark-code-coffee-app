import Image from "next/image";
import { useState } from "react";

function GroundStyle({ onGroundChange }) {
  const [ground, setGround] = useState("");

  function handleChange(e) {
    const selectedGround = e.target.value;
    setGround(selectedGround);

    // Pass the updated ground selection to the parent component
    if (onGroundChange) {
      onGroundChange(selectedGround);
    }
  }

  const grindOptions = [
    {
      id: "beans",
      label: "Roasted coffee beans",
      img: "/grind/coffee-beans.png",
    },
    {
      id: "espresso",
      label: "Ground for espresso",
      img: "/grind/coffee-machine.png",
    },
    { id: "pods", label: "Ground for pods", img: "/grind/pod.png" },
    {
      id: "aeropress",
      label: "Ground for aeropress",
      img: "/grind/drip-glass.png",
    },
    {
      id: "cafetiere",
      label: "Ground for cafetiere",
      img: "/grind/french-press.png",
    },
  ];

  return (
    <div className="py-6">
      <h3 className="mb-5 text-lg font-extrabold">Grind Style:</h3>
      <ul className="grid grid-flow-row-dense grid-cols-2 md:grid-cols-5">
        {grindOptions.map((option) => (
          <li key={option.id} className="w-full text-center">
            <input
              type="radio"
              id={option.id}
              name="grind"
              value={option.id}
              className="hidden peer"
              required
              onChange={handleChange} // Use onChange
              checked={ground === option.id} // Ensure correct selection
            />
            <label
              htmlFor={option.id}
              title={option.label}
              className="inline-flex items-center justify-between p-2 text-gray-500 border border-black rounded-lg cursor-pointer peer-checked:border-white hover:text-gray-600 opacity-50 hover:opacity-100 peer-checked:opacity-100"
            >
              <span>
                <Image
                  src={option.img}
                  alt={option.label}
                  height={50}
                  width={50}
                />
              </span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GroundStyle;
