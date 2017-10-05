import React, {Component} from 'react';
import NavBar from './NavBar';

export default class Header extends Component{
  render(){
    return(
      <header className="">
        <h1>The Iron Yard Sale</h1>
        <NavBar />
      </header>
    )
  }
}
