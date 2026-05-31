import React from "react";

export const DarkModeIcon = () => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M12.0738 4.31046C12.7166 6.21717 13.3905 9.33366 12.1833 12.0805C10.9762 14.8271 8.22483 16.4374 6.38547 17.2533C8.12802 17.5942 10.0726 17.5108 11.7823 16.9904C13.7137 16.4025 15.2496 15.2928 15.9364 13.73C16.6233 12.1672 16.4021 10.2854 15.5292 8.46495C14.7563 6.85344 13.5033 5.36369 12.0738 4.31046Z"
				stroke="white"
				strokeWidth="1.4"
			/>
		</svg>
	);
};

export const LightModeIcon = () => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<line
				x1="11.7142"
				y1="7.3"
				x2="11.7142"
				y2="4.7"
				stroke="black"
				strokeWidth="1.4"
				strokeLinecap="round"
			/>
			<line
				x1="16"
				y1="8.42427"
				x2="17.8385"
				y2="6.58579"
				stroke="black"
				strokeWidth="1.4"
				strokeLinecap="round"
			/>
			<line
				x1="17.2355"
				y1="11.8"
				x2="19.8355"
				y2="11.8"
				stroke="black"
				strokeWidth="1.4"
				strokeLinecap="round"
			/>
			<line
				x1="16.1113"
				y1="15.5355"
				x2="17.9498"
				y2="17.374"
				stroke="black"
				strokeWidth="1.4"
				strokeLinecap="round"
			/>
			<line
				x1="12.1142"
				y1="16.7"
				x2="12.1142"
				y2="19.3"
				stroke="black"
				strokeWidth="1.4"
				strokeLinecap="round"
			/>
			<line
				x1="8"
				y1="15.6468"
				x2="6.16152"
				y2="17.4853"
				stroke="black"
				strokeWidth="1.4"
				strokeLinecap="round"
			/>
			<line
				x1="6.76446"
				y1="12.2"
				x2="4.16446"
				y2="12.2"
				stroke="black"
				strokeWidth="1.4"
				strokeLinecap="round"
			/>
			<line
				x1="7.88873"
				y1="8.53554"
				x2="6.05025"
				y2="6.69706"
				stroke="black"
				strokeWidth="1.4"
				strokeLinecap="round"
			/>
			<circle cx="12" cy="12" r="2.8" stroke="black" strokeWidth="1.4" />
		</svg>
	);
};

export const ExternalLinkIcon = (theme) => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M5.55806 17.1647C5.31398 17.4087 5.31398 17.8045 5.55806 18.0485C5.80214 18.2926 6.19786 18.2926 6.44194 18.0485L6 17.6066L5.55806 17.1647ZM17.9387 6.29289C17.9387 5.94771 17.6589 5.66789 17.3137 5.66789L11.6887 5.66789C11.3435 5.66789 11.0637 5.94771 11.0637 6.29289C11.0637 6.63807 11.3435 6.91789 11.6887 6.91789H16.6887V11.9179C16.6887 12.2631 16.9685 12.5429 17.3137 12.5429C17.6589 12.5429 17.9387 12.2631 17.9387 11.9179L17.9387 6.29289ZM6 17.6066L6.44194 18.0485L17.7557 6.73483L17.3137 6.29289L16.8718 5.85095L5.55806 17.1647L6 17.6066Z"
				fill={theme.textWeak}
			/>
		</svg>
	);
};
