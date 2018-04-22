import React from 'react';
import Columns from '../../Columns';
import Strong from '../../Strong';
import WebDiagram from './WebDiagram';
import MobileDiagram from './MobileDiagram';
import Matrix from './Matrix';
import Jumbotron from './Jumbotron';
import './index.css';

const Home = ({ screenWidth }) => (
  <div>
    <Jumbotron />
    <div className='App-row-sizer'>
      <div className='App-row-title centre'>The best TomGolden yet.</div>
      <div className='App-row-description centre'>
        The new <Strong>TomGolden</Strong> comes with a new 15 inch MacBook Pro as standard.
      </div>
    </div>
    <hr className='x4' />
    <div className='App-row' style={{ height: 'calc(300px + 15vw)' }}>
      <Matrix screenWidth={screenWidth} />
      <div className='App-row-sizer'>
        <div className='App-row-title'>TomGolden writes code.</div>
        <div className='App-row-description'>
          <Strong>Proprietary, revolutionary algorithms.</Strong>
        </div>
      </div>
    </div>
    <div className='App-row white'>
      <div className='App-row-sizer'>
        <div className='App-row-title'>TomGolden works on:</div>
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
