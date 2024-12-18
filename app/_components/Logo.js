import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/">
      <Image
        src="/LogoWhtPNG.png"
        height="150"
        width="250"
        alt="DarkCode Coffee logo"
        className="lg:w-[400px] lg:h-[250px] w-[200px] h-[150px] object-contain"
      />
    </Link>
  );
}

export default Logo;
