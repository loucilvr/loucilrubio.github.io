import React from  'react';
import './home.css'
import Headshot from '../../assets/img/2016spring_headshot.png'
import '../../App.css';
import { createUseStyles } from 'react-jss';
import commonStyles from '../../common/commonStyles';

const useStyles = createUseStyles({
    about: {
        fontFamily: 'sans-serif',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    headshot: {
        width: '25%',
        borderRadius: '50%',
        marginBottom: '24px'
    },
    aboutDetails: {
        fontSize: '16px',
        color: '#363636',
        textAlign: 'left',
        padding: '0 42px',
        lineHeight: '22px'
    },
    mediaLinks: {

    marginTop: '46px',
    textAlign: 'center',
    fontSize: '12px',
    letterSpacing: '1px',
    textDecoration: 'none'
    },
    link: {

    },
    ...commonStyles
});

const Home = () => {
    const classes = useStyles();
        return (
    <div className={classes.about}>
        <img src={Headshot}
                alt="Personal Headshot"
                className={classes.headshot}
        />
            <h1 className={classes.heading}>hi there, I'm Loucil</h1>
        <section className={classes.aboutDetails}>
            <p> I'm a <b>UX Engineer</b> based in Tampa, FL. I consider myself <b>45% developer</b>,<b> 45% designer</b> and <b>10% caffeine</b>.
             This means, one week I'm working on a high-fidelity design for our client-facing and internal applications, and other weeks I'm building
              the UI components, hooking them into the APIs and shipping features into Production... all while being overly caffeinated 
              (thanks to my new found love in home latte art).
                <br/><br/>
                I built this portfolio to share some of my current interests and
                showcase things I've created outside of work for fun.
            </p>
            </section>
        <section className={classes.mediaLinks}>
            <a href="https://www.linkedin.com/in/mlcrubio">LINKEDIN</a>
            &nbsp;| &nbsp;
            <a href="https://github.com/loucilvr">GITHUB</a>
        </section>
    </div>
    )
};

export default Home;
