import NavLink from "./NavLink";
import CartButton from "./CartButton";

import styles from "_styles/nav/nav.module.scss";

type Props = {};

const NavBar = ({}: Props) => {
  return (
    <header className={styles.wrapper}>
      <nav className={styles.nav}>
        <NavLink path="/">Home</NavLink>
        <NavLink path="/store">Store</NavLink>
        <NavLink path="/about">About</NavLink>
      </nav>
      <CartButton />
    </header>
  );
};

export default NavBar;
