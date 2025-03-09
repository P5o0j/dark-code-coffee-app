import Image from "next/image";

function Page() {
  return (
    <div>
      <p className="text-4xl text-center my-4 uppercase">
        Mission Accomplished!
      </p>
      <p className="my-4 text-xl">
        Your order has been placed, and somewhere in the depths of the DarkCode
        Coffee mainframe, a highly caffeinated bot just did a little happy
        dance.
      </p>
      <p className="my-4 text-xl">
        Now, sit back, debug some code, and get ready—your coffee is on its way
        to fuel your next big breakthrough!
      </p>

      <p className="my-4 text-xl">
        While you wait, join the geeky coffee crew! Follow us on social media
        [@DarkCodeCoffee]—for caffeine-fueled chaos, and the occasional
        debugging therapy.
      </p>

      <p className="text-4xl text-center my-4 uppercase">
        May the brew be strong with you.
      </p>
      <div>
        <Image
          src="/qr-code.webp"
          width={250}
          height={250}
          alt="qr-code"
          className="mx-auto my-5"
        />
      </div>
    </div>
  );
}

export default Page;
