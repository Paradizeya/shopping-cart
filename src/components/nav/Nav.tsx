import NavLink from "./NavLink";
import CartButton from "../buttons/cartButton/CartButton";
import "@styles/nav.scss";

type Props = {};

const Nav = ({}: Props) => {
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

export default Nav;
