import React from "react";
import PageHeading from "../../components/PageHeading";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  titleCompanyContainer: {
    "& h3": {
      margin: 0,
      padding: "8px 0",
      display: "inline",
      fontSize: "18px",
    },
  },
  companyInfo: {
    fontWeight: "normal",
  },
  description: {
    margin: 0,
    padding: 0,
    fontSize: "18px",
    paddingTop: "8px",
    paddingBottom: "64px",
    color: "#6b6b6b",
  },
  experienceContent: {
    padding: "32px 16px",
    "& > p": {
      fontSize: "16px",
      color: "#363636",
      textAlign: "left",
      lineHeight: "22px",
    },
  },
});

const Experience = () => {
  const classes = useStyles();
  return (
    <div>
      <PageHeading title="Experience" />
      <div className={classes.experienceContent}>
        <div className={classes.titleCompanyContainer}>
          <h3>UI/UX Designer / Software Engineer</h3>
          <h3 className={classes.companyInfo}>
            &nbsp; | J.P. Morgan Chase, Tampa FL (2016 - Present)
          </h3>
        </div>
        <p className={classes.description}>
          Lead the design of an internal Operations tool and client-facing
          Banking application
          <br />
          Build UI components and fully integrated screens using internal Design
          System & Toolkit
          <br />
          Facilitate user interviews to better understand user goals and current
          pain points
          <br />
          Create low/high-fidelity mockups and gather feedback to validate
          solution
          <br />
          Breakdown stories into minimum viable changes and collaborate with
          other frontend engineers and designers on design and implementation
        </p>
        <div className={classes.titleCompanyContainer}>
          <h3>Software Engineer Intern</h3>
          <h3 className={classes.companyInfo}>
            &nbsp; | Nielsen, Tampa FL (Summer 2015)
          </h3>
        </div>
        <p className={classes.description}>
          Gained experience in Agile Software Development with an international
          team working on a web app for processing TV Set Top Box data; Helped
          kickstart a new Scala Spark project to improve query performance of
          existing application
        </p>
        <div className={classes.titleCompanyContainer}>
          <h3>Data Analyst</h3>
          <h3 className={classes.companyInfo}>
            &nbsp; | FSU Libraries, Tallahassee, FL, (2014-2016)
          </h3>
        </div>
        <p className={classes.description}>
          Designed and built data visualizations; Visualized with Tableau,
          Photoshop, Drupal and coded in SAS to collect, process and analyze
          university data from Library Turnstile Security software
        </p>
      </div>
    </div>
  );
};

export default Experience;
