import React from 'react'
import { Button } from './Button'
import './HeroSection.css';

function HerosSection() {
  return (
    <div className='hero-container'>
        <video src='../../assets/videos/video-2.mp4' playsInline autoPlay loop muted></video>
        <h1>Welcome to our demo site!</h1>
        <div className='hero-btns'>
            <Button path='https://explore.zoom.us/en/video-sdk/' buttonStyle='btn--primary' buttonSize='btn--large' extraStyle='transition-colors hover:bg-slate-300 active:bg-slate-500'>Get Started with the Zoom Video SDK</Button>
        </div>
    </div>
  )
}

export default HerosSection