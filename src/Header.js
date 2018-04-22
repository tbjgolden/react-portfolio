import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Header.css';

class Header extends Component {
  state = { menuOpen: false, redirect: false };

  menu = active =>
    ((items =>
      items.map(({ url, title }) => (
        <li key={url} className='Header-menu-nav-list-item'>
          <Link to={url} className={`Header-menu-nav-list-item-link ${active === url ? 'active' : ''}`}>
            {title}
          </Link>
        </li>
      ))
    )([
      { title: 'Portfolio', url: '/portfolio' },
      { title: 'Experience', url: '/experience' },
      { title: 'Contact', url: '/contact' },
      // { title: 'About This Site', url: '/about-this-site' },
      // { title: 'Blog', url: '/blog' }
    ]));

  componentDidMount = () => {
    this.top = document.getElementById('top');
  };

  mousewheelEvent = e => !!e.preventDefault();

  toggleMenu = (menuOpen = !this.state.menuOpen) => {
    document.body.style.overflowY = menuOpen ? 'hidden' : 'auto';
    document.body.style.pointerEvents = menuOpen ? 'none' : 'auto';
    this.setState({ menuOpen });
  };

  componentWillReceiveProps = nextProps => {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      this.toggleMenu(false);
    }
  };

  render = () => {
    const { menu, state, props } = this;
    const { screenWidth, location } = props;
    const { menuOpen } = state;

    const cartButtonProps = {};
    const menuProps = {};
    if (menuOpen) {
      cartButtonProps['aria-hidden'] = true;
    } else {
      cartButtonProps.tabIndex = '0';
      if (screenWidth < 768) menuProps.hidden = true;
    }

    return (
      <header className={`Header ${(menuOpen ? 'is-open' : '')}`}>
        <div className='App-row-sizer' style={{ padding: 0, position: 'relative' }}>
          <div className='Header-menu-button' onClick={() => this.toggleMenu()} role='button' aria-label='Toggle menu' tabIndex='0' />
          <Link to='/' className='Header-logo' onClick={() => this.toggleMenu(false)} />
          <nav className='Header-menu-nav' {...menuProps} >
            <ul className='Header-menu-nav-list'>
              { menu(location.pathname) }
            </ul>
          </nav>
          <Link to='/contact' className='Header-cart-button' {...cartButtonProps} />
        </div>
      </header>
    );
  };
}

export default withRouter(Header);
