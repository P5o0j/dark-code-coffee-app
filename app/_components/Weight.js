import { useState } from "react";

function Weight({ onBagSizeChange }) {
  const [bagSize, setBagSize] = useState("250");

  function handleChange(e) {
    const newSize = e.target.value;
    setBagSize(newSize);

    // Pass the updated bagSize to the parent component
    if (onBagSizeChange) {
      onBagSizeChange(newSize);
    }
  }

  return (
    <div className="py-6">
      <h3 className="mb-5 text-lg font-extrabold">Bag size:</h3>

      <ul className="grid grid-flow-row-dense grid-cols-3">
        {["250", "500", "1000"].map((size) => (
          <li key={size} className="w-full text-center">
            <input
              type="radio"
              id={size}
              name="weight"
              value={size}
              className="hidden peer"
              required
              onChange={handleChange} // <-- Use onChange instead of onClick
              checked={bagSize === size} // Ensure the state updates correctly
            />
            <label
              htmlFor={size}
              title={`${size}g`}
              className="inline-flex items-center justify-between p-2 border border-black rounded-lg cursor-pointer peer-checked:border-white opacity-50 hover:opacity-100 peer-checked:opacity-100"
            >
              <span>
                <h1>{size}g</h1>
              </span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Weight;
