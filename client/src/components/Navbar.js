import React from "react";
import Wrapper from "../assets/wrappers/Navbar";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import NavLinks from './NavLinks';
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar, logoutUser } from "../features/user/userSlice";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/images/logo.png';
import Dropdown from 'react-bootstrap/Dropdown';

const NavbarComponent = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(toggleSidebar());
  };

  return (
    <Wrapper>
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand href="#"><img
            src={logo}
            width="64"
            height="64"
            alt="Book App Logo"
          /><span>Book App</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="navLinks">
            <Nav
              className=" my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <NavLinks />
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse id="navbarScroll" className="buttons">
            <Dropdown className="dropdownButton">
              <Dropdown.Toggle id="dropdown-basic" className="orangeButton">
                <FaUserCircle />
                {user?.name}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={() => {
                  dispatch(logoutUser("Logging out..."));
                }}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Collapse>
          <Navbar.Collapse  className="logoutButton">
          <Button className="orangeButton" onClick={() => {
                  dispatch(logoutUser("Logging out..."));
                }}>Logout</Button>
                </Navbar.Collapse>
        </Container>
      </Navbar>
    </Wrapper>
  );
};

export default NavbarComponent;
