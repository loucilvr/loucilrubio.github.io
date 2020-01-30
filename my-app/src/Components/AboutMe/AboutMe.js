import React from  'react';
import './About.css'
import Headshot from '../../assets/img/2016spring_headshot.png'
import './../App.css';

const AboutMe = () => (
   <div className="about">
       <img src={Headshot}
            alt="Personal Headshot"
            className="headshot"
       />
        <h1 className="name">hi there, I'm Loucil</h1>
       <section className="aboutDetails">
           <p> I'm <b>a software engineer with a love for design</b> based in Tampa, FL. </p>
            <p>
               I built this portfolio to share some of my current interests and
               showcase things I've created outside of work for fun :-)
           </p>
        </section>
       <section className="mediaLinks">
           <a href="https://www.linkedin.com/in/mlcrubio">LINKEDIN</a>
           <span className="space"> | </span>
           <a href="https://github.com/loucilvr">GITHUB</a>
       </section>
   </div>
);

export default AboutMe;
