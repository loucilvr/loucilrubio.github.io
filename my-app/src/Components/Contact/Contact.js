import React from 'react';
import { createUseStyles } from 'react-jss';
import commonStyles from '../../common/commonStyles';

const useStyles = createUseStyles({
    ...commonStyles,
    text: {
        padding: '24px',
    },
});

const Contact = () => {
    const classes = useStyles();
    return (
        <div>
            <h3 className={classes.heading}>Contact Information</h3>
            <p className={classes.text}>
                I can be reached via LinkedIn at{' '}
                <strong>www.linkedin.com/in/mlcrubio</strong>
            </p>
        </div>
    );
};

export default Contact;
