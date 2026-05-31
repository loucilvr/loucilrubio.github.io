import React from "react";
import { createUseStyles } from "react-jss";
import BodyText from "../../components/Typography/BodyText.js";

const useStyles = createUseStyles((theme) => {
	return {
		pageContainer: {
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			borderBottom: `1px solid ${theme.borderWeakest}`,
			"& h2": {
				paddingBottom: "16px",
				margin: 0,
			},
		},
		demoImages: {
			padding: "24px 0px",
		},
		title: {
			color: theme.textStrongest,
		},
	};
});
const Project = ({ title, description, renderImages, renderFooter }) => {
	const classes = useStyles();
	return (
		<>
			<div className={classes.pageContainer}>
				<h2 className={classes.title}>{title}</h2>
				<BodyText>{description}</BodyText>
				<span className={classes.demoImages}>
					{renderImages && renderImages()}
				</span>
				{renderFooter && renderFooter()}
			</div>
		</>
	);
};

export default Project;
