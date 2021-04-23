import React from "react";
import mockup1 from "../../assets/img/flippy-iphonex-mockup-1.png";
import mockup2 from "../../assets/img/flippy-iphonex-mockup-2.png";
import FlippyWeb from "../../assets/img/flippy-web.png";
import wireframePreview from "../../assets/img/wireframe_preview.png";
import portfolioIphone678 from "../../assets/img/iphone678.png";
import portfolioIphoneXXS from "../../assets/img/iphonex-xs.png";
import portfolioIpad from "../../assets/img/ipad.png";
import portfolioWeb from "../../assets/img/web.png";
import { createUseStyles } from "react-jss";
import Project from "./Project";
import ImageWrapper from "./ImageWrapper";
import Button from "../../components/Button";
import PageHeading from "../../components/PageHeading";

const useStyles = createUseStyles({
  invisionProj: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "& > p": {
      color: "#9F9F9F",
    },
  },
  flippyImages: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  projects: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  other: {
    textAlign: "center",
  },
  images: {
    display: "flex",
    justifyContent: "center",
    "@media (min-width: 769px)": {
      flexDirection: "row",
    },
    "@media (max-width: 768px)": {
      flexDirection: "column",
    },
  },
  appLink: {
    marginTop: "24px",
  },
  desc: {
    margin: 0,
    padding: "16px 8px",
  },
  link: {
    textDecoration: "none",
    color: "#b00970",
    "&:hover": {
      textDecoration: "underline",
    },
  },
});

const Projects = () => {
  const classes = useStyles();
  return (
    <div className={classes.projects}>
      <PageHeading title="Side Projects" />
      <Project
        title="Flippy"
        description="A mobile-friendly web app for flipping through a set of study guide
          flash cards. Flippy was built with React and deployed on
          Heroku. This was an app I built to help myself and others study for
          the US Citizenship exam."
        renderImages={() => (
          <div className={classes.flippyImages}>
            <div>
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
            </div>
            <img
              src={FlippyWeb}
              alt="Flippy iPhone X mockup flash card view"
              width="320px"
            />
          </div>
        )}
        renderFooter={() => (
          <div className={classes.appLink}>
            <Button
              handleClick={() =>
                window &&
                window.open("https://flippy-app.herokuapp.com/home", "_blank")
              }
              label="Launch Flippy"
            />
          </div>
        )}
      />
      <Project
        title="Food Journal"
        description=" A mobile app that aims to help people keep track of their daily
      food habits and help better understand/build their own personal relationship
      with food."
        renderImages={() => (
          <div className={classes.invisionProj}>
            <img
              src={wireframePreview}
              alt="Food Journal UX Design Preview"
              width="320"
            />
            <p>
              (Mobile App in Progress &nbsp;|&nbsp; Invision Prototype link
              available)
            </p>
          </div>
        )}
      />
      <Project
        title="Personal Site"
        description="I've redesigned and rebuilt this site throughout the duration of my college and professional career, and is something that acts my sandbox for frontend development.
        This portoflio was built in React, HTML/CSS and is available on GitHub."
        renderFooter={() => (
          <a className={classes.link} href="https://github.com/loucilvr">
            View my GitHub Profile
          </a>
        )}
      />
      <p className={classes.other}>Other Projects available on Invision :-)</p>
    </div>
  );
};

export default Projects;
