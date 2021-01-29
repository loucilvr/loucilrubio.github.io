import React from 'react';
import mockup1 from '../../assets/img/flippy-iphonex-mockup-1.png';
import mockup2 from '../../assets/img/flippy-iphonex-mockup-2.png';
import { createUseStyles } from 'react-jss';
import commonStyles from '../../common/commonStyles';

const useStyles = createUseStyles({
    ...commonStyles,
    text: {
        fontSize: '16px',
        color: '#363636',
        lineHeight: '22px',
    },
    projectDescription: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '@media (min-width: 769px)': {},
        '@media (max-width: 768px)': {
            padding: '24px',
        },
    },
    demoCta: {
        backgroundColor: '#d63939',
        border: 'none',
        color: '#ffffff',
        fontWeight: 'bold',
        borderRadius: '34px',
        height: '30px',
        padding: '0px 16px',
        fontSize: '14px',
        textTransform: 'uppercase',
        '&:hover': {
            color: '#d63939',
            border: '3px solid #d63939',
            backgroundColor: 'transparent',
            cursor: 'pointer',
        },
    },
    demoImages: {
        padding: '24px 0px',
    },
});

const Code = () => {
    const classes = useStyles();
    return (
        <div>
            <h2 className={classes.heading}>Coding Projects</h2>
            <div className={classes.projectDescription}>
                <h2>Flippy</h2>
                <p className={classes.text}>
                    A mobile-friendly web app for flipping through a set of
                    study guide flash cards. Flippy was built with React and is
                    currently deployed on Heroku. This was an app I built to
                    help me study for the US Citizenship exam.
                </p>
                <span className={classes.demoImages}>
                    <img
                        src={mockup2}
                        alt="Flippy iPhone X mockup"
                        width="150px"
                    />
                    <img
                        src={mockup1}
                        alt="Flippy iPhone X mockup"
                        width="150px"
                    />
                </span>
                <br />
                <br />
                <a href="https://flippy-app.herokuapp.com/">
                    <button className={classes.demoCta}>Launch Flippy</button>
                </a>
            </div>
        </div>
    );
};

export default Code;
