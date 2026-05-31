import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./components/Menu/Menu";
import { createUseStyles, ThemeProvider } from "react-jss";
import Experience from "./pages/Work";
import { MAX_WIDTH, Theme } from "./theme";

const useStyles = createUseStyles((theme) => {
	return {
		appContainer: {
			width: "100%",
			height: "100%",
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
		},
		main: {
			backgroundColor: theme.backgroundColor,
			overflow: "auto",
			width: "100%",
			height: "100%",
			display: "flex",
			justifyContent: "center",
		},
		mainContent: {
			display: "flex",
			width: "100%",
			"@media (min-width: 769px)": {
				padding: "40px 24px 24px 24px",
				maxWidth: MAX_WIDTH,
				transition: "all 0.5s ease-out",
				transitionDuration: "1s",
			},
			height: "min-content",
		},
		testInput: {
			height: "32px",
			width: "200px",
			marginRight: "8px",
		},
	};
});

const getTheme = () => localStorage.getItem("theme") ?? "light";

const Main = () => {
	const classes = useStyles();
	return (
		<main className={classes.main}>
			<div className={classes.mainContent}>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/work" component={Experience} />
					<Route path="/about" component={About} />
				</Switch>
			</div>
		</main>
	);
};
const App = () => {
	const [theme, setTheme] = useState(getTheme());

	const handleThemeChange = () => {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
		localStorage.setItem("theme", newTheme);
	};
	const classes = useStyles();
	return (
		<ThemeProvider theme={Theme(theme)}>
			<div data-testid="app-routes" className={classes.appContainer}>
				<Menu currentTheme={theme} handleThemeChange={handleThemeChange} />
				<Main />
			</div>
		</ThemeProvider>
	);
};

export default App;
