import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => {
	return {
		heading: {
			color: theme.textStrongest,
			fontWeight: 400,
			paddingBottom: "24px",
			fontSize: "40px",
			margin: 0,
			padding: 0,
			"@media (min-width: 769px)": {
				fontSize: "52px",
				transition: "all 0.5s ease-out",
			},
		},
	};
});

const PageHeading = ({ title, ...rest }) => {
	const classes = useStyles();
	return (
		<h1 className={classes.heading} {...rest}>
			{title}
		</h1>
	);
};

export default PageHeading;
