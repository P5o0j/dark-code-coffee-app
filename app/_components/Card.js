import Image from "next/image";

function Card({ coffee }) {
  return (
    <div className="bg-blue-900 lg:w-[350] border p-2 rounded-lg hover:shadow-white hover:shadow-md ">
      <Image
        src="/product_images/DDoSBag.jpg"
        width="175"
        height="225"
        alt="sample text"
        className="mx-auto my-3"
      />
      <p className="text-center uppercase font-bold text-lg pb-3">
        {coffee.title}
      </p>
      <hr />
      <p className="py-3">This is a short description</p>
      <div className="flex justify-end">
        <button className="border rounded-lg p-2">Read more...</button>
      </div>
    </div>
  );
}

export default Card;
