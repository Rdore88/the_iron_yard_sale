import React, {Component} from 'react';
import {connect} from 'react-redux';
import NavBar from '../NavBar/NavBar';
import AdminNav from '../AdminNav/AdminNav';

class Header extends Component{
  render(){
    return(
      <header className="p-3 d-flex justify-content-between align-items-center">
        <img src="https://tiy-site-herokuapp-com.global.ssl.fastly.net/assets/aesthetic/logo/tiy-white-378fe1ca9726ccc547a83fd6cccbacdccd89d07741c06c5d170f398d2f096b0f.svg" alt="The Iron Yard" />
        <h1>The Iron Yard Sale</h1>
        {this.props.user.user_id ? <AdminNav /> : <NavBar />}
      </header>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(Header)
