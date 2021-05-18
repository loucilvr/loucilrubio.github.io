import React from "react";
import PageHeading from "../../components/Typography/PageHeading";
import { createUseStyles } from "react-jss";
import BodyText from "../../components/Typography/BodyText";

const useStyles = createUseStyles({
  titleCompanyContainer: {
    "& h2": {
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
    padding: "32px",
  },
  experience: {
    paddingBottom: "64px",
  },
  timeline: {
    padding: "8px 0",
    margin: 0,
    color: "#989898",
  },
});

const Experience = () => {
  const classes = useStyles();
  return (
    <div className={classes.experienceContainer}>
      <PageHeading title="Experience" />
      <div className={classes.experienceContent}>
        <div className={classes.experience}>
          <div className={classes.titleCompanyContainer}>
            <h2>UX Engineer</h2>
            <h2 className={classes.companyInfo}>
              &nbsp; | J.P. Morgan Chase, Tampa FL (2016-Present)
            </h2>
          </div>
          <br />
          <p className={classes.timeline}>2019-Present: Healthcare Payments</p>
          <BodyText>
            Designed and built (and recently launched) a new client-facing
            Healthcare Payments application alongside a new internal Operations
            tool to modernize and streamline the Healthcare remittance and
            payment posting experience
            <br />
            <br />
            Responsibilities: UI Development, UX/UI Design Lead, User Interviews
            & Research, API Development, Business Analysis
          </BodyText>
          <br />
          <p className={classes.timeline}>2018-2019: Billing Ops</p>
          <BodyText>
            Co-designed and developed a new internal Operations tool that allows
            Ops to monitor and action incoming volume of billing data
          </BodyText>
          <br />
          <p className={classes.timeline}>2016-2018: Pricing Tech</p>
          <BodyText>
            Developed features for an internal Pricing web application used by
            Sales to manage deals with small and large corporations
          </BodyText>
        </div>
        <div className={classes.experience}>
          <div className={classes.titleCompanyContainer}>
            <h2>Software Engineer Intern</h2>
            <h2 className={classes.companyInfo}>
              &nbsp; | Nielsen, Tampa FL (Summer 2015)
            </h2>
          </div>
          <br />
          <BodyText>
            Gained experience in Agile Software Development with an
            international team working on a web app for processing TV Set Top
            Box data; Helped kickstart a new Scala Spark project to improve
            query performance of existing application
          </BodyText>
        </div>
        <div className={classes.experience}>
          <div className={classes.titleCompanyContainer}>
            <h2>Data Analyst</h2>
            <h2 className={classes.companyInfo}>
              &nbsp; | FSU Libraries, Tallahassee, FL (2014-2016)
            </h2>
          </div>
          <br />
          <BodyText>
            Developed a SAS Program to collect, transform and analyze library
            usage data to better understand library traffic and services’
            performance; Crafted Data Visualizations/Dashboards on Tableau and
            published findings Drupal pages to tell a story on where students
            gravitate to on campus based on semester/time
          </BodyText>
        </div>
      </div>
    </div>
  );
};

export default Experience;
