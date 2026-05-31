import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { createUseStyles } from "react-jss";
import classnames from "classnames";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import Linkedin from "../../assets/img/Linkedin.svg";
import Github from "../../assets/img/Github.svg";
import GithubLight from "../../assets/img/github-light.svg";

import Dribbble from "../../assets/img/Dribbble-colored.svg";
import { DarkModeIcon, LightModeIcon } from "../Icons";
import { MAX_WIDTH } from "../../theme";

const useStyles = createUseStyles((theme) => {
	const buttonDefault = {
		backgroundColor: theme.backgroundColor,
		cursor: "pointer",
		border: "none",
		textAlign: "left",
		textDecoration: "none",
		color: theme.buttonLabel,
		"@media (max-width: 768px)": {
			textDecoration: "none",
			fontSize: "16px",
		},
		"@media (min-width: 769px)": {
			"&:hover": {
				backgroundColor: theme.buttonNavHover,
				borderRadius: "4px",
			},
			padding: "8px 16px",
			fontSize: "16px",
		},
	};

	return {
		mode: {
			...buttonDefault,
			color: theme.textStrong,
			display: "flex",
			alignItems: "center",
			"&:hover": {
				backgroundColor: theme.buttonNavHover,
				borderRadius: "4px",
			},
		},
		icon: {
			stroke: theme.textStrong,
		},
		selected: {
			...buttonDefault,
			fontWeight: "700",
			color: theme.textStrong,
			"@media (min-width: 769px)": {
				borderRadius: "4px",
				padding: "8px 16px",
				fontSize: "18px",
			},
		},
		menu: {
			width: "100%",
			height: "60px",
			borderBottom: `1px solid ${theme.borderWeakest}`,
			backgroundColor: theme.backgroundColor,
			zIndex: 2,
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
		},
		menuButton: {
			...buttonDefault,
		},
		hideMenu: {
			top: "-386px",
			transition: "top 330ms",
		},
		isMobileMenuOpen: {
			"@media (max-width: 768px)": {
				top: 0,
				transition: "top 330ms",
			},
		},
		linksContainer: {
			width: "100%",
			maxWidth: MAX_WIDTH,
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
		},
		siteLinks: {
			display: "flex",
			alignItems: "center",
			gap: "4px",
		},
		appTitle: {
			textDecoration: "none",
			color: theme.textStrongest,
			// background:
			// 	"linear-gradient(130deg, #ff7c00 0%, #e93750 15%, #b00970 100%)",
			// "-webkit-background-clip": "text",
			// "-webkit-text-fill-color": "transparent",
			fontWeight: 700,
			fontSize: "18px",
			letterSpacing: "2px",
		},
		companyLogo: {
			width: "22px",
			margin: "0 8px",
			"-webkit-filter": "grayscale(100%)" /* Safari 6.0 - 9.0 */,
			filter: "grayscale(100%)",
			opacity: "100%",
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
					marginTop: "-4px",
					filter: "grayscale(0%)",
					transition: "margin-top 0.25s",
				},
			},
		},
		navMenuButton: {
			padding: "8px 12px",
			backgroundColor: "transparent",
			border: "none",
			cursor: "pointer",
			color: theme.buttonLabel,
			"&:hover": {
				backgroundColor: theme.buttonNavHover,
				borderRadius: "4px",
			},
		},
		menuOverlay: {
			position: "absolute",
			top: "52px",
			width: "100%",
			height: "100vh",
			backgroundColor: "#ffffff",
			display: "flex",
			justifyContent: "center",
			zIndex: 2,
		},
		menuOverlayLinks: {
			width: "100%",
			textAlign: "center",
			display: "flex",
			flexDirection: "column",
			listStyle: "none",
			paddingInlineStart: 0,
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
		label: "About",
		path: "/about",
	},
];

export const socialLinks = () => {
	const getTheme = () => localStorage.getItem("theme") ?? "light";

	return [
		{
			name: "LinkedIn",
			description: "View my LinkedIn profile",
			href: "https://www.linkedin.com/in/lcrubio",
			logo: Linkedin,
			message: "Let's chat on LinkedIn",
		},
		{
			name: "Dribbble",
			description: "View my designs on Dribbble",
			href: "https://dribbble.com/loucilvr",
			logo: Dribbble,
			message: "View my Dribbble designs",
		},
		{
			name: "GitHub",
			description: "View my coding projects on GitHub",
			href: "https://github.com/loucilvr",
			logo: getTheme() === "light" ? Github : GithubLight,
			message: "View my GitHub repos",
		},
	];
};

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

const ThemeSwitcher = ({ theme, handleClick }) => {
	const classes = useStyles();
	return (
		<button
			className={classes.mode}
			onClick={handleClick}
			title={`Switch to ${theme === "light" ? "Dark" : "Light"} mode`}>
			{theme === "light" ? <LightModeIcon /> : <DarkModeIcon />}
		</button>
	);
};

const DesktopMenu = ({
	currentTheme,
	menuLinks,
	handleThemeChange,
	isSelected,
}) => {
	const classes = useStyles();
	return (
		<ul className={classes.siteLinks}>
			{menuLinks.map((ml) => (
				<li key={ml.label}>
					<Link
						to={ml.path}
						className={classnames(classes.menuButton, isSelected(ml.path))}>
						{ml.label}
					</Link>
				</li>
			))}
			<ThemeSwitcher theme={currentTheme} handleClick={handleThemeChange} />
		</ul>
	);
};

const MobileMenu = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
	return isMobileMenuOpen ? (
		<CloseMenuButton
			handleClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
		/>
	) : (
		<OpenMenuButton
			handleClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
		/>
	);
};

const Menu = ({ currentTheme, handleThemeChange }) => {
	const history = useHistory();
	const classes = useStyles();
	const [isMobile, setMobile] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		if (window.innerWidth < 790) {
			setMobile(true);
		}

		const handleResize = () => setMobile(window.innerWidth < 790);
		// handleResize();

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const isSelected = (path) =>
		history.location.pathname === path ? classes.selected : "";

	return (
		<>
			<nav className={classnames(classes.menu, classes.isMobileMenuOpen)}>
				<div className={classes.linksContainer}>
					<Link className={classes.appTitle} to="/">
						LR
					</Link>
					{isMobile ? (
						<MobileMenu
							isMobileMenuOpen={isMobileMenuOpen}
							setIsMobileMenuOpen={setIsMobileMenuOpen}
						/>
					) : (
						<DesktopMenu
							currentTheme={currentTheme}
							handleThemeChange={handleThemeChange}
							menuLinks={menuLinks}
							isSelected={isSelected}
						/>
					)}
				</div>
			</nav>
			{isMobileMenuOpen && isMobile && (
				<div className={classes.menuOverlay}>
					<ul className={classes.menuOverlayLinks}>
						{menuLinks.map((ml) => (
							<Link to={ml.path} className={classes.menuOverlayLink}>
								<li
									key={ml.label}
									className={classes.linkItem}
									onClick={() => {
										setIsMobileMenuOpen(false);
									}}>
									{ml.label}
								</li>
							</Link>
						))}
					</ul>
				</div>
			)}
		</>
	);
};

export default withRouter(Menu);
