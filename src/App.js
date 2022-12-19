
import React from 'react';
import './App.css';
import {
  Link, NavLink, Routes, Route,
} from 'react-router-dom';

const App = () => (
  <>
    <nav>
      <Link className="logo" to="/"></Link>
      <ul className="nav-links">
        <li>
          <NavLink className="nav-link" to="/">Rockets</NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/missions">Missions</NavLink>
        </li>
         <li>
          <NavLink className="nav-link" to="/profile">My Profile</NavLink>
        </li>
      </ul>
    </nav>

    <Routes>
      <Route path="/" element={<Rockets />} />
      <Route path="/missions" element={<Missions />} />
      <Route path="/myProfile" element={<Profile />} />
    </Routes>
  </>
);

export default App;
