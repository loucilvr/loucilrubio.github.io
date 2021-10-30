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
            Senior Associate UI/UX Software Engineer (2019-2021)
          </p>
          <BodyText>
            Led the design for two new Healthcare payments web applications to
            modernize and streamline the remittance and payment posting
            experience
            <br />
            <br />
            Redesigned and developed new features that previously caused many
            pain points for existing users
            <br />
            <br />
            Interviewed both internal and external users to identify current
            workflow pain points and to understand user needs and opportunities
            <br />
            <br />
            Developed features for our frontend as well as our backend services
            to support the UI
            <br />
            <br />
            Mentored junior engineers in frontend design, development and
            product collaboration
          </BodyText>

          <br />
          <p className={classes.timeline}>
            Associate UI Software Engineer (2018-2019)
          </p>
          <BodyText>
            Co-designed and developed a new modernized and streamlined Billing
            Operations tool to support our Operations Team's daily monitoring
            and resolution tasks
          </BodyText>
          <br />
          <p className={classes.timeline}>Software Engineer (2016-2018)</p>
          <BodyText>
            Developed frontend/backend features for an internal Pricing web
            application to support internal users
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
