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
    padding: "46px 32px",
  },
  experience: {
    marginBottom: "48px",
    borderBottom: "1px solid #DDDDDD",
    paddingBottom: "48px",
  },
  timeline: {
    padding: "8px 0",
    margin: 0,
    color: "#989898",
    fontSize: "18px",
  },
  experienceContainer: {
    paddingTop: "80px",
    "@media (min-width: 769px)": {
      width: "70%",
    },
  },
});

const Experience = () => {
  const classes = useStyles();
  return (
    <div data-testid="experience" className={classes.experienceContainer}>
      <PageHeading title="Experience" />
      <div className={classes.experienceContent}>
        <div className={classes.experience}>
          <div className={classes.titleCompanyContainer}>
            <h2 className={classes.companyInfo}>
              <strong>UI/UX Software Engineer</strong> | NinjaRMM (June
              2021-Present)
            </h2>
          </div>
        </div>
        <div className={classes.experience}>
          <div className={classes.titleCompanyContainer}>
            <h2 className={classes.companyInfo}>
              <strong>UI/UX Software Engineer</strong> | J.P. Morgan Chase,
              Tampa FL (2016-2021)
            </h2>
          </div>
          <br />
          <p className={classes.timeline}>
            2019-2021: Healthcare Payments | Senior Associate
          </p>
          <BodyText>
            Designed and built a new client-facing Healthcare Payments
            application alongside a new internal Operations tool to modernize
            and streamline the Healthcare remittance and payment posting
            experience
          </BodyText>
          <br />
          <p className={classes.timeline}>2018-2019: Billing Ops | Associate</p>
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
          <br />
          <br />
          <BodyText>
            Responsibilities: UX/UI Design Lead, User Interviews & Research,
            Lo/Hi Fidelity Mockups (Sketch/Invision, Figma), Prototypes, Journey
            Maps, Frontend Development, API Development, Project Planning,
            Business Analysis
          </BodyText>
        </div>
        <div className={classes.experience}>
          <div className={classes.titleCompanyContainer}>
            <h2 className={classes.companyInfo}>
              <strong>Data Analyst</strong> | FSU Libraries, Tallahassee, FL
              (2014-2016)
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
        <div className={classes.experience}>
          <div className={classes.titleCompanyContainer}>
            <h2 className={classes.companyInfo}>
              <strong>Software Engineer Intern</strong> | Nielsen, Tampa FL
              (Summer 2015)
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
      </div>
    </div>
  );
};

export default Experience;
