import React from "react";
import mockup1 from "../../assets/img/flippy-iphonex-mockup-1.png";
import mockup2 from "../../assets/img/flippy-iphonex-mockup-2.png";
import FlippyWeb from "../../assets/img/flippy-web.png";
import giPreview from "../../assets/img/gutInstincts.png";
import { createUseStyles } from "react-jss";
import Project from "./Project";
import Button from "../../components/Button";
import PageHeading from "../../components/Typography/PageHeading";
import gutinstincts from "../../assets/img/gutinstincts_designs.png";

const useStyles = createUseStyles({
  invisionProj: {
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
    paddingTop: "80px",
    "@media (min-width: 769px)": {
      width: "80%",
    },
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
  projectImage: {
    width: "100%",
    maxWidth: "420px",
  },
});

const Projects = () => {
  const classes = useStyles();
  return (
    <div data-testid="side-projects" className={classes.projects}>
      <PageHeading title="Side Projects" />
      <Project
        title="Flippy"
        description={`A web app for flipping through a set of flash cards. Originally built to help study for the US Citizenship Exam.
        Designed and built in React and deployed on Heroku.`}
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
              className={classes.projectImage}
            />
          </div>
        )}
        renderFooter={() => (
          <div>
            <Button
              variant="primary"
              handleClick={() =>
                window &&
                window.open("https://flippy-app.herokuapp.com/home", "_blank")
              }
            >
              Launch Flippy
            </Button>
            <Button
              variant="secondary"
              handleClick={() =>
                window &&
                window.open("https://github.com/loucilvr/Flippy", "_blank")
              }
            >
              View Source Code
            </Button>
          </div>
        )}
      />
      <Project
        title="Food Journal"
        description="A mobile app to capture daily meals and symptoms to help people
          better understand their personal relationship with food."
        renderImages={() => (
          <div className={classes.invisionProj}>
            <img
              src={giPreview}
              alt="Food Journal mobile app design preview"
              className={classes.projectImage}
            />
            <img
              src={gutinstincts}
              alt="Food Journal mobile app design preview"
              className={classes.projectImage}
            />
          </div>
        )}
      />
      <Project
        title="Personal Site"
        description="Built in React/CRA, Redux, JS/HTML/CSS. Currently hosted via GH Pages."
        renderFooter={() => (
          <div>
            <Button
              variant="primary"
              handleClick={() =>
                window && window.open("https://github.com/loucilvr", "_blank")
              }
            >
              View GitHub Profile
            </Button>
            <Button
              variant="secondary"
              handleClick={() =>
                window &&
                window.open(
                  "https://github.com/loucilvr/loucilrubio.github.io",
                  "_blank"
                )
              }
            >
              View Source Code
            </Button>
          </div>
        )}
      />
    </div>
  );
};

export default Projects;
