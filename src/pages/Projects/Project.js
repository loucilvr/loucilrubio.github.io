import React from "react";
import { createUseStyles } from "react-jss";
import BodyText from "../../components/Typography/BodyText";

const useStyles = createUseStyles({
  projectDescription: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderBottom: "1px solid #DDDDDD",
    "@media (min-width: 769px)": {
      padding: "64px 24px",
    },
    "@media (max-width: 768px)": {
      padding: "64px 24px",
    },
    "& h2": {
      paddingBottom: "16px",
      margin: 0,
    },
  },
  demoImages: {
    padding: "24px 0px",
  },
});
const Project = ({ title, description, renderImages, renderFooter }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.projectDescription}>
        <h2>{title}</h2>
        <BodyText>{description}</BodyText>
        <span className={classes.demoImages}>
          {renderImages && renderImages()}
        </span>
        {renderFooter && renderFooter()}
      </div>
    </>
  );
};

export default Project;
