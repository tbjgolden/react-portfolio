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
          screenWidth: window.document.documentElement.clientWidth
        })
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
