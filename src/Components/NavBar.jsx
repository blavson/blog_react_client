import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const token = localStorage.getItem('token')
  return (
    <div>
       <nav className="nav blue darken-4">
    <div className="nav-wrapper">
      <NavLink to="/home" className="brand-logo">Blog</NavLink>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        {  (typeof token) !== undefined ? <li><NavLink to="/blog">New Blog</NavLink></li> : ''}
        <li><NavLink to="/user/signup">Sign Up</NavLink></li>
        <li><NavLink to="/user/login">Log In</NavLink></li>

      </ul>
    </div>
  </nav>

 </div>
  );
}

export default NavBar;
