import React from "react";
import "./About.css"
import about_img from "../../assets/about1.png"
import play_icon from "../../assets/play-icon.png"

const About = ({setPlayState}) => {
  return (
    <div className="about">
        <div className="about-left">
            <img src={about_img} alt="" className="about-img"/>
            <img src={play_icon} alt="" className="play-icon" onClick={()=>{
              setPlayState(true) }} />
           
        </div>
        <div className="about-right">
          <h3>ABOUT UNIVERSITY</h3>
     <h2>Nuturing Tomorrow Leaders Today </h2>
      <p>Education is the process of acquiring knowledge, skills, values, and
       habits, often facilitated by teachers in a structured environment like 
      schools or universities. Education fosters critical thinking, creativity,
       and personal development.</p>
      <p>Education fosters critical thinking, creativity, and personal development, 
     preparing individuals for various aspects of life and work. Lifelong learning 
    is increasingly emphasized in a rapidly changing world.</p>
    <p>Education also plays a crucial role in societal development by promoting
     equality and fostering innovation. It can be tailored to individual needs 
    and interests, making it a dynamic and adaptable process. Access to quality
    education is essential for personal and community growth.</p>
        </div>
      
    </div>
  );
}

export default About;
