import React from 'react';
import './Jumbotron.css';

const Jumbotron = ({ children }) => {
  return (
    <div className='Jumbotron'>
      { children }
    </div>
  );
};

export default Jumbotron;
