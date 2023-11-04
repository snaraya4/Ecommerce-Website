import React from 'react'
import './Hero.css';
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png';
import hero_img from '../Assets/hero_image.png';

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero_left">
            <h2>New Arrivals Only!</h2>
            <div>
                <div className="hero_hand_icon">
                    <p>New</p>
                    <img src={hand_icon} alt="" />
                </div>
                <p>collections</p>
                <p>for everyone</p>
                </div>
                <div className="hero_latest_button">
                <div>Latest Collection</div>
                <img src={arrow_icon} alt="" />
                </div>
            </div>
        <div className="hero_right">
            <img src={hero_img} alt="" />
        </div>
            
    </div>
  )
}

export default Hero
