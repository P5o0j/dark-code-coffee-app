import classes from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.item}>
        <Image src="/LogoWhtPNG.png" alt="logo" width="275" height="120" />
        <p className="pt-5">
          DarkCode Coffee is part of{" "}
          <Link href="http://www.iempire.net">iEmpire</Link>
        </p>
      </div>
      <div className={classes.item}>
        <h3>SOCIALS</h3>
        <div className={classes.socials}>
          <Link
            href="https://www.facebook.com/DarkCodeCoffee/"
            className="mx-auto"
          >
            <Image src="/FBbw.png" alt="facebook" width="50" height="50" />
          </Link>
          <Link
            href="https://www.instagram.com/darkcodecoffee/"
            className="mx-auto"
          >
            <Image src="/IGbw.png" alt="instagram" width="50" height="50" />
          </Link>
          <Link href="https://twitter.com/DarkCodeCoffee" className="mx-auto">
            <Image src="/TWbw.png" alt="twitter" width="50" height="50" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
