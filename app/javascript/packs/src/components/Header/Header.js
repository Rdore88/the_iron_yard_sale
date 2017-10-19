import React, {Component} from 'react';
import {connect} from 'react-redux';
import NavBar from '../NavBar/NavBar';
import AdminNav from '../AdminNav/AdminNav';
import { NavLink } from 'react-router-dom';

class Header extends Component{
  render(){
    return(
      <nav className="navbar navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/">
          <img className="brand-img" src="https://tiy-site-herokuapp-com.global.ssl.fastly.net/assets/aesthetic/logo/tiy-white-378fe1ca9726ccc547a83fd6cccbacdccd89d07741c06c5d170f398d2f096b0f.svg" alt="The Iron Yard" />
        </NavLink>
        <h1 className="navbar-text">The Iron Yard Sale</h1>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        {this.props.user.user_id ? <AdminNav /> : <NavBar />}
      </nav>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(Header)
