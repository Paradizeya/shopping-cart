import { NavLink as NavLinkR } from "react-router-dom";
import styles from "_styles/nav/nav.module.scss";

type Props = { children: React.ReactNode; path: "/" | "/store" | "/about" };

const NavLink = ({ children, path }: Props) => {
  return (
    <NavLinkR
      className={({ isActive }) =>
        isActive
          ? `${styles.nav__link} ${styles.nav__link_active}`
          : `${styles.nav__link}`
      }
      to={path}
    >
      {children}
    </NavLinkR>
  );
};

export default NavLink;
