import React from 'react';
import Component from 'react-dom'
import Home from './Components/Home';
import BlogPage from './Components/BlogPage'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import NavBar from './Components/NavBar';
import LogIn from './Components/LogIn'
import SignUp from './Components/SignUp'
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";

class  App extends React.Component {

  render ()  {
   return ( 
       <Router >
         <Route path="/" component={NavBar} />
         <Route exact path="/home" component={Home} />
         <Route exact path="/blog" component={BlogPage} />
         <Route exact path="/form/login" component={LogIn} />
         <Route exact path="/form/signup" component={SignUp} /> 
      </Router>
   )
  }
}

export default App;
