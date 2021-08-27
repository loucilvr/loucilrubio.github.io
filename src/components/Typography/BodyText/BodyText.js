import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  bodyText: {
    fontSize: "20px",
    color: "#737373",
    margin: 0,
  },
});

const BodyText = ({ children }) => {
  const classes = useStyles();
  return <p className={classes.bodyText}>{children}</p>;
};

export default BodyText;
