import React from "react";
import mockup1 from "../../assets/img/flippy-iphonex-mockup-1.png";
import mockup2 from "../../assets/img/flippy-iphonex-mockup-2.png";
import wireframePreview from "../../assets/img/wireframe_preview.png";
import { createUseStyles } from "react-jss";
import commonStyles from "../../common/commonStyles";
import Project from "./Project";

const useStyles = createUseStyles({
  ...commonStyles,
  demoCta: {
    backgroundColor: "#d63939",
    border: "none",
    color: "#ffffff",
    fontWeight: "bold",
    borderRadius: "34px",
    height: "30px",
    padding: "0px 16px",
    fontSize: "14px",
    textTransform: "uppercase",
    "&:hover": {
      color: "#d63939",
      border: "3px solid #d63939",
      backgroundColor: "transparent",
      cursor: "pointer",
    },
  },
  invisionProj: {
    textAlign: "center",
    "& > p": {
      color: "#9F9F9F",
    },
  },
});

const Projects = () => {
  const classes = useStyles();
  return (
    <div>
      <h2 className={classes.heading}>Projects</h2>
      <Project
        title="Flippy"
        description="A mobile-friendly web app for flipping through a set of study guide
          flash cards. Flippy was built with React and is currently deployed on
          Heroku. This was an app I built to help myself and others study for
          the US Citizenship exam."
        renderImages={() => (
          <>
            <img
              src={mockup2}
              alt="Flippy iPhone X mockup landing page"
              width="150px"
            />
            <img
              src={mockup1}
              alt="Flippy iPhone X mockup flash card view"
              width="150px"
            />
          </>
        )}
        renderFooter={() => (
          <>
            <br />
            <br />
            <a href="https://flippy-app.herokuapp.com/">
              <button className={classes.demoCta}>Launch Flippy</button>
            </a>
          </>
        )}
      />
      <Project
        title="Food Journal"
        description=" A native mobile app that aims to help people keep track of their daily
      food habits and help better understand their own personal relationship
      with food."
        renderImages={() => (
          <div className={classes.invisionProj}>
            <img src={wireframePreview} alt="Wireframe Preview" width="400" />
            <p>
              (Mobile App in Progress &nbsp;|&nbsp; Invision Prototype link
              available)
            </p>
          </div>
        )}
      />
    </div>
  );
};

export default Projects;
