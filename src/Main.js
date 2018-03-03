import React from 'react';
import Columns from './Columns';
import Strong from './Strong';
import WebDiagram from './WebDiagram';
import './Main.css';

export default ({ headerHeight, screenWidth, isMobile }) => {
  const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut diam a est egestas gravida. Integer turpis odio, volutpat a blandit vel, blandit ut urna. Donec efficitur interdum commodo. Donec auctor, ipsum ac aliquet vehicula, dolor tortor feugiat urna, vel mollis elit nibh id risus. Donec dapibus placerat tincidunt. Nullam luctus leo eu arcu convallis, non congue augue eleifend. Etiam interdum ante iaculis, iaculis lectus eu, mattis libero. Etiam ut volutpat risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque et augue neque.';
  const text = new Array(10).fill(lorem);

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
            <a href='film.html'>Watch the design film</a>
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
          <p className='centre'>The new <Strong>TomGolden</Strong> comes with a new 15' MacBook Pro as standard.</p>
        </div>
      </div>
      <div className='App-row'>
        <div className='App-row-sizer'>
          <p className='centre'><Strong>TomGolden</Strong> works on:</p>
          <Columns>
            <div>
              <Strong>Web</Strong>
              <p>Some paragraph</p>
              <WebDiagram />
            </div>
            <div>
              <Strong>Mobile</Strong>
              <p>Some paragraph</p>
            </div>
          </Columns>
        </div>
      </div>
      <div className='App-row'>
        <div className='App-row-sizer'>
          { text.map((para, i) => <p key={i}>{ para.trim() }</p>) }
        </div>
      </div>
    </main>
  );
}
