import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getSelectedContent, setView } from "./Menu.ducks";
import { createUseStyles } from "react-jss";
import classnames from "classnames";

const useStyles = createUseStyles({
  selected: {
    fontWeight: "800 !important",
    color: "#464646 !important",
  },
  menu: {
    position: "fixed",
    top: 0,
    width: "100%",
    height: "50px",
    borderBottom: "1px solid #eee",
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
    cursor: "pointer",
    border: "none",
    backgroundColor: "transparent",
    textAlign: "left",
    textDecoration: "none",
    fontWeight: "600",
    color: "#838383",
    "@media (max-width: 768px)": {
      padding: "6px 14px",
      textDecoration: "none",
      "&:hover": {
        textDecoration: "underline",
      },
    },
    "@media (min-width: 769px)": {
      "&:hover": {
        backgroundColor: "#f3f3f3",
        borderRadius: "4px",
      },
      padding: "6px 20px",
      fontSize: "16px",
      color: "#828282",
    },
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
  {
    label: "Resources",
    path: "/resources",
  },
];

const Menu = ({ setView, history }) => {
  const classes = useStyles();
  const isSelected = (label) => {
    if (label === menuLinks[0].label && history.location.pathname === "/") {
      return classes.selected;
    }
    return history.location.pathname.includes(label.toLowerCase())
      ? classes.selected
      : "";
  };
  return (
    <nav className={classnames(classes.menu, classes.showMenu)}>
      <span className={classes.linkContainer}>
        {menuLinks.map((ml) => (
          <button
            key={ml.label}
            to={ml.path}
            onClick={(e) => {
              history.push(ml.path);
              setView(ml.label);
            }}
            className={classnames(classes.menuButton, isSelected(ml.label))}
          >
            {ml.label}
          </button>
        ))}
      </span>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  selectedContent: getSelectedContent(state),
});

const mapDispatchToProps = {
  setView,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Menu));
