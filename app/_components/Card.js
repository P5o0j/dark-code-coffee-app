import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

function Card({ coffee }) {
  const { id, title } = coffee;
  return (
    <div className="bg-black lg:w-[350] border p-2 rounded-lg hover:shadow-white hover:shadow-md ">
      <Image
        src="/product_images/DDoSBag.jpg"
        width="175"
        height="225"
        alt="sample text"
        className="mx-auto my-3"
      />
      <p className="text-center uppercase font-bold text-lg pb-3">{title}</p>
      <hr />
      <p className="py-3">This is a short description</p>
      <div className="flex justify-end">
        <Link href={`/range/${id}`}>
          <Button>Read more...</Button>
        </Link>
      </div>
    </div>
  );
}

export default Card;
