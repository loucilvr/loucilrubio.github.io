import React from "react";
import Headshot from "../../assets/img/2016spring_headshot.png";
import Linkedin from "../../assets/img/linkedinLogo.png";
import Github from "../../assets/img/githubLogo.png";
import { createUseStyles } from "react-jss";
import PageHeading from "../../components/Typography/PageHeading";
import BodyText from "../../components/Typography/BodyText";

const useStyles = createUseStyles({
  about: {
    fontFamily: "sans-serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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
    width: "30%",
    borderRadius: "50%",
    marginBottom: "32px",
  },
  aboutDetails: {
    textAlign: "left",
    padding: "0 42px",
  },
  divider: {
    width: "1px",
    height: "14px",
    backgroundColor: "#afafaf",
    margin: "0 24px",
  },
  mediaLinks: {
    marginTop: "46px",
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
    <div className={classes.about}>
      <img
        src={Headshot}
        alt="My personal headshot"
        className={classes.headshot}
      />
      <div>
        <PageHeading title="hi there, I'm Loucil :-)" />
        <section className={classes.aboutDetails}>
          <BodyText>
            I'm a <strong> UX Engineer</strong> with a love for user research,
            design and software development. I'm currently designing, building
            and deploying web applications at J.P. Morgan Chase, located in
            Tampa, FL.
            <br />
            <br />
            As a UX Engineer, I'm able to combine my passions for UI/UX design
            and front-end development. Being in this hybrid role means that on
            some days, I'm interviewing users to understand pain points,
            visualizing flows, creating low/high-fidelity designs on
            Sketch/Invision and gathering feedback from Product, designers,
            engineers and our users. And on other days, I'm building UI
            components in React, integrating screens with API services and
            mentoring/collaborating with other engineers to implement, test,
            debug and deploy our solutions.
            <br />
            <br />
            Outside of work, I'm usually baking, drawing/painting, playing with
            my dog, designing/building a prototype or practicing latte art!
            According to Myers Briggs, I'm an ISFP (shocker). I built this
            portfolio to share some of my interests and showcase things I've
            created outside of work for fun.
          </BodyText>
        </section>
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
