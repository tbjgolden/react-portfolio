import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
  top = { scrollIntoView: () => {} };
  scrollToTop = () => this.top.scrollIntoView({ behavior: 'smooth' });

  componentDidMount () {
    this.top = document.getElementById('top');
  }

  render () {
    return (
      <header className='Header'>
        <div className='App-row-sizer' style={{ padding: 0, position: 'relative' }}>
          {/* <div className='Header-title'> */}
          <div role='button' tabIndex='0' className='Header-menu-button' />
          <div className='Header-logo' onClick={this.scrollToTop} />
          <div role='button' tabIndex='0' className='Header-cart-button' />
        </div>
      </header>
    );
  }
}
