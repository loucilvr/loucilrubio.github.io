import React from 'react';
import { createUseStyles } from 'react-jss';
import commonStyles from '../../common/commonStyles';

const useStyles = createUseStyles({
    ...commonStyles
});

const Design = ()=> {
    const classes = useStyles();
    return (
    <div className="details content">
        <h3 className={classes.heading}>Design Projects</h3>
        <p>Coming Soon</p>
    </div>
)};

export default Design;