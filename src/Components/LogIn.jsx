import React, { Component } from 'react';
import axios from 'axios'
import M from  'materialize-css'

class LogIn extends Component {
   errorList =''

  constructor() {
    super();
    
    this.state = {
      email : '',
      password : '',
      isEmailValid : false,
      token : '',
      errors : ''
    }
  }

  handleEmail = (event) => {
    const v = event.target.value
    this.setState({
      email : v
    })
  }    

  handlePassword = (event) => {
    const v = event.target.value
    this.setState({
      password : v
    })
  }


   validateEmail = (email)=> {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


handleOnBlurEmail = (event) => {
  if (this.validateEmail(event.target.value) === false || event.target.value === '') {
    this.setState({
      isEmailValid : false
    })
  } else
  this.setState({
    isEmailValid : true
  })
}


  signUpUser = (event) => {
    event.preventDefault();
    this.setState( {
      errors : ''
    })
    if (this.state.isEmailValid == false){
      this.setState ({
        errors : "Email is invalid"
            })
      return;
    }

      let {email, password} = this.state
      axios.post('http://127.0.0.1:8000/user/login', { email, password})
      .then(response => {
        //  localStorage.setItem('token', response.token);
      })
      .catch(error => {
        console.log(error)
        M.toast({html: "Passwords doesn't match", classes :'toast-error'})
      })
  }

  render() {
    return (
      <form onSubmit={this.signUpUser } >
      <div className="container">
        <div className="row">
        <div className="input-field col s6 offset-s3 center">
         <div className="signup-login">Log In</div>
        </div>
        </div>
        <div className = "row">  
        <div className="input-field col s6 offset-s3">  
          <label htmlFor="email">Email</label>
          <input  id="email" type="email" className="validate" onBlur={this.handleOnBlurEmail} onChange= {this.handleEmail}/>
          {this.state.isEmailValid === true ? <span className="helper-text" data-success=""></span> :
          <span className="helper-text" data-error="Invalid E-mail format" ></span> }
        </div>
         <div className="input-field col s6 offset-s3">  
          <label htmlFor="password">Password</label>
          <input  id="password" type="password" className="validate" onChange= {this.handlePassword}/>
         </div>
       <div className = "input-field col s4 offset-s5">  
       <ul className="error-list">
           {this.state.errors}
      </ul>
          <button className="btn waves-effect waves-light" type="submit" name="action">Log in
          <i className="material-icons right">send</i>
          </button>
       </div>
      </div> 
      </div>
   </form>
    );
  }
}

export default LogIn;
