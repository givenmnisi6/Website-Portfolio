import React from 'react';
import './Hero.css';
import profileImg from '../../../assets/profile_img.svg'; 

const Hero = () => {
  return(
    <div className='hero'>
    <img src={profileImg} alt=""/>
    <h1>I'm Given Mnisi, a Master's Student</h1>
    <p>Welcome to my portfolio! Here you can find my projects, skills, and contact information.</p>
    <div className="hero-action">
      <div className="hero-connect">Connect With Me</div>
      <div className="hero-resume">View My Resume</div>
    </div>
    </div>
  )
}

export default Hero