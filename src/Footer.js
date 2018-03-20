import React from 'react';
import Strong from './Strong';
import './Footer.css';

export default ({ isAndroid }) => {
  return (
    <footer className='Footer'>
      <div className='App-row-sizer App-row-description'>
        <small>
          &copy; <Strong>TomGolden</Strong>. Not actually a trademark.
        </small>
      </div>
    </footer>
  );
}
