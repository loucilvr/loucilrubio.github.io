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
		width: "100%",
		height: "100%",
		overflow: "hidden",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	main: {
		overflow: "auto",
		width: "100%",
		display: "flex",
		justifyContent: "center",
	},
	scrollingBody: {
		display: "flex",
		justifyContent: "center",
		width: "100%",
		height: "calc(100vh - 50px)",
		"@media (min-width: 769px)": {
			maxWidth: "1100px",
		},
	},
});

const App = () => {
	const classes = useStyles();
	return (
		<>
			<div data-testid="app-routes" className={classes.content}>
				<Menu />
				<main className={classes.main}>
					<div className={classes.scrollingBody}>
						<Switch>
							<Route exact path="/" component={Home} />
							<Route path="/work" component={Experience} />
							<Route path="/projects" component={Projects} />
							<Route path="/art" component={Illustrations} />
							<Route path="/resources" component={Misc} />
							<Route path="/contact" component={Contact} />
						</Switch>
					</div>
				</main>
			</div>
		</>
	);
};

export default App;
