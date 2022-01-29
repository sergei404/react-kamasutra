import s from './navbar.module.css'
import {NavLink} from "react-router-dom";

export default function Navbar() {
  return (
    <nav className={s.nav}>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink className={({ isActive }) =>(isActive ? s.active : "")} to="/profile">Profile</NavLink>
        </li>
        <li className={s.item}>
          <NavLink className={({ isActive }) =>(isActive ? s.active : "")} to="/dialogs">Messages</NavLink>
        </li>
        <li className={s.item}>
          <a href="#s">News</a>
        </li>
        <li className={s.item}>
          <a href="#s">Music</a>
        </li>
        <li className={s.item}>
         <NavLink className={({ isActive }) =>(isActive ? s.active : "")} to="/users">Users</NavLink>
        </li>
        <li className={s.item}>
          <a href="#s">Settings</a>
        </li>
      </ul>
    </nav>
  );
}
