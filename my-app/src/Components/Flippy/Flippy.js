import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import StudyGuide from './StudyGuide';
// import './Flippy.css';

const Welcome =
(
    <div>
    <h1 className="title">Welcome to Flippy</h1>
    <p>Begin flipping through your flash cards by clicking the button below.</p>
    {/*<Link to="/study">*/}
        {/*<input type="submit" name="name"*/}
               {/*className="startStudying" value="START STUDYING"*/}
        {/*/>*/}
    {/*</Link>*/}
    </div>
);


class Flippy extends Component {
    render() {
        return (
            <div>
                hi
                {/*<Router>*/}
                    {/*<Switch>*/}
                        {/*<Route path="/study" component={StudyGuide}/>*/}
                        {/*<Route exact path="/flippy" component={Welcome}/>*/}
                    {/*</Switch>*/}
                {/*</Router>*/}
            </div>

        );
    }
}

export default Flippy;
