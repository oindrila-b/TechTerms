import React from 'react'
import './css/Home.css'
import aiHand from '../assets/aiHand.png'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'



export const Home = () => {
    return (
        <div>
            <Parallax pages={4} >
                <ParallaxLayer 
                speed={1}
                offset={0}
                style={{
                    backgroundImage: `url(${aiHand})`,
                    backgroundSize: 'contain',
                    backgroundPosition:'right',
                    left:'40px'
                }}> 
                   <h1 className='left-subtitles'>
                    AI
                   </h1>
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={0.5}> 
                    <h1>    WHO DAT   ?</h1>
                    </ParallaxLayer> 
            </Parallax>
        </div>
    )
}
