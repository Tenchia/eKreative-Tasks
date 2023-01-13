import React from 'react';
import '../App.css';
import { Button } from './Button';
import './modules-css/HeroSection.css';

function HeroSection() {
    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noreferrer');
      };
  return (
    <div className='hero-container'>
      <video src='/videos/background.mp4' autoPlay loop muted />

      <div className="product--logo"><img src="/images/impulsewtf_website.png" alt=""/></div>
      
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          buttonLink={'/'}
          onClick={() => openInNewTab('https://youtu.be/dQw4w9WgXcQ')}
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          buttonLink={'/'}
          onClick={() => openInNewTab('https://youtu.be/rAM6AaPJ-5M')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;