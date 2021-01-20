import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getSelectedContent, setView } from './Menu.ducks';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    selected: {
        fontWeight: 'bold !important',
    },
    menu: {
        height: '100%',
        overflow: 'hidden',
        zIndex: 2,
        '@media (max-width: 768px)': {
            display: 'flex',
            flexDirection: 'column',
            padding: '24px',
            fontSize: '22px',
            width: '100%',
            height: '300px',
            backgroundImage:
                '-webkit-linear-gradient(100deg, transparent 34.5%, #cc4558 35%, #9e216e 95%)',
            position: 'fixed',
            overflow: 'hidden',
            '& > a': {
                color: '#ffffff',
                margin: '6px',
                letterSpacing: '1px',
                textDecoration: 'none',
                fontWeight: '100',
            },
        },
        '@media (min-width: 769px)': {
            display: 'flex',
            flexDirection: 'column',
            padding: '24px',
            marginTop: '100px',
            position: 'fixed',
            '& > a': {
                fontSize: '24px',
                color: '#464646',
                fontSize: '24px',
                letterSpacing: '1px',
                fontWeight: '100',
                textDecoration: 'none',
                margin: '8px',
            },
        },
    },
});

const menuLinks = [
    {
        label: 'HOME',
        path: '/',
    },
    {
        label: 'CODE',
        path: '/code',
    },
    {
        label: 'DESIGN',
        path: '/design',
    },
    {
        label: 'ILLUSTRATIONS',
        path: '/illustrations',
    },
    {
        label: 'MISC',
        path: '/misc',
    },
    {
        label: 'CONTACT',
        path: '/contact',
    },
];

const Menu = ({ selectedContent, setView }) => {
    const classes = useStyles();
    const isSelected = (label) => label === selectedContent && classes.selected;

    return (
        <nav className={classes.menu}>
            {menuLinks.map((ml) => (
                <Link
                    to={ml.path}
                    onClick={(e) => setView(ml.label)}
                    className={isSelected(ml.label)}
                >
                    {ml.label}
                </Link>
            ))}
        </nav>
    );
};

const mapStateToProps = (state) => ({
    selectedContent: getSelectedContent(state),
});

const mapDispatchToProps = {
    setView,
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
