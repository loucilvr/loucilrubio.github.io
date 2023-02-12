import React from "react";
import { createUseStyles } from "react-jss";
import classnames from "classnames";

const useStyles = createUseStyles(() => {
	const backgroundAndBorderColor = "#242526";

	return {
		root: {
			fontWeight: "bold",
			borderRadius: "24px",
			padding: "0 12px",
			height: "38px",
			fontSize: "14px",
			cursor: "pointer",
			margin: "0px 4px",
		},
		primary: {
			backgroundColor: backgroundAndBorderColor,
			border: "none",
			color: "#ffffff",
			"&:hover": {
				backgroundColor: "#626262",
			},
		},
		secondary: {
			background: "transparent",
			border: `2px solid ${backgroundAndBorderColor}`,
			color: backgroundAndBorderColor,
			"&:hover": {
				backgroundColor: backgroundAndBorderColor,
				color: "#ffffff",
			},
		},
	};
});

const Button = ({ children, handleClick, variant }) => {
	const classes = useStyles();
	return (
		<button
			className={classnames(
				classes.root,
				variant === "primary" ? classes.primary : classes.secondary
			)}
			onClick={handleClick}>
			{children}
		</button>
	);
};

export default Button;
