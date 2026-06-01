import React from "react";
import { createUseStyles } from "react-jss";
import BodyText from "../components/Typography/BodyText.js";
import SubHeading from "../components/Typography/SubHeading.js";
import Photo1 from "../../src/assets/img/Photo1.jpg";
import Photo2 from "../../src/assets/img/Photo2.jpg";
import Photo3 from "../../src/assets/img/Photo3.jpg";
import Photo4 from "../../src/assets/img/Photo4.jpg";
import Photo5 from "../../src/assets/img/Photo5.jpg";
import Photo6 from "../../src/assets/img/Photo6.jpg";
import Photo7 from "../../src/assets/img/Photo7.jpg";
import Photo8 from "../../src/assets/img/Photo8.jpg";
import Photo9 from "../../src/assets/img/Photo9.jpg";

const useStyles = createUseStyles((theme) => {
	return {
		pageContainer: {
			padding: "32px 24px 32px 24px",
			width: "100%",
		},
		gallery: {
			width: "100%",
			display: "flex",
			flexWrap: "wrap",
		},
		image: {
			maxWidth: "154px",
			flex: "auto",
			margin: "8px",
			borderRadius: "8px",
			"@media (min-width: 769px)": {
				maxWidth: "228px",
			},
		},
		aboutText: {
			display: "flex",
			flexDirection: "column",
			gap: "16px",
			"@media (min-width: 769px)": {
				filter: "saturate(0)",
			},
			"&:hover": {
				filter: "saturate(100%)",
				transition: "all 0.5s ease-out",
			},
		},
		link: {
			color: theme.textStrong,
			textDecoration: "underline",
		},
	};
});

const Experience = () => {
	const classes = useStyles();
	return (
		<div data-testid="experience" className={classes.pageContainer}>
			<SubHeading level={2} title="About" />
			<div className={classes.aboutText}>
				<div className={classes.col}>
					<BodyText size="xxs">MY PHILOSOPHY</BodyText>
					<BodyText size="xs">
						My love for art and problem solving led me to a career in
						technology. I'm forever thankful to have started my career in design
						as an engineer because it gave me a holistic perspective on tackling
						challenges. To me, design is not just about the visual end result
						but the entire journey. Design is the art of truly understanding the
						problem, finding opportunities to improve, and creating thoughtful
						experiences. At the end of the day, technology is about people and
						if you're not working with people to understand problems or solving
						any problems for people, you're not designing the right solution.
					</BodyText>
					<br />
					<BodyText size="xxs">WHAT I DO</BodyText>
					<BodyText size="xs">
						I currently lead the Product Design team at NinjaOne where I empower
						designers to lead and make an impact. Prior to switching to
						management, I was Principal Product Designer focused on strategic
						initiatives with organizational impact from platform-wide redesigns
						and design system standardization to helping define the vision for
						the new age of AI.
					</BodyText>
					<br />
					<BodyText size="xxs">OUTSIDE OF WORK</BodyText>
					<BodyText size="xs">
						I was born in the Philippines and currently based in Florida.
						<br />
						<br />
						When I'm not working, I do my best to stay off the computer screen
						by doing pottery, painting, baking, golfing or exploring nearby
						historic towns.
						<br />
						<br />
						---
						<br />
						<br />
						Thanks for stopping by!
						<br />
						Got any questions or looking for mentorship?
						<a
							className={classes.link}
							href="https://www.linkedin.com/in/lcrubio">
							Let's connect.
						</a>
					</BodyText>
				</div>
				<div className={classes.gallery}>
					<img className={classes.image} src={Photo1} alt="beach" />
					<img className={classes.image} src={Photo2} alt="vineyard" />
					<img className={classes.image} src={Photo3} alt="vineyard" />
					<img className={classes.image} src={Photo4} alt="vineyard" />
					<img className={classes.image} src={Photo5} alt="vineyard" />
					<img className={classes.image} src={Photo6} alt="vineyard" />
					<img className={classes.image} src={Photo9} alt="vineyard" />
					<img className={classes.image} src={Photo8} alt="vineyard" />
					<img className={classes.image} src={Photo7} alt="vineyard" />
				</div>
			</div>
		</div>
	);
};

export default Experience;
