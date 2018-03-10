import React from 'react';
import Columns from './Columns';
import Jumbotron from './Jumbotron';
import Strong from './Strong';
import WebDiagram from './WebDiagram';
import MobileDiagram from './MobileDiagram';
import Matrix from './Matrix';
import './Main.css';

export default ({ headerHeight, screenWidth, isMobile }) => (
  <main className='Main'>
    <div id='top' />
    <Jumbotron>
      <div className='App-row-sizer centre'>
        <div className='App-row-title'>
          Incredible engineering.
        </div>
        <div className='App-row-description' id='design-film-link'>
          <a href='film.html' target='_blank'>Watch the design film</a>
        </div>
      </div>
      <img id='jumbotron-laptop-image' alt='My laptop' src='images/mylaptop.jpg' />
    </Jumbotron>
    <div className='App-row-sizer'>
      <div className='App-row-title centre'>The best TomGolden yet.</div>
      <div className='App-row-description centre'>
        The new <Strong>TomGolden</Strong> comes with a new 15 inch MacBook Pro as standard.
      </div>
    </div>
    <hr className='x6' />
    <div className='App-row has-notch' style={{ height: 'calc(200px + 10vw)' }}>
      <Matrix screenWidth={screenWidth} />
      <div className='App-notch centre'>
        <div className='App-row-title'>TomGolden writes code.</div>
        <div className='App-row-description'>
          <Strong>Smart, efficient, truly profound algorithms.</Strong>
        </div>
      </div>
    </div>
    <div className='App-row white'>
      <div className='App-row-sizer'>
        <div className='App-row-title'>TomGolden works on:</div>
        <Columns>
          <div>
            <div className='App-row-header'>Web</div>
            <div className='App-row-description'>React,&nbsp;Angular,&nbsp;JavaScript,&nbsp;etc.</div>
            <WebDiagram />
          </div>
          <div>
            <div className='App-row-header'>Mobile</div>
            <div className='App-row-description'>Ionic,&nbsp;React&nbsp;Native,&nbsp;Android</div>
            <MobileDiagram />
          </div>
        </Columns>
      </div>
    </div>
    <div className='App-row white'>
      <div className='App-row-sizer'>
        <div className='App-row-header'>Contact</div>
        <Columns>
          <div>
            <div className='App-row-description'><Strong>Email</Strong></div>
            <div className='App-row-description disable-select'>
              mail<span className='at-sign'>a</span>tbjg<span className='obfuscate' />olden<span className='period' />com
            </div>
          </div>
          <div>
            <div className='App-row-description'><Strong>Text</Strong></div>
            <div className='App-row-description disable-select'>
              {'1\u200A\u00B7\u200A(209)\u200A'}
              <span className='obfuscate' />
              {'\u00B7\u200A764\u200A\u00B7\u200A0446'}
            </div>
          </div>
        </Columns>
      </div>
    </div>
  </main>
);
