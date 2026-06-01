import classNames from "classnames";
import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => {
	const textDefaultStyles = {
		color: theme.textStrong,
		fontWeight: 300,
		lineHeight: 1.6,
		margin: 0,
		marginBottom: "8px",
	};
	return {
		bodyTextXXS: {
			...textDefaultStyles,
			fontSize: "12px",
		},
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

	const styles = {
		xxs: classes.bodyTextXXS,
		xs: classes.bodyTextXS,
		s: classes.bodyTextS,
		m: classes.bodyTextM,
	};

	return (
		<p
			className={classNames(
				size ? styles[size] : classes.bodyTextS,
				bold && classes.bold
			)}>
			{children}
		</p>
	);
};

export default BodyText;
