import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
  state = { menuOpen: false };

  menuItems = [
    { title: 'Lolz', url: 'lolz' },
    { title: 'Molz', url: 'molz' },
    { title: 'Holz', url: 'holz' },
    { title: 'Rolz', url: 'rolz' }
  ];

  componentDidMount = () => { this.top = document.getElementById('top') };

  scrollToTop = () => this.top.scrollIntoView({ behavior: 'smooth' });

  toggleMenu = () => this.setState({ menuOpen: !this.state.menuOpen });

  render () {
    const { menuItems, state } = this;
    const { menuOpen } = state;

    const menu = (
      <nav className='Header-menu-nav'>
        <ul className='Header-menu-nav-list'>
          {
            menuItems.map(({ url, title }) => (
              <li key={url} className='Header-menu-nav-list-item'>
                <a href={url} className='Header-menu-nav-list-item-link'>{title}</a>
              </li>
            ))
          }
        </ul>
      </nav>
    );

    return (
      <header className={`Header ${(menuOpen ? 'is-open' : '')}`}>
        <div className='App-row-sizer' style={{ padding: 0, position: 'relative' }}>
          <div className='Header-menu-button' onClick={this.toggleMenu} role='button' tabIndex='0' />
          <div className='Header-logo' onClick={this.scrollToTop} role='button' tabIndex='0' />
          { menu }
          <div className='Header-cart-button' role='button' tabIndex='0' />
        </div>
      </header>
    );
  }
}
