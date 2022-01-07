import { NavLink } from "react-router-dom";
import "./dialogs-item.css";

export default function DialogsItem({data: {id, name}}) {
  return (
    <li className="item">
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "")}
        to={"/dialogs/" + id}
      >
        {name}
      </NavLink>
    </li>
  );
}
