import React from "react";
import { createUseStyles } from "react-jss";
import PageHeading from "../components/Typography/PageHeading.js";
import BodyText from "../components/Typography/BodyText.js";
import { socialLinks } from "../components/Menu/Menu.js";

const useStyles = createUseStyles((theme) => ({
	about: {
		width: "100%",
		height: "100%",
		paddingTop: "64px",
		"@media (max-width: 768px)": {
			padding: "40px 24px",
			transition: "all 0.5s ease-out",
		},
	},
	bodyTextContainer: {
		padding: "24px 0",
	},
	logo: {
		display: "flex",
		flexFlow: "column",
		padding: "8px",
		borderRadius: "8px",
		"-webkit-filter": "grayscale(100%)" /* Safari 6.0 - 9.0 */,
		filter: "grayscale(100%)",
		opacity: "80%",
		"&:hover, &:focus": {
			opacity: "100%",
			filter: "grayscale(0%)",
			transition: "margin-top 0.25s",
		},
	},
	mediaLinks: {
		width: "100%",
		gap: "12px",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		paddingInlineStart: 0,
	},
	companyLogo: {
		opacity: "90%",
		width: "28px",
	},
	listItem: {
		textDecoration: "none",
		display: "initial",
	},
}));

const Home = ({ theme }) => {
	const classes = useStyles();
	return (
		<div data-testid="home" className={classes.about}>
			<PageHeading title="Product Design leader with a love for learning, coaching and building." />

			<div className={classes.bodyTextContainer}>
				<BodyText>
					Hi, I'm Loucil ~ a Designer, Engineer, Researcher, Artist, and Mentor.
					I currently lead the Product Design team at NinjaOne.
					<br />
					<br />
					I've spent the last 10+ years shipping software for enterprise and
					SaaS companies. I've designed and shipped complex end-to-end
					experiences, design systems, platform-wide design initiatives,
					spearheaded research initiatives, facilitated workshops and mentored
					designers and developers.
				</BodyText>
			</div>
			<ul className={classes.mediaLinks}>
				{socialLinks(theme).map(({ href, description, logo, name }) => (
					<li key={name} className={classes.listItem}>
						<a
							href={href}
							target="_blank"
							rel="noopener noreferrer"
							className={classes.logo}
							aria-label={description}>
							<img
								aria-describedby="socialtooltip"
								src={logo}
								alt={`${name}`}
								className={classes.companyLogo}
							/>
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Home;
