import React from 'react';
import Jumbotron from '../../Jumbotron';
import Gallery, { GalleryItem, GalleryRow, GalleryText, GalleryImage } from '../../Gallery';
import './index.css';

const createPortfolioGalleryImage = src => (
  <GalleryImage
    src={src}
    bgProps={{
      src: 'images/fruitbookpro.png',
      top: '-5%',
      left: '-15%',
      width: '130%',
      maxWidth: 'none'
    }}
  />
);

const Portfolio = () => (
  <div className='Portfolio'>
    <Jumbotron>
      <div className='App-row background-cover white-text Portfolio-jumbotron' style={{
        backgroundImage: `url('images/portfolio.jpg')`,
        backgroundPosition: 'top center'
      }}>
        <div className='App-row-sizer'>
          <div className='App-row-title'>Portfolio</div>
        </div>
      </div>
    </Jumbotron>
    <Gallery>
      <GalleryItem>
        <GalleryText>
          <div className='Gallery-title'>theboar.org</div>
          <div className='Gallery-description'>Award-winning website for student newspaper.</div>
        </GalleryText>
        {createPortfolioGalleryImage('images/theboar.org.png')}
      </GalleryItem>
      <GalleryRow>
        <GalleryItem>
          <GalleryText>
            <div className='Gallery-title'>live.gobiapp.com</div>
            <div className='Gallery-description'>Gobi's premium live feed of snaps.</div>
          </GalleryText>
          {createPortfolioGalleryImage('images/live.gobiapp.com.png')}
        </GalleryItem>
        <GalleryItem>
          <GalleryText>
            <div className='Gallery-title'>shop.shipt.com</div>
            <div className='Gallery-description'>One of the front-end projects at Shipt.</div>
          </GalleryText>
          {createPortfolioGalleryImage('images/shop.shipt.com.png')}
        </GalleryItem>
      </GalleryRow>
    </Gallery>
  </div>
);

export default Portfolio;
