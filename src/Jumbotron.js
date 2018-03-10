import React from 'react';
import './Jumbotron.css';

export default ({ children }) => {
  return (
    <div className='Jumbotron'>
      { children }
    </div>
  );
}
