import React from 'react';
import {
  Link, NavLink,
} from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link className="logo" to="/" />
      <ul className="nav-links">
        <li>
          <NavLink className="nav-link" to="/">Rockets</NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/missions">Missions</NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/myProfile">My Profile</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
