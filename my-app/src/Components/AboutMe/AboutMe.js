import React from  'react';
import Footer from './../Footer/Footer';
import './About.css'
import Headshot from '../../assets/img/2016spring_headshot.png'
import Menu from "../Menu/Menu";
import './../App.css';

const AboutMe = () => {
   return (
       <div>
           <Menu/>
           <div className="about">
               <div className="aboutHeader">
                   <img src={ Headshot } alt="hi" className="headshot"/>
                <h1 className="name">hi there, i'm Loucil.</h1>
                   <div className="aboutDetails">
                       <p>
                           Welcome to my online portfolio! I'm an <b>application developer with a passion for UI & UX Design.</b><br/><br/>
                           I graduated from Florida State University with a Bachelor of Science degree
                           in Information Technology in 2016, and jumpstarted my career in Tech at JPMorgan in Florida.
                           I built this portfolio to showcase my personal projects, share my current interests,
                           as well as my journey as a woman in technology.
                       </p>
                    </div>
                </div>
               <div className="mediaLinks">
                   <a href="https://www.linkedin.com/in/mlcrubio">LINKEDIN</a>
                   <span className="space"> | </span>
                   <a href="https://github.com/loucilvr">GITHUB</a>
               </div>
               <Footer/>
           </div>
       </div>
   );
}

export default AboutMe;
