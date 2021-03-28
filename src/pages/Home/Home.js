import React from "react";
import Headshot from "../../assets/img/2016spring_headshot.png";
import { createUseStyles } from "react-jss";
import PageHeading from "../../components/PageHeading";

const useStyles = createUseStyles({
  about: {
    fontFamily: "sans-serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  headshot: {
    width: "30%",
    borderRadius: "50%",
    marginBottom: "32px",
  },
  aboutDetails: {
    fontSize: "16px",
    color: "#363636",
    textAlign: "left",
    padding: "0 42px",
    lineHeight: "22px",
  },
  mediaLinks: {
    marginTop: "46px",
    textAlign: "center",
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
        alt="Personal Headshot"
        className={classes.headshot}
      />
      <div>
        <PageHeading title="hi there, I'm Loucil :-)" />
        <section className={classes.aboutDetails}>
          <p>
            {" "}
            I'm a <strong> UX Engineer</strong> obsessed with understanding and
            solving users’ problems through design, user research and software
            development. I'm currently designing, building and deploying
            software at J.P. Morgan Chase, located in Tampa, FL.
            <br />
            <br />I consider myself 45% developer, 45% designer and 10%
            caffeine. On some days, I'm working on high-fidelity designs on
            Sketch/Invision for our client-facing and internal applications, and
            on other days, you'll find me building UI components in React,
            integrating with APIs, and shipping full features into Production...
            all while being overly caffeinated from making lattes during my
            breaks.
            <br />
            <br />I built this portfolio to share some of my interests and
            showcase things I've created outside of work for fun.
          </p>
        </section>
        <section className={classes.mediaLinks}>
          <a href="https://www.linkedin.com/in/mlcrubio">LINKEDIN</a>
          &nbsp;| &nbsp;
          <a href="https://github.com/loucilvr">GITHUB</a>
        </section>
      </div>
    </div>
  );
};

export default Home;
