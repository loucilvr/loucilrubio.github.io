import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getSelectedContent, setView } from "./Menu.ducks";
import { createUseStyles } from "react-jss";
import classnames from "classnames";

const useStyles = createUseStyles({
  selected: {
    fontWeight: "bold !important",
    "@media (min-width: 769px)": {
      color: "#464646 !important",
    },
  },
  menu: {
    zIndex: 2,
    "@media (max-width: 768px)": {
      display: "flex",
      flexDirection: "column",
      padding: "32px 24px",
      fontSize: "16px",
      width: "100%",
      height: "380px",
      backgroundImage:
        "-webkit-linear-gradient(100deg, transparent 34.5%, #242526 35%, #242526 95%)",
      position: "fixed",
      overflow: "hidden",
    },
    "@media (min-width: 769px)": {
      maxWidth: "200px",
      display: "flex",
      flexDirection: "column",
      paddingTop: "200px",
    },
  },
  linkList: {
    display: "flex",
    flexDirection: "column",
  },
  menuButton: {
    cursor: "pointer",
    border: "none",
    backgroundColor: "transparent",
    textAlign: "left",
    letterSpacing: "1px",
    textDecoration: "none",
    "@media (max-width: 768px)": {
      padding: "8px 0",
      color: "#F4F4F4",
      textDecoration: "none",
      fontWeight: "100",
      "&:hover": {
        textDecoration: "underline",
      },
    },
    "@media (min-width: 769px)": {
      "&:hover": {
        backgroundColor: "#f3f3f3",
        borderRadius: "4px",
      },
      padding: "6px",
      fontSize: "16px",
      color: "#828282",
      fontWeight: "100",
    },
  },
  navList: {
    listStyle: "none",
    padding: "38px 0",
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
  portfolioLabel: {
    whiteSpace: "nowrap",
    padding: "6px",
    borderRadius: "4px",
    fontSize: "18px",
    color: "#464646",
    fontWeight: "100",
    textDecoration: "none",
    letterSpacing: "2px",
    "&:hover": {
      textDecoration: "none !important",
    },
    "@media (max-width: 768px)": {
      color: "#bdbdbd",
      padding: "0px 8px 18px 0px",
      fontSize: "14px",
    },
    "@media (min-width: 769px)": {
      marginBottom: "64px",
    },
  },
});

const menuLinks = [
  {
    label: "HOME",
    path: "/",
  },
  {
    label: "EXPERIENCE",
    path: "/experience",
  },
  {
    label: "PROJECTS",
    path: "/projects",
  },
  {
    label: "ART",
    path: "/art",
  },
  {
    label: "RESOURCES",
    path: "/resources",
  },
  {
    label: "CONTACT",
    path: "/contact",
  },
];

const Menu = ({ setView, history }) => {
  const classes = useStyles();
  console.log("history.pathname", history.location.pathname);

  const isSelected = (label) => {
    if (label === "HOME" && history.location.pathname === "/") {
      return classes.selected;
    }
    return history.location.pathname.includes(label.toLowerCase())
      ? classes.selected
      : "";
  };
  const browserWidth = document.body.clientWidth;
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [showMenu, setShowMenu] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (browserWidth <= 768) {
        const currentScrollPos = window.pageYOffset;
        const showMenu = currentScrollPos <= 80;
        setShowMenu(showMenu);
        setPrevScrollPos(currentScrollPos);
      }
    };
    if (browserWidth <= 768) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [browserWidth, prevScrollPos]);
  return (
    <nav
      className={classnames(
        classes.menu,
        showMenu ? classes.showMenu : classes.hideMenu
      )}
    >
      <span className={classes.linkContainer}>
        <a href="/" className={classes.portfolioLabel}>
          LOUCIL RUBIO
        </a>
        <ul className={classes.navList}>
          {menuLinks.map((ml) => (
            <li key={ml.label} className={classes.linkList}>
              <button
                to={ml.path}
                onClick={(e) => {
                  history.push(ml.path);
                  setView(ml.label);
                }}
                className={classnames(classes.menuButton, isSelected(ml.label))}
              >
                {ml.label}
              </button>
            </li>
          ))}
        </ul>
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
