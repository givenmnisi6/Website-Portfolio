import React from 'react'
import './About.css'; 
import themePattern from '../../assets/theme_pattern.svg';
import profileImg from '../../assets/about_profile.svg';

const About = () => {
  return (
    <div className="about">
        <div className="about_title">
            <h1>About Me</h1>
            <img src={themePattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profileImg} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am an enthusiastic professional with experience in programming languages like Python, C, C++, C#, and Java. I have demonstrated leadership as a student assistant at North-West University, where I led practical sessions, mentored undergraduates, and assessed coursework for students.</p>
                    <p>My certifications include Power BI, Cybersecurity, and Robotic Process Automation, and I am a Golden Key International Honour Society member.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"> <p>Programming Languages: Python, C, C++, C#, Java</p><hr style={{width: "50%"}} /></div>
                    <div className="about-skill"> <p>Data Visualization: Power BI</p><hr style={{width: "70%"}} /></div>
                    <div className="about-skill"> <p>Cybersecurity: Certified</p><hr style={{width: "60%"}} /></div>
                    <div className="about-skill"> <p>Robotic Process Automation: Certified</p><hr style={{width: "50%"}} /></div>
                </div>
            </div>
        </div>
        <div className="about-ahievements">
            <div className="about-achievement">
                <h1>10+</h1>
                <p>Years of experience</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>90+</h1>
                <p>Projects completed</p>
            </div>
        </div>
    </div>
  )
}

export default About