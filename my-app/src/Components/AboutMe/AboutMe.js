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
        <h1 className="name">hi there, i'm Loucil</h1>
       <section className="aboutDetails">
           <p> I'm <b>a software engineer with a love for UI & UX Design</b> based in Tampa, FL. </p>
            <p>I'm currently building client-facing and internal-facing web applications for J.P. Morgan Chase,
                as well as performing UX research and design - leveraging web technologies like React, Redux, HTML APIs & REST APIs,
                 and design tools like Balsamiq, Figma and Sketch for creating wireframes
                 & low/high fidelity mockups.
            </p>
            <p>
               I built this portfolio to share some of my current interests and
               showcase stuff I've designed and built outside of work for fun :-)
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
