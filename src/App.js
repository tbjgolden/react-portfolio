import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import './App.css';

export default class Root extends Component {
  constructor (props) {
    super(props);
    this.state = { screenWidth: window.document.documentElement.clientWidth };

    window.addEventListener('resize', this.onResize.bind(this), false);
    window.addEventListener('mousemove', this.onResize.bind(this, 1000), false);
  }

  componentDidMount () {
    [...document.querySelectorAll(':not(button):not(input)[tabindex]')]
      .forEach(el => {
        el.addEventListener('keyup', ev => {
          if (ev.keyCode === 13) {
            ev.preventDefault();
            ev.stopPropagation();
            el.click();
            return false;
          }
        })
      })
  }

  onResize (debounce = 66) {
    if (!this.resizeTimeout) {
      this.resizeTimeout = setTimeout(() => {
        this.resizeTimeout = null;
        const screenWidth = window.document.documentElement.clientWidth;
        this.setState({ screenWidth });
      }, debounce);
    }
  }

  render () {
    const { state } = this;
    const { screenWidth } = state;

    return (
      <div className='App'>
        <Header screenWidth={screenWidth} />
        <Main screenWidth={screenWidth} />
        <Footer />
      </div>
    );
  }
}
