import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getSelectedContent, setView } from './Menu.ducks';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';

const useStyles = createUseStyles({
    selected: {
        fontWeight: 'bold !important',
        color: '#FFFFFF',
    },
    menu: {
        height: '100%',
        overflow: 'hidden',
        zIndex: 2,
        '@media (max-width: 768px)': {
            display: 'flex',
            flexDirection: 'column',
            padding: '24px',
            fontSize: '18px',
            width: '100%',
            height: '300px',
            backgroundImage:
                '-webkit-linear-gradient(100deg, transparent 34.5%, #cc4558 35%, #9e216e 95%)',
            position: 'fixed',
            overflow: 'hidden',
            '& > a': {
                color: '#F4F4F4',
                margin: '8px',
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
                letterSpacing: '1px',
                fontWeight: '100',
                textDecoration: 'none',
                margin: '8px',
            },
        },
    },
    hideMenu: {
        top: '-300px',
    },
    showMenu: {
        '@media (max-width: 768px)': {
            top: 0,
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
    const browserWidth = document.body.clientWidth;
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
    const [showMenu, setShowMenu] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (browserWidth <= 768) {
                const currentScrollPos = window.pageYOffset;
                const showMenu =
                    currentScrollPos < 200 ||
                    (prevScrollPos > currentScrollPos &&
                        currentScrollPos <= 500);
                setShowMenu(showMenu);
                setPrevScrollPos(currentScrollPos);
            }
        };
        if (browserWidth <= 768) {
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }
    }, [browserWidth, prevScrollPos]);
    return (
        <nav
            className={classnames(
                classes.menu,
                showMenu ? classes.showMenu : classes.hideMenu
            )}
        >
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
