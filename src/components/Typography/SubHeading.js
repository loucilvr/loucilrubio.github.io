import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => {
	return {
		heading2: {
			color: theme.textStrongest,
			fontWeight: 400,
			paddingBottom: "24px",
			fontSize: "32px",
			margin: 0,
			padding: 0,
		},
		heading3: {
			color: theme.textStrongest,
			fontWeight: 400,
			paddingBottom: "16px",
			fontSize: "24px",
			margin: 0,
			padding: 0,
		},
	};
});

const SubHeading = ({ title, level, ...rest }) => {
	const classes = useStyles();
	return level === 2 ? (
		<h2 className={classes.heading2} {...rest}>
			{title}
		</h2>
	) : (
		<h3 className={classes.heading3} {...rest}>
			{title}
		</h3>
	);
};

export default SubHeading;
