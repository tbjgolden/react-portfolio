import React from 'react';
import './Footer.scss';

const Footer = ({ isAndroid }) => {
  return (
    <footer className='Footer'>
      <div className='App-row-sizer'>
        <small>
          Copyright &copy; {(new Date()).getFullYear()} Tom Golden. All rights reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
