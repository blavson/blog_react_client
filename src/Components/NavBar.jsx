import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import { NavLink } from 'react-router-dom';
import MyModal from './MyModal';

const NavBar = () => {
  return (
    <div>
       <nav class="nav blue darken-4">
    <div className="nav-wrapper">
      <NavLink to="/home" className="brand-logo">Home</NavLink>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><NavLink to="/blog">New Blog</NavLink></li>
        <a className="btn modal-trigger" href="#modal1">Sign Up</a>
 

        {/* <li><NavLink to="/user/signup">Sign Up</NavLink></li>
        <li><NavLink to="/user/login">Log in</NavLink></li> */}
      </ul>
    </div>
  </nav>


 </div>
  );
}

export default NavBar;
