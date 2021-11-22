import React from "react";
import Headshot from "../../assets/img/2021-headshot.png";
import Linkedin from "../../assets/img/linkedinLogo.png";
import Github from "../../assets/img/githubLogo.png";
import { createUseStyles } from "react-jss";
import PageHeading from "../../components/Typography/PageHeading";

const useStyles = createUseStyles({
  about: {
    fontWeight: 500,
    display: "flex",
    alignItems: "center",
    height: "100%",
    boxSizing: "border-box",
    "@media (max-width: 768px)": {
      alignItems: "center",
      flexDirection: "column",
      padding: "48px 24px 24px 24px",
    },
    "@media (min-width: 769px)": {
      padding: "24px",
      width: "100%",
    },
  },
  aboutCopyContainer: {
    "@media (min-width: 769px)": {
      width: "800px",
      paddingLeft: "42px",
    },
  },
  linkedinLogo: {
    display: "inline",
    width: "17px",
    marginRight: "6px",
  },
  githubLogo: {
    display: "inline",
    width: "18px",
    marginRight: "6px",
  },
  headshot: {
    "@media (min-width: 769px)": {
      width: "40%",
    },
    "@media (max-width: 768px)": {
      width: "60%",
      marginBottom: "32px",
    },
  },
  aboutDetails: {
    "@media (min-width: 769px)": {
      fontSize: "22px",
    },
    "@media (max-width: 768px)": {
      fontSize: "20px",
    },
    color: "#737373",
  },
  divider: {
    width: "1px",
    height: "14px",
    backgroundColor: "#afafaf",
    margin: "0 24px",
  },
  mediaLinks: {
    margin: "46px 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "16px",
    letterSpacing: "1px",
    textDecoration: "none",
    "& > a": {
      textDecoration: "none",
      color: "#b00970",
      "&:hover": {
        textDecoration: "underline",
      },
    },
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <div data-testid="home" className={classes.about}>
      <img
        src={Headshot}
        alt="My personal headshot"
        className={classes.headshot}
      />
      <div className={classes.aboutCopyContainer}>
        <PageHeading title="hi there, I'm Loucil." />
        <p className={classes.aboutDetails}>
          A <strong> UX Engineer</strong> / "design-geneer", illustrator, home
          barista and weekend-baker - combining my love for design and software
          development for the past 6 years.
          <br />
          <br />
          I recently joined NinjaRMM where I'm helping to design and build
          features that help small and large businesses securely and remotely
          manage their devices in one place - allowing them to stay ahead of the
          game in today's rapidly changing work environment and tech ecosystem.
          <br />
          <br />
          Previously, I worked at J.P. Morgan Chase, where I helped redesign and
          build multiple applications for Pricing, Billing Ops and Healthcare
          Finance services.
          <br />
          <br />
          On the weekends, you'll find me spending hours in the kitchen making
          French buttery croissants and pastries from scratch, or on my iPad
          drawing and creating digital illustrations :-)
        </p>
        <section className={classes.mediaLinks}>
          <img
            src={Linkedin}
            alt="LinkedIn company logo"
            className={classes.linkedinLogo}
          />{" "}
          <a
            href="https://www.linkedin.com/in/mlcrubio"
            aria-label="View my LinkedIn Profile"
          >
            LINKEDIN
          </a>
          <div className={classes.divider} />
          <img
            src={Github}
            alt="Github company logo"
            className={classes.githubLogo}
          />{" "}
          <a
            href="https://github.com/loucilvr"
            aria-label="View my GitHub Projects"
          >
            GITHUB
          </a>
        </section>
      </div>
    </div>
  );
};

export default Home;
