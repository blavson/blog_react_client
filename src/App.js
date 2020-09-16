import React from 'react';
import Home from './Components/Home';
import BlogPage from './Components/CreateBlog'
import {BrowserRouter as Router,  Route, Redirect} from 'react-router-dom';
import NavBar from './Components/NavBar';
import LogIn from './Components/LogIn'
import SignUp from './Components/SignUp'
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import UserHome from './Components/UserHome';
import PrivateRoute from './Components/PrivateRoute'
import cookie from 'react-cookies'
import { connect } from 'react-redux'
import authAction from './actions/authAction'
import { bindActionCreators } from 'redux';
import axios from 'axios'
import Logout from './Components/Logout';
import LoIps from './Components/LoIps';
import CreateBlog from './Components/CreateBlog';
import ShowBlog from './Components/ShowBlog';
import Author from './Components/Author';

class  App extends React.Component {

  async  componentWillMount() {
   let lgn= JSON.parse(localStorage.getItem('login'))
    console.log("tkn", lgn)

    if (!lgn) {
      this.props.userAuth(false, 0)
      return 0
    }
    const resp =  await  axios.post('http://localhost:8000/user/secure/verify', {token : lgn.token}).then(response => {
      if (response.status === 200) {
        this.props.userAuth(true, lgn._id)
        return (<Redirect to="http://localhost:3000/user/home" />)
       }
    }).catch(error => console.error(error));
  
  }

  render ()  {
   return ( 
       <Router >
         <Route path="/" component={NavBar} />
         <Route exact path="/" component={Home} />
         <Route exact path="/blog/create" component={CreateBlog} />
         <Route exact path="/blog/:slug" component={ShowBlog} />
         <Route exact path="/blog/loremipsum" component={LoIps} />
         <Route exact path="/user/login" component={LogIn} />
         <Route exact path="/user/logout" component={Logout} />
         <Route exact path="/user/signup" component={SignUp} /> 
         <Route exact path="/author/show/:id" component={Author} />
         <PrivateRoute exact path="/user/home"  component={UserHome} />
      </Router>
   )
  }
}

function mapStateToProps(state)  {
  return ({
    loggedin : state.auth.loggedin
  })
}

function dispatchStateToProps(dispatch) {
  return bindActionCreators({
    userAuth : authAction
  }, dispatch)
}

export default connect(mapStateToProps, dispatchStateToProps)(App)
