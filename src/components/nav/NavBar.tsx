import NavLink from "./NavLink";
import CartButton from "./CartButton";
import "@styles/nav/nav.scss";

type Props = {};

const NavBar = ({}: Props) => {
  return (
    <header className="header">
      <nav className="header_nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/store">Store</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
      <CartButton />
    </header>
  );
};

export default NavBar;
