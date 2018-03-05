import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import './App.css';

export default class Root extends Component {
  constructor (props) {
    super(props);
    this.state = {
      screenWidth: window.document.documentElement.clientWidth,
      headerHeight: 0
    };

    this.isMobile = !!navigator.userAgent.match(/Android|iPhone|Windows Phone|iPod|BlackBerry/i);

    window.addEventListener('resize', this.onResize.bind(this), false);
    window.addEventListener('mousemove', this.onResize.bind(this, 1000), false);
  }

  componentDidMount () {
    this.setState({
      headerHeight: document.querySelector('.Header').offsetHeight
    });

    this.resizeInterval = setInterval(this.onResize.bind(this), 500);
  }

  componentWillUnmount () {
    clearInterval(this.resizeInterval);
  }

  onResize (debounce = 66) {
    if (!this.resizeTimeout) {
      this.resizeTimeout = setTimeout(() => {
        this.resizeTimeout = null;
        this.setState({
          screenWidth: window.document.documentElement.clientWidth,
          headerHeight: document.querySelector('.Header').offsetHeight
        })
       }, debounce);
    }
  }

  render () {
    const { state, isMobile } = this;
    const { headerHeight, screenWidth } = state;

    return (
      <div className='App-wrapper'>
        <Header screenWidth={screenWidth} />
        <Main headerHeight={headerHeight} screenWidth={screenWidth} isMobile={isMobile} />
        <Footer />
      </div>
    );
  }
}
