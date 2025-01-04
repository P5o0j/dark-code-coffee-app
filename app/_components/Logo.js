import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <div className="flex items-start ">
      <Link href="/">
        <Image
          src="/LogoWhtPNG.png"
          height="150"
          width="250"
          alt="DarkCode Coffee logo"
          className="lg:w-[400px] lg:h-[200px] w-[200px] h-[150px] object-contain"
        />
      </Link>
    </div>
  );
}

export default Logo;
