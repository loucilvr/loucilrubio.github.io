import React from  'react';
import Headshot from '../../assets/img/2016spring_headshot.png'

const AboutMe = () => {
   return (
       <div className="about">
           <div className="aboutHeader">
               <img src={ Headshot } alt="hi" className="headshot"/>
            <h3 className="hi">hi there, i'm Loucil</h3>
               <div className="aboutDetails">
                   <p>
                       Welcome to my online portfolio! I'm an application developer with a passion for UI & UX Design.<br/><br/>
                       I graduated from Florida State University with a Bachelor of Science degree in Information Technology in 2016, and jumpstarted my career in Tech at JPMorgan in Florida.
                       I built this portfolio to showcase my personal projects, share my current interests, as well as my journey as a woman in technology.
                   </p>
           </div>
       </div>
       </div>
   );
}

export default AboutMe;