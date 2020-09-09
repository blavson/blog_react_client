import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import { NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import authAction from '../actions/authAction'
import { bindActionCreators } from 'redux';

class  NavBar  extends React.Component   {
  render() {
    let loginlogout ='';
    if (!this.props.userStats.loggedin) 
          loginlogout = (<div>
                          <li><NavLink to="/user/signup">Sign Up</NavLink></li> 
                          <li><NavLink to="/user/login">Log In</NavLink></li></div>)  
    else  loginlogout= (<div>
                          <li><NavLink to="/blog/create">New Blog</NavLink></li>
                          <li><NavLink to="/user/logout" >Log out</NavLink></li>
                        </div>)
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

function mapDispathcToProps(dispatch) {
  return bindActionCreators({
    userAuth : authAction
  }, dispatch)
}

export default connect(mapStateToProps, mapDispathcToProps)(NavBar)
