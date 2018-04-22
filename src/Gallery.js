import React from 'react';
import './Gallery.css';

const Gallery = ({ children, className, ...props }) => (
  <div className={`Gallery ${className || ''}`} {...props}>
    {children}
  </div>
);

export default Gallery;
export const GalleryRow = ({ children, className, ...props }) => (
  <div className={`Gallery-row ${className || ''}`} {...props}>
    {children}
  </div>
);
export const GalleryItem = ({ children, className, ...props }) => (
  <div className={`Gallery-item ${className || ''}`} {...props}>
    {children}
  </div>
);
export const GalleryImage = ({ src, className, bgProps: { src: bgSrc, ...bgStyle }, ...props }) => {
  return (
    <div className={`Gallery-image-container ${className || ''}`} {...props}>
      <div className='Gallery-image-background-container'>
        <img className='Gallery-image-background' src={bgSrc} alt={altify(bgSrc)} style={bgStyle} />
      </div>
      <img className='Gallery-image' alt={altify(src)} src={src} />
    </div>
  );
};
export const GalleryText = ({ children }) => (
  <div className='Gallery-text'>
    {children}
  </div>
);

function altify (src) {
  return ((src || '').split('images/')[1] || `${src}.`)
    .split('.').reverse().slice(1).reverse().join('.');
}
