import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

export default class NavBar extends Component{
  render(){
    return(
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav mr-auto">
            <NavLink className="nav-item nav-link" to="/">Store</NavLink>
            <NavLink className="nav-item nav-link" style={{color: '#F8F9FA'}} to="/login">Admin</NavLink>
        </div>
      </div>
    )
  }
}
