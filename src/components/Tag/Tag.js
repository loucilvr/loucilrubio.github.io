import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
	tag: {
		borderRadius: "4px",
		padding: "3px 8px",
		fontSize: "16px",
		margin: "6px",
		backgroundColor: "#f3f3f3",
		color: "#646464",
		display: "flex",
		alignItems: "center",
	},
});

const Tag = ({ label }) => {
	const classes = useStyles();
	return <div className={classes.tag}>{label}</div>;
};

export default Tag;
