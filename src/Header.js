import React from 'react';
import './Header.css';

export default ({ screenWidth }) => {
  return (
    <header className='Header'>
      <div className='App-row-sizer'>
        <h1>
          TomGolden<span style={{verticalAlign: 'super', fontSize: '50%' }}>TM</span>
        </h1>
        {
          screenWidth >= 992
            ? <h2>The best TomGolden we've ever produced.</h2>
            : null
        }
      </div>
    </header>
  );
}
