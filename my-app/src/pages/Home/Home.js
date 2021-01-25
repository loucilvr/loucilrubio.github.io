import React from 'react';
import Headshot from '../../assets/img/2016spring_headshot.png';
import { createUseStyles } from 'react-jss';
import commonStyles from '../../common/commonStyles';

const useStyles = createUseStyles({
    about: {
        fontFamily: 'sans-serif',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    headshot: {
        width: '30%',
        borderRadius: '50%',
        marginBottom: '32px',
    },
    aboutDetails: {
        fontSize: '16px',
        color: '#363636',
        textAlign: 'left',
        padding: '0 42px',
        lineHeight: '22px',
    },
    mediaLinks: {
        marginTop: '24px',
        textAlign: 'center',
        fontSize: '14px',
        letterSpacing: '1px',
        textDecoration: 'none',
        '& > a': {
            textDecoration: 'none',
            color: '#b00970',
            '&:hover': {
                textDecoration: 'underline',
            },
        },
    },
    link: {},
    ...commonStyles,
});

const Home = () => {
    const classes = useStyles();
    return (
        <div className={classes.about}>
            <img
                src={Headshot}
                alt="Personal Headshot"
                className={classes.headshot}
            />
            <div>
                <h1 className={classes.heading}>hi there, I'm Loucil</h1>
                <section className={classes.aboutDetails}>
                    <p>
                        {' '}
                        I'm a <strong>Senior UX Engineer</strong> at J.P. Morgan
                        Chase, located in Tampa, FL.
                        <br />
                        <br />I consider myself <b>45% developer</b>,
                        <b> 45% designer</b> and <b>10% caffeine</b>. On some
                        days, I'm working on high-fidelity designs on
                        Sketch/Invision for our client-facing and internal
                        applications, and on other days, you'll find me building
                        UI components in React, integrating with APIs, and
                        shipping full features into Production... all while
                        being overly caffeinated from making lattes during my
                        breaks :-P
                        <br />
                        <br />I built this portfolio to share some of my current
                        interests and showcase things I've created outside of
                        work for fun.
                    </p>
                </section>
                <section className={classes.mediaLinks}>
                    <a href="https://www.linkedin.com/in/mlcrubio">LINKEDIN</a>
                    &nbsp;| &nbsp;
                    <a href="https://github.com/loucilvr">GITHUB</a>
                </section>
            </div>
        </div>
    );
};

export default Home;
