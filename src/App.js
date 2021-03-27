import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Illustrations from "./pages/Illustrations/Illustrations";
import Misc from "./pages/Misc/Misc";
import Menu from "./components/Menu/Menu";
import Contact from "./pages/Contact/Contact";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  content: {
    "@media (min-width: 769px)": {
      maxWidth: "1080px",
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      padding: "100px 0px",
    },
    "@media (max-width: 768px)": {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },
  },
  mainContent: {
    "@media (min-width: 769px)": {
      display: "flex",
      alignItems: "center",
      width: "900px",
      height: "100%",
      padding: "120px 24px 24px 320px",
    },
    "@media (max-width: 768px)": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
      paddingTop: "340px",
      paddingBottom: "64px",
    },
  },
});

const App = () => {
  const classes = useStyles();
  return (
    <Switch>
      <div className={classes.content}>
        <Menu />
        <main className={classes.mainContent}>
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/illustrations" component={Illustrations} />
          <Route path="/misc" component={Misc} />
          <Route path="/contact" component={Contact} />
        </main>
      </div>
    </Switch>
  );
};

export default App;
