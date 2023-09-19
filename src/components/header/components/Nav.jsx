import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul className="flex gap-5">
        <li>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isActive ? "text-orange-400" : ""
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/">Ingredients</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
