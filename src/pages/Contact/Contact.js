import React from "react";
import { createUseStyles } from "react-jss";
import PageHeading from "../../components/PageHeading";

const useStyles = createUseStyles({
  text: {
    padding: 0,
    margin: "8px 0",
  },
  linkContainer: {
    display: "flex",
    flexDirection: "column",
  },
  links: {
    display: "flex",
    flexDirection: "column",
    paddingTop: "32px",
  },
});

const Contact = () => {
  const classes = useStyles();
  return (
    <div className={classes.linkContainer}>
      <PageHeading title="Contact Information" />
      <div className={classes.links}>
        <p className={classes.text}>
          LinkedIn:{" "}
          <a href="https://www.linkedin.com/in/mlcrubio">
            www.linkedin.com/in/mlcrubio
          </a>
        </p>
        <p className={classes.text}>
          GitHub: <a href="www.github.com/loucilvr">www.github.com/loucilvr</a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
