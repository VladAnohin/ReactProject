import React from "react";
import { NavLink } from "react-router-dom";
import s from './Navbar.module.css';


const setActive = ({ isActive }) => (isActive ? s.active : s.item);
const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div>
        <NavLink to='/profile' className={setActive}>Profile</NavLink>
      </div>
      <div>
        <NavLink to='/dialogs' className={setActive}>Messages</NavLink>
      </div>
      <div>
        <NavLink to='/news' className={setActive}>News</NavLink>
      </div>
      <div>
        <NavLink to='/music' className={setActive}>Music</NavLink>
      </div>
      <div>
        <NavLink to='/settings' className={setActive}>Settings</NavLink>
      </div>
      <hr className={s.hr} />
    </nav>
  );
}
export default Navbar;