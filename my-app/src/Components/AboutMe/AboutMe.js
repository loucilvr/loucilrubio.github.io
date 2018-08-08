import React from  'react';
import './About.css'
import Headshot from '../../assets/img/2016spring_headshot.png'
import Menu from "../Menu/Menu";
import './../App.css';

const AboutMe = () => {
   return (
       <div className="about">
           <img src={Headshot}
                alt="Personal Headshot"
                className="headshot"
           />
            <h1 className="name">hi there, i'm Loucil</h1>
           <section className="aboutDetails">
               <p>
                   I'm a <b>software engineer with a love for UI & UX Design. </b>
                   I graduated from Florida State University in 2016, and jumpstarted my career in Tech at JPMorgan Chase in Florida.
                   I built this portfolio to showcase my personal projects, share my current interests,
                   as well as my journey as a woman in technology.
               </p>
            </section>
           <section className="mediaLinks">
               <a href="https://www.linkedin.com/in/mlcrubio">LINKEDIN</a>
               <span className="space"> | </span>
               <a href="https://github.com/loucilvr">GITHUB</a>
           </section>
       </div>
   );
}

export default AboutMe;
