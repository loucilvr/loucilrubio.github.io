import React from "react";
import { createUseStyles } from "react-jss";
import classnames from "classnames";

const useStyles = createUseStyles({
  root: {
    fontWeight: "bold",
    borderRadius: "24px",
    padding: "0 16px",
    height: "38px",
    fontSize: "14px",
    cursor: "pointer",
    margin: "0px 4px",
  },
  primary: {
    backgroundColor: "#242526",
    border: "none",
    color: "#ffffff",
    "&:hover": {
      backgroundColor: "#626262",
    },
  },
  secondary: {
    background: "transparent",
    border: "2px solid #242526",
    color: "#242526",
    "&:hover": {
      backgroundColor: "#242526",
      color: "#ffffff",
    },
  },
});

const Button = ({ children, handleClick, variant }) => {
  const classes = useStyles();
  return (
    <button
      className={classnames(
        classes.root,
        variant === "primary" ? classes.primary : classes.secondary
      )}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
