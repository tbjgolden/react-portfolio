import React from 'react';

export default ({ screenWidth }) => {
  return (
    <header className='Header'>
      <div className='App-row-sizer'>
        <h1 style={{ position: 'relative', paddingLeft: '2.4ex' }}>
          <img className='logo' src='/logo.svg' style={{ position: 'absolute', left: '0', top: '0.1ex', height: '1.8ex' }} />
          TomGolden<span style={{verticalAlign: 'super', fontSize: '50%' }}>TM</span>
          {
            screenWidth >= 992
              ? <h2>The best TomGolden we've ever produced.</h2>
              : null
          }
        </h1>
      </div>
    </header>
  );
}
