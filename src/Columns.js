import React from 'react';

export default ({ children }) => {
  return (
    <div className='Columns'>
      { children.map((child, i) => <div key={i} className='Columns-column'>{child}</div>) }
    </div>
  );
}
