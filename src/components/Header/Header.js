import React from 'react';
import { NavLink } from 'react-router-dom';
import css from '../Header/Header.module.css';

// const NavLinks = styled(NavLink)`
//   padding: 8px 16px;
//   border-radius: 4px;
//   text-decoration: none;
//   color: black;
//   font-weight: 500;

//   &.active {
//     color: white;
//     background-color: orangered;
//   }
// `;

const Header = () => {
  const navLinkClassName = ({ isActive }) =>
    isActive ? css['active'] : css['navLink'];
  return (
    <nav>
      <div className={css.containerNav}>
        <div className="navbar">
          <NavLink className={navLinkClassName} to="/">
            Home
          </NavLink>
          <NavLink className={navLinkClassName} to="/movies">
            Movies
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
