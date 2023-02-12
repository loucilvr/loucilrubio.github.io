import React from "react";
import { createUseStyles } from "react-jss";
import classnames from "classnames";

const useStyles = createUseStyles(() => {
	const borderBottom = { borderBottom: "2px solid #282a31" };
	return {
		tabButton: {
			fontFamily:
				"Assistant, -apple-system, BlinkMacSystemFont, Arial, sans-serif",
			background: "#FFFFFF",
			border: "none",
			padding: "8px",
			fontSize: "18px",
			borderBottom: "2px solid #FFFFFF",
			"&:hover": {
				...borderBottom,
				cursor: "pointer",
			},
			margin: "0px 8px",
			color: "#838383",
		},
		tabButtonSelected: {
			...borderBottom,
			color: "#282a31",
			boxSizing: "border-box",
		},
		tabs: {
			margin: "24px",
			display: "flex",
			justifyContent: "center",
		},
	};
});

const Tabs = ({ tabs, selectedTab, handleTabChange }) => {
	const handleTabClick = (tab) => {
		handleTabChange(tab);
	};

	const classes = useStyles();
	return (
		<div className={classes.tabs} role="tablist" aria-orientation="horizontal">
			{tabs.map((tab) => {
				const isSelected = selectedTab === tab;
				return (
					<button
						key={`${tab}_tab`}
						className={classnames(
							classes.tabButton,
							isSelected ? classes.tabButtonSelected : ""
						)}
						role="tab"
						aria-selected={isSelected}
						onClick={() => handleTabClick(tab)}>
						{tab}
					</button>
				);
			})}
		</div>
	);
};

export default Tabs;
