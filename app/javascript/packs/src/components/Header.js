import React, {Component} from 'react';
import NavBar from './NavBar';

export default class Header extends Component{
  render(){
    return(
      <header className="p-3 d-flex justify-content-between align-items-center">
        <img src="./app/javascript/packs/images/TIY-logo-white-png.png" alt="The Iron Yard" />
        <h1>The Iron Yard Sale</h1>
        <NavBar />
      </header>
    )
  }
}
