import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#242526",
    border: "none",
    color: "#ffffff",
    fontWeight: "bold",
    borderRadius: "24px",
    padding: "0 24px",
    height: "38px",
    fontSize: "14px",
    cursor: 'pointer',
    "&:hover": {
      backgroundColor: "#626262",
    },
  },
});

const Button = ({ label, handleClick }) => {
  const classes = useStyles();
  return (
    <button className={classes.root} onClick={handleClick}>
      {label}
    </button>
  );
};

export default Button;
