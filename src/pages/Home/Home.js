import React from "react";
import { createUseStyles } from "react-jss";
import Headshot from "../../assets/img/2021-headshot.png";
import PageHeading from "../../components/Typography/PageHeading";
import { socialLinks } from "../../components/Menu/Menu";

const useStyles = createUseStyles({
	about: {
		display: "flex",
		alignItems: "center",
		boxSizing: "border-box",
		"@media (max-width: 912px)": {
			alignItems: "center",
			flexDirection: "column",
			padding: "48px 24px",
		},
		"@media (min-width: 769px)": {
			width: "100%",
			height: "800px",
			padding: "24px",
		},
	},
	aboutCopyContainer: {
		paddingBottom: "24px",
		"@media (min-width: 769px)": {
			padding: "0 48px",
			width: "100%",
		},
	},
	headshot: {
		"@media (min-width: 769px)": {
			width: "25%",
		},
		"@media (max-width: 912px)": {
			width: "40%",
			marginBottom: "24px",
		},
	},
	imageAnchor: {
		display: "flex",
		alignItems: "center",
	},
	mediaLinks: {
		width: "100%",
		"@media (max-width: 798px)": {
			display: "flex",
			justifyContent: "center",
		},
		display: "none",
		padding: "24px 0",
	},
	companyLogo: {
		"-webkit-filter": "grayscale(100%)" /* Safari 6.0 - 9.0 */,
		filter: "grayscale(100%)",
		opacity: "80%",
		"&:hover": {
			opacity: "100%",
			marginTop: "-8px",
			filter: "grayscale(0%)",
			transition: "margin-top 0.25s",
		},
		width: "28px",
		margin: "0 12px",
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
				<p>
					I'm a Senior Product Designer, UX Engineer and Design Systems Advocate
					based out of Florida. I've had the joy of building products that help
					improve peoples' everyday lives in the last 8+ years.
					<br />
					<br />
					I'm currently at NinjaOne working on multiple products and initiatives
					to help IT Businesses operate smoothly and help IT people keep their
					sanity when managing devices. Previously, I worked at J.P. Morgan
					Chase, where I helped redesign tools for Pricing/Billing Operations
					and Healthcare Finance services.
				</p>
				<div className={classes.mediaLinks}>
					{socialLinks.map(({ href, description, logo, name }) => (
						<li key={name} className={classes.imageAnchor}>
							<a
								href={href}
								target="_blank"
								rel="noopener noreferrer"
								className={classes.imageAnchor}
								aria-label={description}>
								<img
									src={logo}
									alt={`${name} company logo`}
									className={classes.companyLogo}
								/>
							</a>
						</li>
					))}
				</div>
			</div>
		</div>
	);
};

export default Home;
