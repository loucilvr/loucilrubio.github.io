import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  bodyText: {
    fontSize: "16px",
    color: "#363636",
    lineHeight: "22px",
  },
});

const BodyText = ({ children }) => {
  const classes = useStyles();
  return <p className={classes.bodyText}>{children}</p>;
};

export default BodyText;
