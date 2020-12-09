import React from "react";
import { NavLink } from "react-router-dom";
function MenuItems({ ...props }) {
  return (
    <li className="nav-item">
      <NavLink
        className={`${props.active === "true" ? "active" : ""}`}
        to={`${props.link}`}
      >
        {props.title}
      </NavLink>
    </li>
  );
}

export default MenuItems;
