import React from 'react'
import './css/Home.css'
import ai from '../assets/ai.png';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'



export const Home = () => {
    return (
        <div>
            <Parallax pages={4} >
                <ParallaxLayer
                    speed={1}
                     offset={0}
                     factor={2}
                    style={{
                        backgroundImage: `url(${ai})`,
                        backgroundSize: 'fill',
                    }}
                >
                </ParallaxLayer>
                <ParallaxLayer
                    speed={1}
                    offset={1}
                    factor={4}
                    style={{
                        backgroundImage: `url(${ai})`,
                        backgroundSize: 'fill',
                    }}
                ></ParallaxLayer>
                <ParallaxLayer speed={1}>
                    <h1>TRIAL ONE</h1>
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={0.5}>
                    <h1>TRIAL 2</h1>
                </ParallaxLayer>
            </Parallax>
        </div>
    )
}
