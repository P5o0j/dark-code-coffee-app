function Cart() {
  const cssClass = "border-collapse border border-gray-400 p-2";

  return (
    <table className="table-auto w-full my-4">
      <thead>
        <tr className="border-b-2">
          <th className="text-left py-2">Item</th>
          <th>Qty</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="py-2">
            <p className="text-lg">Source code</p>
            <p className="text-xs pl-7">Ground for drip, 250g</p>
          </td>
          <td className="text-center">
            <button className="px-3">-</button>1
            <button className="px-3">+</button>
          </td>
          <td className="text-center">£7.99</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Cart;
