import React from 'react';
import taskMgmtlowFidelity from '../../assets/img/jira-redesign-low.png';
import taskMgmthighFidelity from '../../assets/img/jira-redesign-highfid.png';


const Design = ()=> (
    <div className="details content">
        <h3 className="name">Design Projects</h3>
        <section className="projectDesc">
            <b>Collab</b>
            <p>A design challenge on a project management tool like JIRA, but with an emphasis on fostering collaboration.
                It started out as a personal project to redesign the UI for the issue tracking/project management tool,
                but resulted in a redesign of the concept itself. The idea was to steer the tool away from
                tracking issues/bugs and adding employees to "projects/features", and to focus
                more on the concept of collaborating with others to solve a problem/to introduce a new product.
            </p>
            <p>This project is a work in progress and is currently in discovery stage. More will be posted soon.</p>
            <span className="showcaseApps">
                <img src={taskMgmtlowFidelity}
                     alt="Low Fidelity Design Challenge"
                     width="80%"
                     align="center"
                     style={{
                         display: 'block',
                         marginLeft: 'auto',
                         marginRight: 'auto',
                     }}
                />
                <br/>
                <img src={taskMgmthighFidelity}
                     alt="Low Fidelity Design Challenge"
                     width="80%"
                     align="center"
                     style={{border: '1px solid #eee',
                         display: 'block',
                         marginLeft: 'auto',
                         marginRight: 'auto',
                     }}
                />
            </span>
            <br/>
        </section>
    </div>
);

export default Design;