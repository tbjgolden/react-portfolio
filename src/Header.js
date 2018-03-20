import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
  state = { menuOpen: false };

  menu = (items =>
    items.map(({ url, title }) => (
      <li key={url} className='Header-menu-nav-list-item'>
        <a href={url} className='Header-menu-nav-list-item-link'>{title}</a>
      </li>
    ))
  )([
    { title: 'Lolz', url: 'lolz' },
    { title: 'Molz', url: 'molz' },
    { title: 'Holz', url: 'holz' },
    { title: 'Rolz', url: 'rolz' }
  ]);

  componentDidMount = () => {
    this.top = document.getElementById('top');
  };

  mousewheelEvent = e => !!e.preventDefault();

  scrollToTop = () => this.top.scrollIntoView({ behavior: 'smooth' });
  state = { menuOpen: false };

  toggleMenu = () => {
    const menuOpen = !this.state.menuOpen;

    document.body.style.overflowY = menuOpen ? 'hidden' : 'auto';
    document.body.style.pointerEvents = menuOpen ? 'none' : 'auto';

    this.setState({ menuOpen });
  };

  render () {
    const { menu, state } = this;
    const { menuOpen } = state;

    return (
      <header className={`Header ${(menuOpen ? 'is-open' : '')}`}>
        <div className='App-row-sizer' style={{ padding: 0, position: 'relative' }}>
          <div className='Header-menu-button' onClick={this.toggleMenu} role='button' tabIndex='0' />
          <div className='Header-logo' onClick={this.scrollToTop} role='button' tabIndex='0' />
          <nav className='Header-menu-nav'>
            <ul className='Header-menu-nav-list'>
              { menu }
            </ul>
          </nav>
          <div className='Header-cart-button' role='button' tabIndex='0' />
        </div>
      </header>
    );
  }
}
