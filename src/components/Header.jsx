import { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.svg';
import '../css/header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <Link to="/">
          <div className="logo-container">
            <h2>TITLE</h2>
            <img src={Logo} className="logo" alt="KeepSong Logo" />
          </div>
        </Link>
      </header>
    );
  }
}

export default Header;
