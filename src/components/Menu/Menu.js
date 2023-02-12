import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { createUseStyles } from "react-jss";
import classnames from "classnames";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import Linkedin from "../../assets/img/linkedinLogo.png";
import Github from "../../assets/img/githubLogo.png";
import Dribbble from "../../assets/img/dribbble-icon.svg";

const useStyles = createUseStyles(() => {
	const buttonDefault = {
		cursor: "pointer",
		border: "none",
		textAlign: "left",
		textDecoration: "none",
		color: "#646464",
		"@media (max-width: 768px)": {
			textDecoration: "none",
			fontSize: "16px",
		},
		"@media (min-width: 769px)": {
			"&:hover": {
				backgroundColor: "#f3f3f3",
				color: "#464646 !important",
				borderRadius: "4px",
			},
			padding: "8px 16px",
			fontSize: "18px",
		},
	};

	return {
		selected: {
			...buttonDefault,
			fontWeight: "600",
			color: "#282a31 !important",
			"@media (min-width: 769px)": {
				borderRadius: "4px",
				padding: "8px 16px",
				fontSize: "18px",
			},
		},
		menu: {
			width: "100%",
			height: "60px",
			borderBottom: "2px solid #eeeeee",
			backgroundColor: "#fff",
			zIndex: 2,
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			"@media (max-width: 768px)": {
				fontSize: "16px",
			},
		},
		menuButton: {
			...buttonDefault,
		},
		hideMenu: {
			top: "-386px",
			transition: "top 330ms",
		},
		showMenu: {
			"@media (max-width: 768px)": {
				top: 0,
				transition: "top 330ms",
			},
		},
		linksContainer: {
			width: "100%",
			maxWidth: "1100px",
			padding: "0 24px",
			display: "flex",
			alignItems: "center",
			justifyContent: "space-between",
			"& > ul": {
				padding: 0,
				listStyleType: "none",
				margin: 0,
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
			},
			"@media (max-width: 768px)": {
				padding: "0 12px",
			},
		},
		siteLinks: {
			display: "flex",
			alignItems: "center",
		},
		appTitle: {
			textDecoration: "none",
			background:
				"linear-gradient(130deg, #ff7c00 0%, #e93750 15%, #b00970 100%)",
			"-webkit-background-clip": "text",
			"-webkit-text-fill-color": "transparent",
			fontWeight: 700,
			fontSize: "18px",
			letterSpacing: "2px",
		},
		companyLogo: {
			width: "22px",
			margin: "0 8px",
			"-webkit-filter": "grayscale(100%)" /* Safari 6.0 - 9.0 */,
			filter: "grayscale(100%)",
			opacity: "70%",
			"@media (max-width: 768px)": {
				width: "16px",
				margin: "0 8px",
			},
		},
		imageAnchor: {
			display: "flex",
			alignItems: "center",
			width: "38px",
			height: "38px",
			"&:hover": {
				"& > img": {
					opacity: "90%",
					marginTop: "-8px",
					filter: "grayscale(0%)",
					transition: "margin-top 0.25s",
				},
			},
		},
		navMenuButton: {
			padding: "9px 12px",
			backgroundColor: "transparent",
			border: "none",
			cursor: "pointer",
			color: "#242526",
			"&:hover": {
				backgroundColor: "#e7e7e7",
				borderRadius: "4px",
			},
		},
		menuOverlay: {
			position: "absolute",
			top: "52px",
			width: "100%",
			height: "calc(100vh - 60px)",
			backgroundColor: "#ffffff",
			display: "flex",
			justifyContent: "center",
			zIndex: 2,
		},
		menuOverlayLinks: {
			width: "100%",
			marginTop: "12px",
			padding: 0,
			textAlign: "center",
			display: "flex",
			flexDirection: "column",
			"list-style": "none",
		},
		menuOverlayLink: {
			textDecoration: "none",
			color: "#3C3F49",
			fontSize: "24px",
			width: "100%",
		},
		linkItem: {
			height: "60px",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			margin: "0px 12px",
			borderRadius: "4px",
			"&:hover": {
				backgroundColor: "#e7e7e7",
			},
		},
	};
});

const menuLinks = [
	{
		label: "Home",
		path: "/",
	},
	{
		label: "Work",
		path: "/work",
	},
	{
		label: "Projects",
		path: "/projects",
	},
	{
		label: "Art",
		path: "/art",
	},
];

export const socialLinks = [
	{
		name: "LinkedIn",
		description: "View my LinkedIn profile",
		href: "https://www.linkedin.com/in/mlcrubio",
		logo: Linkedin,
	},
	{
		name: "Dribbble",
		description: "View my designs on Dribbble",
		href: "https://dribbble.com/loucilvr",
		logo: Dribbble,
	},
	{
		name: "GitHub",
		description: "View my coding projects on GitHub",
		href: "https://github.com/loucilvr",
		logo: Github,
	},
];

const CloseMenuButton = ({ handleClick }) => {
	const classes = useStyles();

	return (
		<button
			aria-label="Close Menu"
			className={classes.navMenuButton}
			onClick={handleClick}>
			<FontAwesomeIcon icon={faTimes} fontSize="20px" />
		</button>
	);
};

const OpenMenuButton = ({ handleClick }) => {
	const classes = useStyles();

	return (
		<button
			aria-label="Open Menu"
			className={classes.navMenuButton}
			onClick={handleClick}>
			<FontAwesomeIcon icon={faBars} fontSize="18px" />
		</button>
	);
};

const Menu = () => {
	const history = useHistory();
	const classes = useStyles();
	const [showHamburger, setShowHamburger] = useState(false);
	const [showMenu, setShowMenu] = useState(false);

	useEffect(() => {
		const handleResize = () => setShowHamburger(window.innerWidth < 790);
		handleResize();

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const isSelected = (path) =>
		history.location.pathname === path ? classes.selected : "";

	return (
		<>
			<nav className={classnames(classes.menu, classes.showMenu)}>
				<div className={classes.linksContainer}>
					<Link className={classes.appTitle} to="/">
						LOUCIL RUBIO
					</Link>
					{showHamburger ? (
						showMenu ? (
							<CloseMenuButton handleClick={() => setShowMenu(!showMenu)} />
						) : (
							<OpenMenuButton handleClick={() => setShowMenu(!showMenu)} />
						)
					) : (
						<ul className={classes.siteLinks}>
							{menuLinks.map((ml) => (
								<li key={ml.label}>
									<Link
										to={ml.path}
										className={classnames(
											classes.menuButton,
											isSelected(ml.path)
										)}>
										{ml.label}
									</Link>
								</li>
							))}

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
						</ul>
					)}
				</div>
			</nav>
			{showMenu && showHamburger && (
				<div className={classes.menuOverlay}>
					<ul className={classes.menuOverlayLinks}>
						{menuLinks.map((ml) => (
							<li
								key={ml.label}
								className={classes.linkItem}
								onClick={() => {
									setShowMenu(false);
								}}>
								<Link to={ml.path} className={classes.menuOverlayLink}>
									{ml.label}
								</Link>
							</li>
						))}
					</ul>
				</div>
			)}
		</>
	);
};

export default withRouter(Menu);
