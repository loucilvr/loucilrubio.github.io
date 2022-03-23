import React from "react";
import Headshot from "../../assets/img/2021-headshot.png";
import Linkedin from "../../assets/img/linkedinLogo.png";
import Github from "../../assets/img/githubLogo.png";
import Dribbble from "../../assets/img/dribbble-icon.svg";
import { createUseStyles } from "react-jss";
import PageHeading from "../../components/Typography/PageHeading";

const useStyles = createUseStyles({
	about: {
		fontWeight: 500,
		display: "flex",
		alignItems: "center",
		height: "100%",
		boxSizing: "border-box",
		"@media (max-width: 768px)": {
			alignItems: "center",
			flexDirection: "column",
			padding: "48px 24px",
		},
		"@media (min-width: 769px)": {
			padding: "24px",
			width: "100%",
			justifyContent: "space-evenly",
		},
	},
	aboutCopyContainer: {
		"@media (min-width: 769px)": {
			width: "620px",
			paddingLeft: "42px",
		},
	},
	companyLogo: {
		display: "inline",
		width: "28px",
		marginRight: "6px",
		"&:hover": {
			marginTop: "-8px",
		},
	},
	headshot: {
		"@media (min-width: 769px)": {
			width: "30%",
		},
		"@media (max-width: 768px)": {
			width: "60%",
			marginBottom: "32px",
		},
	},
	aboutDetails: {
    margin: 0,
		"@media (min-width: 769px)": {
			fontSize: "18px",
		},
		"@media (max-width: 768px)": {
			fontSize: "20px",
		},
		color: "#737373",
	},
	divider: {
		width: "1px",
		height: "14px",
		backgroundColor: "#afafaf",
		margin: "0 24px",
	},
	mediaLinksContainer: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		height: "60px",
		"@media (max-width: 768px)": {
			paddingBottom: "48px",
		},
	},
	mediaLinks: {
		width: "140px",
		margin: "46px 0",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		fontSize: "16px",
		letterSpacing: "1px",
		textDecoration: "none",
		"& > a": {
			textDecoration: "none",
			color: "#b00970",
		},
	},
});

const Home = () => {
	const classes = useStyles();
	return (
		<div data-testid="home" className={classes.about}>
			<img
				src={Headshot}
				alt="My personal headshot"
				className={classes.headshot}
			/>
			<div className={classes.aboutCopyContainer}>
				<PageHeading title="hi there, I'm Loucil." />
				<p className={classes.aboutDetails}>
					I'm a <strong> UX Engineer</strong>, illustrator, home barista and
					weekend-baker. I've been combining my love for art, design and
					software development for the past ~7 years.
					<br />
					<br />
					I'm currently at NinjaOne designing and building out our platform's
					Design System and web features. Previously, I worked at J.P. Morgan
					Chase, where I helped redesign experiences as well as build interfaces
					for multiple apps for Pricing, Billing Ops and Healthcare Finance
					services.
					<br />
					<br />
				</p>
				<section className={classes.mediaLinksContainer}>
					<div className={classes.mediaLinks}>
						<a
							href="https://www.linkedin.com/in/mlcrubio"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="View my LinkedIn Profile">
							<img
								src={Linkedin}
								alt="LinkedIn company logo"
								className={classes.companyLogo}
							/>
						</a>
						<a
							href="https://dribbble.com/loucilvr"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="View my Dribbble shots">
							<img
								src={Dribbble}
								alt="Dribbble company logo"
								className={classes.companyLogo}
							/>
						</a>
						<a
							href="https://github.com/loucilvr"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="View my GitHub Projects">
							<img
								src={Github}
								alt="Github company logo"
								className={classes.companyLogo}
							/>
						</a>
					</div>
				</section>
			</div>
		</div>
	);
};

export default Home;
