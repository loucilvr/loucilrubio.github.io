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
           <p>
               I'm <b>a software engineer with a love for UI & UX Design</b>.
            </p>
            <p>
               I graduated from Florida State University in 2016 with a Bachelors in IT,
               and jumpstarted my career in tech as a Software Engineer at JPMorgan Chase in Tampa, Florida.
               I did backend development my first year and a half after college,
                and I'm currently focusing on front-end engineering as well as UX Research and Design.
            </p>
            <p>
               I built this portfolio to share some of my current interests as well as to 
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
