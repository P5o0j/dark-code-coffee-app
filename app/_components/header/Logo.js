import classes from "./header.module.css";
import Image from "next/image";
import logoImg from "../../../public/LogoWhtPNG.png";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/">
      <Image
        src={logoImg}
        alt="DarkCode Coffee logo"
        className={classes.logo}
      />
    </Link>
  );
}

export default Logo;
