import React from 'react';
import Columns from '../../Columns';
import Strong from '../../Strong';
import WebDiagram from './WebDiagram';
import MobileDiagram from './MobileDiagram';
import Matrix from './Matrix';
import Jumbotron from './Jumbotron';
import './index.scss';

const Home = ({ screenWidth }) => (
  <div>
    <Jumbotron />
    <div className='App-row-sizer'>
      <div className='App-row-title centre'>The best TomGolden&nbsp;yet.</div>
      <div className='App-row-description centre'>
        Developer. Designer. Creator&nbsp;of&nbsp;<a href='http://willtheygo.com' target='_blank' rel='noopener noreferrer'>willtheygo.com</a>.
      </div>
    </div>
    <hr className='x4' />
    <div className='App-row' style={{ height: 'calc(300px + 15vw)' }}>
      <Matrix screenWidth={screenWidth} />
      <div className='App-row-sizer'>
        <div className='App-row-title'>Revolutionary algorithms.</div>
        <div className='App-row-description'>
          <Strong>EmojiRain&trade; &ndash; powered by the Canvas API.</Strong>
        </div>
      </div>
    </div>
    <div className='App-row white'>
      <div className='App-row-sizer'>
        <div className='App-row-title'>TomGolden helps you build:</div>
        <Columns>
          <div>
            <div className='App-row-header'>Web</div>
            <div className='App-row-description'>React, Angular, JavaScript, etc.</div>
            <WebDiagram />
          </div>
          <div>
            <div className='App-row-header'>Mobile</div>
            <div className='App-row-description'>Ionic, React&nbsp;Native, Android</div>
            <MobileDiagram />
          </div>
        </Columns>
      </div>
    </div>
  </div>
);

export default Home;
