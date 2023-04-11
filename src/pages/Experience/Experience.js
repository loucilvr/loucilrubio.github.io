import React from "react";
import PageHeading from "../../components/Typography/PageHeading";
import { createUseStyles } from "react-jss";
import BodyText from "../../components/Typography/BodyText";
import Tag from "../../components/Tag";

const useStyles = createUseStyles({
	titleCompanyContainer: {
		"& h2": {
			margin: 0,
			padding: "8px 0",
			display: "inline",
			fontSize: "18px",
		},
	},
	companyInfo: {
		fontWeight: "bold",
	},
	description: {
		margin: 0,
		padding: 0,
		fontSize: "18px",
		paddingTop: "8px",
		paddingBottom: "64px",
		color: "#6b6b6b",
	},
	experienceContent: {
		padding: "46px 32px",
	},
	experience: {
		marginBottom: "48px",
		borderBottom: "1px solid #EEEEEE",
		paddingBottom: "48px",
	},
	timeline: {
		padding: "8px 0",
		margin: 0,
		fontSize: "18px",
		color: "#3c3f49",
	},
	experienceContainer: {
		paddingTop: "80px",
		"@media (min-width: 769px)": {
			width: "70%",
		},
	},
	subRoleDescription: {
		marginLeft: "16px",
		paddingLeft: "32px",
		paddingBottom: "16px",
		borderLeft: "2px dashed #ddd",
	},
	tags: {
		display: "flex",
		flexWrap: "wrap",
		flexDirection: "",
		paddingTop: "16px",
	},
});

const Experience = () => {
	const classes = useStyles();
	return (
		<div data-testid="experience" className={classes.experienceContainer}>
			<PageHeading title="Work" />
			<div className={classes.experienceContent}>
				<div className={classes.experience}>
					<div className={classes.titleCompanyContainer}>
						<h2 className={classes.companyInfo}>NinjaOne</h2>
						<br />
						<br />
						<p className={classes.timeline}>
							Senior Product Designer (Nov 2022 - Present)
						</p>
						<div className={classes.subRoleDescription}>
							<BodyText>
								Currently working on multiple projects for different teams -
								from Platform-wide enhancements to Growth initiatives, Remote
								Monitoring tools, Automations and Search, while also building
								our internal Design System to be leveraged by our Design,
								Product Management and Development team
							</BodyText>
						</div>
						<p className={classes.timeline}>Product Designer (March 2022)</p>
						<div className={classes.subRoleDescription} />
						<p className={classes.timeline}>UI/UX Engineer (June 2021)</p>
					</div>
					<div className={classes.tags}>
						<Tag label="UI/UX Design" />
						<Tag label="Design Systems" />
						<Tag label="Product Design Strategy" />
						<Tag label="Figma" />
						<Tag label="User Research" />
						<Tag label="Lo-fi/Hi-fi Prototypes" />
						<Tag label="Accessibility" />
						<Tag label="Web" />
						<Tag label="Native" />
						<Tag label="Full Stack Design" />
						<Tag label="React" />
						<Tag label="Storybook" />
					</div>
				</div>
				<div className={classes.experience}>
					<div className={classes.titleCompanyContainer}>
						<h2 className={classes.companyInfo}>J.P. Morgan Chase</h2>
					</div>
					<br />
					<p className={classes.timeline}>
						Senior Associate UX Engineer/Product Designer (2019 - 2021)
					</p>
					<div className={classes.subRoleDescription}>
						<BodyText>
							Led the redesign of a client-facing Healthcare payments app, as
							well as an internal Ops tool, to modernize and streamline the
							remittance and payment posting experience for Healthcare &
							Insurance Provider customers
							<br />
							<br />
							Facilitated user research by interviewing both external (Portal
							users) and internal customers (Support and Operations teams)
							<br />
							<br />
							Delivered high-fidelity mockups and prototypes, as well as React
							components
							<br />
							<br />
							Defined UX patterns leveraging our internal Design System Library
							<br />
							<br />
							Collaborated with Product to plan, define and iterate on solutions
							and to create training documents for customers
						</BodyText>
					</div>
					<p className={classes.timeline}>Associate UI/UX Engineer (2018)</p>
					<div className={classes.subRoleDescription}>
						<BodyText>
							Helped design and develop a new Billing Ops dashboard to support
							our Operations Team's daily monitoring tasks
						</BodyText>
					</div>
					<p className={classes.timeline}>Software Engineer (2016)</p>
					<div className={classes.subRoleDescription}>
						<BodyText>
							Developed features for JPMorgan's Pricing Sales app
						</BodyText>
					</div>
					<div className={classes.tags}>
						<Tag label="UI/UX Design" />
						<Tag label="Lo-fi/Hi-fi Prototyping" />
						<Tag label="User Research" />
						<Tag label="Design Systems" />
						<Tag label="Accessibility" />
						<Tag label="Sketch" />
						<Tag label="Full Stack Web Development" />
						<Tag label="React" />
						<Tag label="Storybook" />
						<Tag label="Java/Spring" />
					</div>
				</div>
				<div className={classes.experience}>
					<div className={classes.titleCompanyContainer}>
						<h2 className={classes.companyInfo}>
							Florida State University Libraries Research
						</h2>
					</div>
					<br />
					<p className={classes.timeline}>Data Analyst (2014 - 2016)</p>
					<div className={classes.subRoleDescription}>
						<BodyText>
							Designed and built our public-facing Analytics page within the
							University's shared CMS Drupal site
							<br />
							<br />
							Built a SAS Program to collect, transform and analyze library
							usage data to better understand library traffic and services’
							performance
							<br />
							<br />
							Crafted Data Visualizations and Dashboards on Tableau, and
							published findings on our FSU Libraries site
						</BodyText>
					</div>
					<div className={classes.tags}>
						<Tag label="UI Design" />
						<Tag label="Web" />
						<Tag label="Drupal/CMS" />
						<Tag label="SAS Programming" />
						<Tag label="Data Collection" />
						<Tag label="Research Data" />
						<Tag label="Data Viz" />
						<Tag label="Tableau" />
					</div>
				</div>
				<div className={classes.titleCompanyContainer}>
					<h2 className={classes.companyInfo}>Nielsen</h2>
				</div>
				<br />
				<p className={classes.timeline}>
					Software Engineer Intern (Summer 2015)
				</p>
				<div className={classes.subRoleDescription}>
					<BodyText>
						Gained experience in Agile Software Development while working with a
						global team on a Java web app for processing TV Set Top Box data
						collected from TV Cable Providers across the country
						<br />
						<br />
						Helped kickstart a new Scala Spark project to improve query
						performance of existing application
					</BodyText>
				</div>
				<div className={classes.tags}>
					<Tag label="Big Data Collection" />
					<Tag label="Data Management" />
					<Tag label="Full Stack Web Development" />
					<Tag label="Agile Development" />
				</div>
			</div>
		</div>
	);
};

export default Experience;
