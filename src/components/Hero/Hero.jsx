import React from 'react';
import "./Hero.css"
import dark_arrow from "../../assets/dark-arrow.png"
const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
<h1>we ensure better education for a better world</h1>
<p>Good education empowers individuals with knowledge, critical thinking skills, 
  and a broad perspective on the world. It fosters personal growth, creativity, 
  and the ability to solve complex problems.</p>
  <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  );
}

export default Hero;
