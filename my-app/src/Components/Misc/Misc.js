import React from 'react';
import { Link } from 'react-router-dom';

const linkExpert = 'https://medium.com/@sara_ann_marie/dont-feel-like-an-expert-share-anyway-661f2f8cd038';
const designKitLink = 'http://www.designkit.org/methods';

const style = {
    source: {
        display: 'inline'
    }
}
const Misc = ()=> (
    <div>
            <div className="details content">
                <h3 className="name">Miscellaneous</h3>
                <div style={{ padding: '50px 0px'}}>
                    <p style={{color: '#8a8a8a', fontWeight: 'bold'}}>
                        Some articles worth re-sharing that are both inspiring and informative:
                    </p>
                    <div style={{ padding: '8px 0px 8px 0px' }}>
                        <Link
                        to={linkExpert}
                        style={{color: '#005891', textDecoration: 'underline'}}
                    >
                        Don't feel like an expert? Share anyway.
                    </Link>
                        <p style={style.source}>&nbsp; [MEDIUM]</p>
                    </div>
                    <div style={{ padding: '8px 0px 8px 0px' }}>
                        <Link
                        to={designKitLink}
                        style={{color: '#005891', textDecoration: 'underline'}}
                    >
                        Human-Centered Design
                    </Link>
                        <p style={style.source}>&nbsp; [Design Kit/IDEO]</p>
                    </div>
                </div>

            </div>
    </div>
);

export default Misc;