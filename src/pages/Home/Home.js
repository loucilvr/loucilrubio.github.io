import React from "react";
import Headshot from "../../assets/img/2021-img.png";
import Linkedin from "../../assets/img/linkedinLogo.png";
import Github from "../../assets/img/githubLogo.png";
import { createUseStyles } from "react-jss";
import PageHeading from "../../components/Typography/PageHeading";

const useStyles = createUseStyles({
  about: {
    fontWeight: 600,
    display: "flex",
    alignItems: "center",
    "@media (max-width: 768px)": {
      flexDirection: "column",
    },
  },
  aboutCopyContainer: {
    "@media (min-width: 769px)": {
      width: "800px",
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
    },
    marginBottom: "32px",
  },
  aboutDetails: {
    fontSize: "22px",
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
    fontSize: "14px",
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
      <div className={classes.aboutCopyContainer}>
        <PageHeading
          title="hi there, I'm Loucil :-)"
          style={{ textAlign: "left" }}
        />
        <p className={classes.aboutDetails}>
          A <strong> UX Engineer</strong> combining her passions for design and
          software development and bridging the gap between product design and
          engineering.
          <br />
          <br />
          I recently joined NinjaRMM where I'm helping to build products that
          help small and large businesses securely and remotely manage their
          devices in one place - allowing them to stay ahead of the game in
          today's rapidly changing work environment.
          <br />
          <br />
          Previously, I worked at J.P. Morgan Chase, where I helped redesign and
          build multiple applications for Pricing, Billing Operations and
          Healthcare Finance services.
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
      <img
        src={Headshot}
        alt="My personal headshot"
        className={classes.headshot}
      />
    </div>
  );
};

export default Home;
