import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

export default class NavBar extends Component{
  render(){
    return(
      <nav className="">
        <NavLink to="/">Link 1</NavLink>
        <NavLink to="/">Link 2</NavLink>
        <NavLink to="/">Link 3</NavLink>
      </nav>
    )
  }
}
