import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  heading: {
    background: "linear-gradient(130deg, #ff7c00 0%, #e93750 30%, #b00970 60%)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
    fontWeight: 700,
    paddingBottom: "10px",
    textAlign: "center",
    fontSize: "32px",
    margin: 0,
    padding: 0,
    "@media (min-width: 769px)": {
      fontSize: "50px",
    },
  },
});

const PageHeading = ({ title, ...rest }) => {
  const classes = useStyles();
  return <h1 className={classes.heading} {...rest}>{title}</h1>;
};

export default PageHeading;
