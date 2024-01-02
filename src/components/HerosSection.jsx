import React from 'react'
import { Button } from './Button'
import './HeroSection.css';

function HerosSection() {
  return (
    <div className='hero-container'>
        {/* <video src='../../assets/videos/bubbles.mov' playsInline autoPlay loop muted></video> */}
        <h1>Build with Zoom’s Core Technology</h1>
        <div className='hero-btns'>
            <Button path='https://explore.zoom.us/en/video-sdk/' buttonStyle='btn--primary' buttonSize='btn--large' extraStyle='transition-colors'>Get Started with Zoom's Video SDK</Button>
        </div>
        <div class="blue-bar"></div>
    </div>
  )
}

export default HerosSection