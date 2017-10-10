import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';


export default class AdminNav extends Component{
  render(){
    return(
        <div className="card-header">
          <ul className="nav nav-pills card-header-pills">
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/admin/listing">Listed Items</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/admin">Pending Approval</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/admin/approved">Approved</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/admin/sold">Sold</NavLink>
            </li>
          </ul>
        </div>
    )
  }
}
