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
          <MdMenu onClick={toggle} fontSize="37px" color="#fafafa" style={{ cursor: 'pointer' }} />
        </div>

        <ul className={`nav-list ${isOpen && 'active'}`}>
          <div className="menu-icons close">
            <MdClose onClick={toggle} fontSize="35px" color="#fafafa" style={{ cursor: 'pointer' }} />
          </div>
          <li className="nav-item">
            <NavLink exact to="/" activeClassName="selected" className="nav-link">Home</NavLink>
          </li>
          <li className="nav-item nested-nav-container">
            <NavLink exact to="/logistics" activeClassName="selected" className="nav-link">
              Service
            </NavLink>
            <ul className="sub-nav">
              <Link to="/logistics" className="excellent-red"><li>Logistics</li></Link>
              <Link to="/human-resource-outsourcing" className="excellent-red"><li>Human Resource Outsourcing</li></Link>
              <Link to="/callcenter-solution" className="excellent-red"><li>Call Center Solutions</li></Link>
              <Link to="/other-business-services" className="excellent-red"><li>Other Business Services</li></Link>
            </ul>
          </li>
          <li className="nav-item">
            <NavLink exact to="/about" activeClassName="selected" className="nav-link">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/contact" activeClassName="selected" className="nav-link">Contact Us</NavLink>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default Navbar;
