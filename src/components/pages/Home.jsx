import React from 'react'
import image from '../assets/earth3.png'
import './css/Home.css'
import microchip from '../assets/icons/microchip.png';
import database from '../assets/icons/database.png';
import laptopmobile from '../assets/icons/laptop-mobile.png';
import userRobot from '../assets/icons/user-robot.png';
import cloudShare from '../assets/icons/cloud-share.png';
import headVr from '../assets/icons/head-vr.png';
import qrcode from '../assets/icons/qrcode.png';
import unity from '../assets/icons/unity.png';
import down from '../assets/icons/down.png';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Card } from 'react-bootstrap';


export const Home = () => {
    return (
        <div className='banner'>
            <div className="computer">
                <div className="computer-image">
                    <img src={image} alt="" width={"100%"} />
                </div>
                {/* <h1 className='title'>Tech Terms</h1> */}
                <div className="circle">
                    <div className='icon'><img src={microchip} /></div>
                    <div className='icon'><img src={database} /></div>
                    <div className='icon'><img src={userRobot} /></div>
                    <div className='icon'><img src={laptopmobile} /></div>
                    <div className='icon'><img src={cloudShare} /></div>
                    <div className='icon'><img src={headVr} /></div>
                    <div className='icon'><img src={qrcode} /></div>
                    <div className='icon'><img src={unity} /></div>
                </div>
                <div className="asteroid">
                    <div className="stone"></div>
                    <div className="stone"></div>
                    <div className="stone"></div>
                    <div className="stone"></div>
                    <div className="stone"></div>
                    <div className="stone"></div>
                    <div className="stone"></div>
                </div>
            </div>
            <HashLink smooth to='/home/#categories' >
                <div>
                    <img src={down} alt="" width={"2%"} />
                    {/* <h2 className='see-more'>See More</h2> */}
                </div>
            </HashLink>
            <div id='categories'>
            <h1 className='see-more'>CATEGORIES</h1>
            <Card style={{width:'18rem'}}>
                <Card.Img variant='top' src='' />
            </Card>
            </div>

        </div>
    )
}
