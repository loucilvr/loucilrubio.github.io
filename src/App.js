import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Illustrations from "./pages/Art/Art";
import Misc from "./pages/Misc/Misc";
import Menu from "./components/Menu/Menu";
import Contact from "./pages/Contact/Contact";
import { createUseStyles } from "react-jss";
import Experience from "./pages/Experience/Experience";

const useStyles = createUseStyles({
  content: {
    "@media (min-width: 769px)": {
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "space-between",
    },
    "@media (max-width: 768px)": {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },
  },
  navContainer: {
    "@media (min-width: 769px)": {
      width: "30%",
      display: "flex",
      flexDirection: "row-reverse",
    },
  },
  mainContent: {
    "@media (min-width: 769px)": {
      display: "flex",
      width: "70%",
      paddingTop: "200px",
      paddingLeft: "120px",
      overflow: "auto",
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
  children: {
    "@media (min-width: 769px)": {
      width: "800px",
    },
    height: "100%",
    display: "flex",
    justifyContent: "center",
  },
});

const App = () => {
  const classes = useStyles();
  return (
    <Switch>
      <div data-testid="app-routes" className={classes.content}>
        <div className={classes.navContainer}>
          <Menu />
        </div>
        <main className={classes.mainContent}>
          <div className={classes.children}>
            <Route exact path="/" component={Home} />
            <Route path="/experience" component={Experience} />
            <Route path="/projects" component={Projects} />
            <Route path="/art" component={Illustrations} />
            <Route path="/misc" component={Misc} />
            <Route path="/contact" component={Contact} />
          </div>
        </main>
      </div>
    </Switch>
  );
};

export default App;
