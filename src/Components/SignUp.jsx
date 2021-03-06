import React, { Component } from 'react';
import axios from 'axios'
import M from  'materialize-css'
import './SignUp.css'

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      username : '',
      email : '',
      password : '',
      password_confirm : '',
      isEmailValid : true,
      isUserNameValid : true,
      token : '',
      errors : []
    }
  }

  handleUserName = (event) => {
    const v = event.target.value
    if (v.length === 4) {
      axios.get('http://127.0.0.1:8000/user?username=' + v )
      .then(resp => {

      });
    }
    this.setState({
      username : v
    })
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

  handlePasswordConfirm = (event) => {
    const v = event.target.value
    this.setState({
      password_confirm : v
    })
  }

   validateEmail = (email)=> {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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

handleOnBlurUserName = (event) => {
  let uname = event.target.value
  if (uname.length<4 && uname === '') 
  this.setState({
    isUserNameValid : false
  })
  else {
    this.setState({
      isUserNameValid : true
    })    
  }
}
  signUpUser = (event) => {
    event.preventDefault();

    if (this.state.username.length  === 0) {
      const er = this.state.errors
      er.push('Please fill Username field')
      this.setState({
        errors : er
      })
    }
    if (this.state.password.length === 0) {
      const er = this.state.errors
      er.push('Password is empty')
      this.setState({
        errors : er
      })
    }    
    if (this.state.password_confirm.length === 0) {
      const er = this.state.errors
      er.push('Password Confirmation is empty')
      this.setState({
        errors : er
      })
    }    
    if (this.state.password !== this.state.password_confirm) {
      const er = this.state.errors
      er.push('Passwords Doesn\'t match')
      this.setState({
        errors : er
      })
    }    

    if (this.state.errors.length > 0) {
      this.errorList = this.state.errors.map((e, i) => {
       return ( <li key={i} className="error-list-item">{e}</li>)
      })
    } else {
      let {username, email, password} = this.state
      axios.post('http://127.0.0.1:8000/user/signup', {username, email, password})
      .then(response => {
        console.log(response)
         if (response.status === 201) {
           M.toast({html: "User successfully signed up", classes :'toast-signedup'});

         }
        //  localStorage.setItem('token', response.token);
      })
      .catch(error => {
        M.toast({html: error, classes :'toast-error'});
      })
    }
    this.setState({
      errors : []
    })
  }



  render() {
    let emailState = this.state.isEmailValid
    let usernameState = this.state.isUserNameValid
    return (
      <form onSubmit={this.signUpUser } >
      <div className="container">
        <div className="row">
        <div className="input-field col s6 offset-s3 center">
         <div className="signup-login">Sign Up </div>
        </div>
        </div>
        <div className = "row">  
           <div className="input-field col s6 offset-s3">
              <label htmlFor="username">Username</label>
              <input  id="username" type="text" className="validate" onBlur={this.handleOnBlurUserName} onChange= {this.handleUserName} required/>
              {usernameState === true ? <span className="helper-text" data-success=""></span> :
          <span className="helper-text" data-error="Username length must be at least 4 characters" ></span> }
          </div>
        <div className="input-field col s6 offset-s3">  
          <label htmlFor="email">Email</label>
          <input  id="email" type="email" className="validate" onBlur={this.handleOnBlurEmail} onChange= {this.handleEmail} required/>
          {emailState === true ? <span className="helper-text" data-success=""></span> :
          <span className="helper-text" data-error="Invalid E-mail format" ></span> }
        </div>
         <div className="input-field col s6 offset-s3">  
          <label htmlFor="password">Password</label>
          <input  id="password" type="password" className="validate" onChange= {this.handlePassword} required/>
         </div>
         <div className="input-field col s6 offset-s3">  
          <label htmlFor="password_confirm">Password Confirmation</label>
          <input  id="password_confirm" type="password" className="validate" onChange= {this.handlePasswordConfirm} required/>
         </div>         
       <div className = "input-field col s4 offset-s5">  
       <ul className="error-list">
           {this.errorList}
      </ul>
          <button className="btn waves-effect waves-light" type="submit" name="action">Submit
          <i className="material-icons right">send</i>
          </button>
       </div>
      </div> 
      </div>
   </form>
    );
  }
}

export default SignUp;
