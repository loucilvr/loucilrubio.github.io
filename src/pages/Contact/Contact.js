import React from "react";
import { createUseStyles } from "react-jss";
import PageHeading from "../../components/Typography/PageHeading";

const useStyles = createUseStyles({
  text: {
    padding: 0,
    margin: "8px 0",
    "& > a": {
      color: "#464646",
      "&:hover": {
        fontWeight: "bold",
      },
    },
  },
  linkContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  links: {
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
          <a
            href="https://www.linkedin.com/in/mlcrubio"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.linkedin.com/in/mlcrubio
          </a>
        </p>
        <p className={classes.text}>
          GitHub:{" "}
          <a
            href="https://www.github.com/loucilvr"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.github.com/loucilvr
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
