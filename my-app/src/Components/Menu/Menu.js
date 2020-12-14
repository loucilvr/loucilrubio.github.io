import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import './Menu.css';
import { getSelectedContent, setView } from './Menu.ducks';
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';

const useStyles = createUseStyles({
    selected: {
        fontWeight: 'bold'
    },
    menuContainer: {
        height: '100%',
		float: 'left',
		overflow: 'hidden',
        zIndex: 2,
        '@media (max-width: 768px)': {
            width: '100%',
            height: '300px',
            backgroundImage: '-webkit-linear-gradient(100deg, transparent 34.5%, #d63939 35%, #ff975e 95%)',
            position: 'fixed',
            overflow: 'hidden'
        }
    }
});

const menuLinks = [{
    label: 'HOME',
    path: '/'
 }, {
     label: 'CODE',
     path: '/code'
 },{
     label: 'DESIGN',
     path: '/design'
  },  {
      label: 'ILLUSTRATIONS',
      path: '/illustrations'
  }, {
      label: 'MISC',
      path: '/misc'
  }
];

const Menu = ({ selectedContent, setView }) => {
    const classes = useStyles();
    const isSelected = label => label === selectedContent && classes.selected;

    return (
        <div className={classes.menuContainer}>
            <nav className="menu">
                { menuLinks.map(ml => 
                    <Link
                     to={ml.path}
                     onClick={e => setView(ml.label)}
                     className={classNames('menuLink', isSelected(ml.label))}>
                        {ml.label}
                    </Link>
                    )
                }
            </nav>
        </div>
    )
};

const mapStateToProps = state => ({
    selectedContent: getSelectedContent(state)
});

const mapDispatchToProps = {
    setView
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
