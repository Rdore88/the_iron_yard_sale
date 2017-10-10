import React, {Component} from 'react';
import { connect } from 'react-redux';
import {login} from '../../actions/index';

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

  render(){
    return(
      <div className="m-3 p-3 card w-50 mx-auto">
        <h1 className="">Login</h1>
        <form onSubmit={this.props.login({
          name: this.state.name,
          password: this.state.password
        })}>
          <div className="form-group">
            <label htmlFor="loginName">Name</label>
            <input type="text" className="form-control" id="loginName" placeholder="Enter name" value={ this.state.name } onChange={ this.handleName }/>
          </div>
          <div className="form-group">
            <label htmlFor="loginPassword">Password</label>
            <input type="password" className="form-control" id="loginPassword" placeholder="Password" value={ this.state.password } onChange={ this.handlePassword }/> in
          </div>
          <button type="submit" className="btn btn-secondary mx-auto">Login</button>
        </form>
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
