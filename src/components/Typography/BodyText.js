import classNames from "classnames";
import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => {
	const textDefaultStyles = {
		color: theme.textStrong,
		fontWeight: 300,
		lineHeight: 1.6,
		margin: 0,
	};
	return {
		bodyTextXS: {
			...textDefaultStyles,
			fontSize: "14px",
		},
		bodyTextS: {
			...textDefaultStyles,
			fontSize: "16px",
		},
		bodyTextM: {
			...textDefaultStyles,
			fontSize: "18px",
		},
		bold: {
			fontWeight: 500,
		},
	};
});

const BodyText = ({ children, size, bold }) => {
	const classes = useStyles();
	return (
		<p
			className={classNames(
				size === "xs" ? classes.bodyTextXS : classes.bodyTextS,
				bold && classes.bold
			)}>
			{children}
		</p>
	);
};

export default BodyText;
