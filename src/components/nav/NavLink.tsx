import { NavLink as NavLinkR } from "react-router-dom";

type Props = { children: React.ReactNode; to: "/" | "/store" | "/about" };

const NavLink = ({ children, to }: Props) => {
  return (
    <NavLinkR
      className={({ isActive }) =>
        isActive ? "header__navLink header__navLink_active" : "header__navLink"
      }
      to={to}
    >
      {children}
    </NavLinkR>
  );
};

export default NavLink;
