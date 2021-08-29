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

/*

 "@media (min-width: 769px)": {}
 "@media (max-width: 768px)": {}
*/
const useStyles = createUseStyles({
  content: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
  },
  main: {
    height: "calc(100% - 50px)",
    paddingTop: "50px",
    display: "flex",
    justifyContent: "center",
    "@media (min-width: 769px)": {
      width: "100%",
      maxWidth: "1000px",
    },
    "@media (max-width: 768px)": {
      width: "100%",
    },
  },
});

const App = () => {
  const classes = useStyles();
  return (
    <div data-testid="app-routes" className={classes.content}>
      <Menu />
      <main className={classes.main}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/work" component={Experience} />
          <Route path="/projects" component={Projects} />
          <Route path="/art" component={Illustrations} />
          <Route path="/resources" component={Misc} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </main>
    </div>
  );
};

export default App;
