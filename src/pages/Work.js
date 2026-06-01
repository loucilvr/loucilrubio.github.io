import React from "react";
import { createUseStyles } from "react-jss";
import BodyText from "../components/Typography/BodyText.js";
import SubHeading from "../components/Typography/SubHeading.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const useStyles = createUseStyles((theme) => {
	return {
		pageContainer: {
			padding: "32px 24px 32px 24px",
		},
		titleCompanyContainer: {
			"& h2": {
				margin: 0,
				padding: "8px 0",
				display: "inline",
				fontSize: "22px",
			},
		},
		projects: {
			display: "flex",
			flexDirection: "column",
			gap: "24px",
		},
		card: {
			color: theme.textStrong,
			border: `1px solid ${theme.borderWeakest}`,
			borderRadius: "4px",
			padding: "24px",
			"&:hover": {
				backgroundColor: theme.buttonNavHover,
			},
		},
		link: {
			color: theme.textStrong,
		},
		external: {
			backgroundColor: "none",
			color: theme.textStrong,
		},
		title: {
			display: "flex",
			justifyContent: "space-between",
			"&:hover": {
				textDecoration: "underline",
			},
		},
		icon: {
			color: theme.textWeak,
		},
	};
});

const Experience = () => {
	const classes = useStyles();
	return (
		<div data-testid="experience" className={classes.pageContainer}>
			<SubHeading level={2} title="Work" />
			<div className={classes.projects}>
				<a
					className={classes.link}
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.ninjaone.com/rmm/it-automation/">
					<div className={classes.card}>
						<div className={classes.title}>
							<SubHeading level={3} title="IT Automations" />
							<FontAwesomeIcon
								className={classes.icon}
								icon={faArrowUpRightFromSquare}
								fontSize="18px"
							/>
						</div>
						<BodyText>Scaling IT Operations with Automation</BodyText>
					</div>
				</a>
				<a
					className={classes.link}
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.ninjaone.com/endpoint-management/">
					<div className={classes.card}>
						<div className={classes.title}>
							<SubHeading level={3} title="NinjaOne Endpoint Management" />
							<FontAwesomeIcon
								className={classes.icon}
								icon={faArrowUpRightFromSquare}
								fontSize="18px"
							/>
						</div>
						<BodyText>Endpoint management that unifies IT</BodyText>
					</div>
				</a>
				<a
					className={classes.link}
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.ninjaone.com/remote/">
					<div className={classes.card}>
						<div className={classes.title}>
							<SubHeading level={3} title="NinjaOne Remote Access" />
							<FontAwesomeIcon
								className={classes.icon}
								icon={faArrowUpRightFromSquare}
								fontSize="18px"
							/>
						</div>
						<BodyText>
							Direct remote access to every endpoint One click. Any endpoint.
							All on NinjaOne.
						</BodyText>
					</div>
				</a>
				<a
					className={classes.link}
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.figma.com/design/nwHMLklR57QZthEV11aN7v/Test?node-id=1-2&t=xm9ML4Z72gN1SFhZ-1">
					<div className={classes.card}>
						<div className={classes.title}>
							<SubHeading level={3} title="Design portfolio" />
							<FontAwesomeIcon
								className={classes.icon}
								icon={faArrowUpRightFromSquare}
								fontSize="18px"
							/>
						</div>
						<BodyText>View my personal work in detail</BodyText>
					</div>
				</a>
			</div>
		</div>
	);
};

export default Experience;
