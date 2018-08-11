import React from 'react';
import taskMgmtlowFidelity from '../../assets/img/jira-redesign-low.png';
import taskMgmthighFidelity from '../../assets/img/jira-redesign-highfid.png';

const Design = ()=> (
    <div className="details content">
        <h3 className="name">Design Projects</h3>
        <section className="projectDesc">
            <b>Collab</b>
            <p>A design challenge on JIRA - It started out as a personal project to redesign
                a landing page of the issue tracking/project management tool, but resulted in a redesign
                of the experience. This new design aims to remove the negative 'issues'
                culture around the projects and focuses more on the collaboration of development teams.
            </p>
            <p>(More to come as this research/redesign continues)</p>
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