import React, {Component} from 'react';
import { connect } from 'react-redux';
import {login} from '../../actions/index';
import {Redirect} from 'react-router-dom';

class AdminLogin extends Component{
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: ''
    }
  }
  handleName = e => {
    this.setState({ name: e.target.value });
  }
  handlePassword = e => {
    this.setState({ password: e.target.value });
  }

  handleSubmit = () => {
    this.props.login({
      name: this.state.name,
      password: this.state.password
    })
  }

  render(){
    let errorMessage = null;

    if (this.props.user.loginErrorMessages) {
      errorMessage =
      <div className="alert alert-danger" role="alert">
        {this.props.user.loginErrorMessages}
      </div>
    }

    if (this.props.user.user_id) {
      return (
        <Redirect to={{
          pathname: '/admin',
          state: { from: this.props.location }
        }} />
      )
    }

    return(
      <div className="m-3 p-3 card w-75 mx-auto">
        <h1>Login</h1>
        {errorMessage}
        <div>
          <div className="form-group">
            <label htmlFor="loginName">Name</label>
            <input type="text" className="form-control" id="loginName" placeholder="Enter name" value={ this.state.name } onChange={ this.handleName }/>
          </div>
          <div className="form-group">
            <label htmlFor="loginPassword">Password</label>
            <input type="password" className="form-control" id="loginPassword" placeholder="Password" value={ this.state.password } onChange={ this.handlePassword }/>
          </div>
          <button type="button" onClick={this.handleSubmit} className="btn btn-secondary mx-auto">Login</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (obj) => dispatch(login(obj))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminLogin);
