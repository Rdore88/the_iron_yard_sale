import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';


export default class AdminNav extends Component{
  render(){
    return(
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav mr-auto">
            <NavLink className="nav-item nav-link" to="/">Store</NavLink>
            <NavLink className="nav-item nav-link" to="/admin">Orders</NavLink>
            <NavLink className="nav-item nav-link" to="/admin/confirmed">Completed Orders</NavLink>
        </div>
      </div>
    )
  }
}
