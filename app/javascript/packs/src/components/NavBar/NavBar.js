import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

export default class NavBar extends Component{
  render(){
    return(
      <div className="card-header">
        <ul className="nav nav-pills card-header-pills">
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to="/">Store</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to="/login">Admin</NavLink>
          </li>
        </ul>
      </div>
    )
  }
}
