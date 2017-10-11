import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

export default class NavBar extends Component{
  render(){
    return(
      <nav className="">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">Admin</NavLink>
      </nav>
    )
  }
}
