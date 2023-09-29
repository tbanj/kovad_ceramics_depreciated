import React, { Fragment, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import MdMenu from 'react-ionicons/lib/MdMenu';
import MdClose from 'react-ionicons/lib/MdClose';
import logo from '../../assets/logo.png';
import './navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Fragment>
      <nav>
        <div className="nav-brand">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <div className="menu-icons open">
          <MdMenu
            onClick={toggle}
            fontSize="37px"
            color="#fafafa"
            style={{ cursor: 'pointer' }}
          />
        </div>

        <ul
          className={`nav-list ${
            isOpen ? 'active' : 'justify-content-end w-100'
          }`}
        >
          <div className="menu-icons close">
            <MdClose
              onClick={toggle}
              fontSize="35px"
              color="#fafafa"
              style={{ cursor: 'pointer' }}
            />
          </div>
          <li className="nav-item">
            <NavLink
              exact
              to="/"
              activeClassName="selected"
              className="nav-link"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item nested-nav-container">
            <NavLink
              exact
              to="/service"
              activeClassName="selected"
              className="nav-link"
            >
              Services
            </NavLink>
            <ul className="sub-nav">
              <Link to="/service" className="excellent-red">
                <li>Installation, Maintenance & Repair</li>
              </Link>
              <Link to="/service-installation" className="excellent-red">
                <li>Installation</li>
              </Link>
              <Link to="/servic-maintenancee" className="excellent-red">
                <li>Maintenance</li>
              </Link>
              <Link to="/service-repair" className="excellent-red">
                <li>Repair</li>
              </Link>
            </ul>
          </li>
          <li className="nav-item nested-nav-container">
            <NavLink
              exact
              to="/products"
              activeClassName="selected"
              className="nav-link"
            >
              Products
            </NavLink>
            <ul className="sub-nav">
              <Link to="/products-ceramics" className="excellent-red">
                <li>Ceramics</li>
              </Link>
              <Link to="/products-tiles" className="excellent-red">
                <li>Tiles</li>
              </Link>
            </ul>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/about"
              activeClassName="selected"
              className="nav-link"
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/contact"
              activeClassName="selected"
              className="nav-link"
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default Navbar;
