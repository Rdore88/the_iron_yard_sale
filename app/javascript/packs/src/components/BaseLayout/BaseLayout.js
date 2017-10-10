import React, {Component} from 'react';

import Header from '../Header/Header';

export default class BaseLayout extends Component{
  render(){
    return(
      <div className="">
        <Header />
        {this.props.children}
      </div>
    )
  }
}
