import React from 'react';
import Home from './Components/Home';
import BlogPage from './Components/BlogPage'
import {BrowserRouter as Router,  Route, Link} from 'react-router-dom';
import NavBar from './Components/NavBar';
import LogIn from './Components/LogIn'
import SignUp from './Components/SignUp'
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import UserHome from './Components/UserHome';

class  App extends React.Component {

  render ()  {
   return ( 
       <Router >
 
         <Route path="/" component={NavBar} />
         <Route exact path="/home" component={Home} />
         <Route exact path="/blog" component={BlogPage} />
         <Route exact path="/user/login" component={LogIn} />
         <Route exact path="/user/signup" component={SignUp} /> 
         <Route exact path="/user/home"  component={UserHome} />
      </Router>
   )
  }
}

export default App;
