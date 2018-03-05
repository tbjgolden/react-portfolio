import React from 'react';
import Columns from './Columns';
import Strong from './Strong';
import WebDiagram from './WebDiagram';
import MobileDiagram from './MobileDiagram';
import Matrix from './Matrix';
import './Main.css';

export default ({ headerHeight, screenWidth, isMobile }) => {
  // const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut diam a est egestas gravida. Integer turpis odio, volutpat a blandit vel, blandit ut urna. Donec efficitur interdum commodo. Donec auctor, ipsum ac aliquet vehicula, dolor tortor feugiat urna, vel mollis elit nibh id risus. Donec dapibus placerat tincidunt. Nullam luctus leo eu arcu convallis, non congue augue eleifend. Etiam interdum ante iaculis, iaculis lectus eu, mattis libero. Etiam ut volutpat risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque et augue neque.';
  // const text = new Array(10).fill(lorem);

  const jumbotronStyle = {
    minHeight: `calc(100vh - ${headerHeight}px)`
  };

  const textStyle = {
    top: `calc(100vh - 40px - ${headerHeight}px - ${screenWidth <= 700 ? '42' : '60'}px)`
  };

  return (
    <main className='Main' style={{ marginTop: headerHeight }}>
      <article id='jumbotron-laptop' className='jumbotron' style={jumbotronStyle}>
        <div className='jumbotron-top'>
          <h2 className='jumbotron-tagline'>Incredible engineering.</h2>
          <p id='design-film-link'>
            <a href='film.html' target='_blank'>Watch the design film</a>
          </p>
        </div>
        <img id='jumbotron-laptop-image' alt='My laptop' src='images/mylaptop.jpg' />
        <div className='jumbotron-text' style={textStyle}>
          <h3>This is</h3>
          <h4><Strong>TomGolden</Strong>'s&nbsp;laptop.</h4>
        </div>
      </article>
      <div className='App-row'>
        <div className='App-row-sizer'>
          <p className='centre'>The new <Strong>TomGolden</Strong> comes with a new 15 inch MacBook Pro as standard.</p>
        </div>
      </div>
      <div className='App-row'>
        <Matrix screenWidth={screenWidth} />
        <div className='App-row-sizer'>
          <div className='App-row-title'>TomGolden writes code.</div>
          <div className='App-row-description'>
            <Strong>It also writes Unicode <span role='img' aria-label='smirk emoji'>&#x1F60F;</span></Strong>
          </div>
        </div>
      </div>
      <div className='App-row'>
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
      <div className='App-row'>
        <div className='App-row-sizer'>
          <div className='App-row-header'>Support</div>
          <Columns>
            <div>
              <div className='App-row-description'><Strong>Email</Strong></div>
              <div className='App-row-description'>tbjgolden@gmail.com</div>
            </div>
            <div>
              <div className='App-row-description'><Strong>Text</Strong></div>
              <div className='App-row-description'>{'1\u200A\u00B7\u200A(209)\u200A\u00B7\u200A764\u200A\u00B7\u200A0446'}</div>
            </div>
          </Columns>
        </div>
      </div>
      {
        /*
        <div className='App-row'>
          <div className='App-row-sizer'>
            { text.map((para, i) => <p key={i}>{ para.trim() }</p>) }
          </div>
        </div>
        */
      }
    </main>
  );
}
