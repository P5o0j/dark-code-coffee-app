import classes from "./header.module.css";
import Link from "next/link";

function Menu() {
  return (
    <nav className={classes.menu}>
      <Link href="/" className={classes.link}>
        Home
      </Link>
      <Link href="/gallery" className={classes.link}>
        Gallery
      </Link>
      <Link href="/contact" className={classes.link}>
        Contact
      </Link>
    </nav>
  );
}

export default Menu;
