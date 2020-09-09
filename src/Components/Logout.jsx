import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import authAction from '../actions/authAction';

class Logout extends Component {

  componentWillMount() {
    console.log("logoutUser");
    this.props.userAuth(false, this.props.userStats._id)
    localStorage.removeItem('login')
    this.props.history.push('/')
    return
  }

  render() {
    return (
      <div>
        <h1>Logout</h1>
      </div>
    );
  }
}

function mapStateToProps (state)  {
  return ({userStats : state.auth})
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    userAuth : authAction
  }, dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(Logout);
