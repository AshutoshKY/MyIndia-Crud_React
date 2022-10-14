import React from "react";
import { Link, NavLink } from "react-router-dom";
import mw from "./images.png";
import "./navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{backgroundColor:"black",position:"sticky"}}>
      <div className="container">
        <Link exact to="/">
          <img src={mw} width="60px" height="60px" style={{borderRadius:"50%",margin:"0% 5px -8px -35px"}} alt="hi" />
        </Link>
        <h3 style={{color:"white",margin:"0px 55% 0px 5px", fontFamily:'Silkscreen,cursive'}}>My India</h3>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto" style={{margin:"0% 7% 0% 27%"}}>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/" style={{fontFamily:'Pacifico,cursive', fontSize:'2.4vh'}}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/about" style={{ fontFamily:'Peralta,cursive', fontSize:'2.4vh' }} >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/details" style={{ fontFamily:'Chakra Petch,sans-serif', fontSize:'2.5vh' }}>
                Users
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/contact" style={{ fontFamily:'Quattrocento,serif', fontSize:'2.5vh' }}>
                Contact
              </NavLink>
            </li>
            <li className="nav-item" id="login">
              <NavLink className="nav-link" exact to="/login" style={{ fontFamily:'Audiowide,cursive', fontSize:'2.5vh' }}>
                Login
              </NavLink>
        </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
