import classes from "./header.module.css";

import Cart from "./Cart";
import Logo from "./Logo";
import Menu from "./Menu";

function Header() {
  return (
    <header>
      <div className={classes.logoRow}>
        <Logo />
        <Cart />
      </div>
      <Menu />
    </header>
  );
}

export default Header;
