import React from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "./Logo";
import "../styles/NavigationBar.css";

export function NavigationBar() {
  return (
    <nav className="nav">
      <div>
        <Logo />
      </div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/About">About us</NavLink>
        </li>
        <li>
          <NavLink to="/News">News</NavLink>
        </li>
        <li>
          <NavLink to="/TdketOpen">TDKET open</NavLink>
        </li>
        <li>
          <NavLink to="/Events">Events</NavLink>
        </li>
        <li>
          <NavLink to="/Membership">Membership</NavLink>
        </li>
        <li>
          <NavLink to="/ContactUs">Contact us</NavLink>
        </li>
        <li className="donate-btn">
          <NavLink to="/Donate">
            <button>DONATE</button>
          </NavLink>
          <NavLink to="/language">
            <button>EN</button>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
