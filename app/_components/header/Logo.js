import Image from "next/image";
import logoImg from "../../../public/LogoWhtPNG.png";

function Logo() {
  return (
    <div>
      <Image src={logoImg} alt="DarkCode Coffee logo" />
    </div>
  );
}

export default Logo;
