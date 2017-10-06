import React, {Component} from 'react';

export default class AdminLogin extends Component{
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
    // Send form information to backend
    this.setState({ name: '', password: '' });
  }
  render(){
    return(
      <div className="m-3 p-3 card w-50 mx-auto">
        <h1 className="">Login</h1>
        <form onSubmit={ this.handleSubmit }>
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
