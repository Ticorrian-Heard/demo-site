import React from 'react'
import { Button } from './Button'
import './HeroSection.css';

function HerosSection() {
  return (
    <div className='hero-container'>
        <video src='../../assets/videos/bubbles.mov' playsInline autoPlay loop muted></video>
        <h1>Build with Zoom’s Core Technology</h1>
        <div className='hero-btns'>
            <Button path='https://explore.zoom.us/en/video-sdk/' buttonStyle='btn--transparent' buttonSize='btn--large' extraStyle='transition-colors hover:bg-slate-300 active:bg-slate-500'>Get Started with Zoom's Video SDK</Button>
        </div>
    </div>
  )
}

export default HerosSection