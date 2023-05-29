import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Nav.module.css';

const Nav = () => {
  return (
    <div className={css.navList}>
      <div className={css.nav_item}>
        <NavLink to="/news" className={css.navItem}>
          News
        </NavLink>
      </div>
      <div className={css.nav_item}>
        <NavLink to="/notices" className={css.navItem}>
          Find Pet
        </NavLink>
      </div>
      <div className={css.nav_item}>
        <NavLink to="/friends" className={css.navItem}>
          Our Friends
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
