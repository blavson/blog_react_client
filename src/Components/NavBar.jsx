import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'

class  NavBar  extends React.Component   {

  componentDidMount() {
    console.log("NAVBAR", this.props.userStats);
  }

  render() {
    let loginlogout ='';
    if (!this.props.userStats.loggedin) 
          loginlogout = (<div>
                        <li><NavLink to="/user/signup">Sign Up</NavLink></li> 
                         <li><NavLink to="/user/login">Log In</NavLink></li></div>)  
    else  loginlogout= (<div><li><NavLink to="/blog">New Blog</NavLink></li>
                        <li><NavLink to="/user/logout">Log out</NavLink></li></div>)
  return (
    <div>
       <nav className="nav blue darken-4">
    <div className="nav-wrapper">
      <NavLink to="/home" className="brand-logo">Blog</NavLink>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        {loginlogout}
      </ul>
    </div>
  </nav>

 </div>
  );
  }
}

function mapStateToProps (state)  {
  return ({userStats : state.auth})
}

export default connect(mapStateToProps)(NavBar)
