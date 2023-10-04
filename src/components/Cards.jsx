import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1 className='text-3xl text-white'>Demos</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem 
                        src="../../assets/images/uitoolkits.png"
                        text="Pre-Built UI running the Zoom Video SDK under the hood. Ready for deployment!"
                        label="UIToolKit"
                        path="https://videosdk.dev/uitoolkit/"/>

                    <CardItem 
                        src="../../assets/images/bubbles.png"
                        text="Window full of video bubbles powered by our Video SDK!"
                        label="Bubbles"
                        path="https://videosdk.dev/bubbles/"/>

                    <CardItem 
                        src="../../assets/images/collage.png"
                        text="Create a collage just by speaking. Speech is turned into photos utilizing Zoom's Transcription AI!"
                        label="AI-Collage"
                        path="https://videosdk.dev/collage/ "/>


                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards