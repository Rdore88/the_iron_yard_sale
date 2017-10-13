import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';


export default class AdminNav extends Component{
  render(){
    return(
      <div className="card-header">
        <ul className="nav nav-pills card-header-pills">
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to="/">Store</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to="/admin">Orders</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to="/admin/confirmed">Completed Orders</NavLink>
          </li>
        </ul>
      </div>
    )
  }
}
