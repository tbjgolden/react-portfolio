import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
  top = { scrollIntoView: () => {} };
  scrollToTop = () => this.top.scrollIntoView({ behavior: 'smooth' });
  state = { menuOpen: false };

  componentDidMount () {
    this.top = document.getElementById('top');
  }

  toggleMenu = () => {
    this.setState({
      menuOpen: this.state.menuOpen
    });
  }

  render () {
    const { menuOpen } = this.state;
    return (
      <header className='Header'>
        <div className='App-row-sizer'>
          <div role='button' tabIndex='0' className='Header-menu-button' onClick={this.toggleMenu} />
          <div className='Header-logo' onClick={this.scrollToTop} />
          <div role='button' tabIndex='0' className='Header-cart-button' />
        </div>
        <div className='Header-mobile-menu' style={{ display: menuOpen ? 'block' : 'none' }}>
          <p>Hi</p>
        </div>
      </header>
    );
  }
}
