import React from 'react';
import {
  NavLink,
} from 'react-router-dom';
/* React Bootstrap */
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './NavbarSpace.module.css';
import planet from '../assets/planet.png';
import '../App.css';

function NavbarSpace() {
  const activeStyle = {
    textDecoration: 'underline',
  };
  return (
    <Navbar expand="md">
      <Container fluid>
        <NavLink to="/">
          <img src={planet} alt="planet" className={styles.NavImg} />
        </NavLink>
        <h2 className={styles.NavTitle}>Space Traveler&lsquo;s Hub</h2>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
          <Nav
            className={`my-2 my-lg-0 ${styles.NavFlex}`}
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink
              className={styles.menu}
              to="/"
              style={({ isActive }) => {
                if (isActive) {
                  return activeStyle;
                }
                return undefined;
              }}
            >
              Rockets
            </NavLink>
            <NavLink
              className={styles.menu}
              to="/missions"
              style={({ isActive }) => {
                if (isActive) {
                  return activeStyle;
                }
                return undefined;
              }}

            >
              Missions
            </NavLink>
            <span>|</span>
            <NavLink
              className={styles.menu}
              to="/myProfile"
              style={({ isActive }) => {
                if (isActive) {
                  return activeStyle;
                }
                return undefined;
              }}

            >
              My Profile
            </NavLink>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarSpace;
