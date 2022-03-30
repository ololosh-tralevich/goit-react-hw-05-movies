import { NavLink } from 'react-router-dom';

import style from './header.module.css';

const linkClassName = ({ isActive }) =>
isActive ? style.activeHeaderLink : style.headerLink;

const Header = () => {
  return (
    <header className={style.header}>
      <NavLink to="/" className={linkClassName}>
        Home
      </NavLink>
      <NavLink to="/movies" className={linkClassName}>
        Movies
      </NavLink>
    </header>
  );
};

export default Header;
