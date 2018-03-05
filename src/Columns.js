import React from 'react';
import './Columns.css';

export default ({ children }) => {
  return (
    <div className='Columns'>
      { children.map((child, i) => <child.type key={i} className='Columns-column' {...child.props}>{child.props.children}</child.type>) }
    </div>
  );
}
