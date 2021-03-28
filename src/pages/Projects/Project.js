import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  text: {
    fontSize: "16px",
    color: "#363636",
    lineHeight: "22px",
  },
  projectDescription: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "@media (min-width: 769px)": {
      padding: "64px 24px",
    },
    "@media (max-width: 768px)": {
      padding: "64px 24px",
    },
    "& h2": {
      padding: 0,
      margin: 0,
    },
  },
  demoImages: {
    padding: "24px 0px",
  },
  horizRule: {
    backgroundColor: "#dddddd",
    height: "2px",
    marginBottom: "8px",
    width: "100%",
  },
});
const Project = ({ title, description, renderImages, renderFooter }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.projectDescription}>
        <h2>{title}</h2>
        <p className={classes.text}>{description}</p>
        <span className={classes.demoImages}>
          {renderImages && renderImages()}
        </span>
        {renderFooter && renderFooter()}
      </div>
      <div className={classes.horizRule} />
    </>
  );
};

export default Project;
