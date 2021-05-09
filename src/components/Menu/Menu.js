import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getSelectedContent, setView } from "./Menu.ducks";
import { createUseStyles } from "react-jss";
import classnames from "classnames";

const useStyles = createUseStyles({
  selected: {
    fontWeight: "bold !important",
    // "@media (min-width: 769px)": {
    //   backgroundColor: "#eee",
    // },
  },
  menu: {
    height: "auto",
    overflow: "hidden",
    boxSizing: "border-box",
    zIndex: 2,
    "@media (max-width: 768px)": {
      display: "flex",
      flexDirection: "column",
      padding: "32px 24px",
      fontSize: "16px",
      width: "100%",
      height: "400px",
      backgroundImage:
        "-webkit-linear-gradient(100deg, transparent 34.5%, #242526 35%, #242526 95%)",
      position: "fixed",
      overflow: "hidden",
      "& > a": {
        color: "#F4F4F4",
        margin: "8px",
        letterSpacing: "1px",
        textDecoration: "none",
        fontWeight: "100",
        "&:hover": {
          textDecoration: "underline",
        },
      },
    },
    "@media (min-width: 769px)": {
      display: "flex",
      flexDirection: "column",
      padding: "0px 24px",
      position: "fixed",
      "& > a:not(:first-child)": {
        "&:hover": {
          backgroundColor: "#f3f3f3",
        },
      },
      "& > a": {
        padding: "6px",
        borderRadius: "4px",
        fontSize: "18px",
        color: "#464646",
        fontWeight: "100",
        textDecoration: "none",
        letterSpacing: "1px",
      },
    },
  },
  hideMenu: {
    top: "-350px",
    transition: "top 330ms",
  },
  showMenu: {
    "@media (max-width: 768px)": {
      top: 0,
      transition: "top 330ms",
    },
  },
  portfolioLabel: {
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
    label: "CONTACT",
    path: "/contact",
  },
];

const Menu = ({ selectedContent, setView }) => {
  const classes = useStyles();
  const isSelected = (label) =>
    label === selectedContent ? classes.selected : "";
  const browserWidth = document.body.clientWidth;
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [showMenu, setShowMenu] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (browserWidth <= 768) {
        const currentScrollPos = window.pageYOffset;
        const showMenu = currentScrollPos <= 180;
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
      <a href="/" className={classes.portfolioLabel}>
        LOUCIL RUBIO
      </a>
      {menuLinks.map((ml) => (
        <Link
          to={ml.path}
          key={ml.label}
          onClick={(e) => setView(ml.label)}
          className={isSelected(ml.label)}
        >
          {ml.label}
        </Link>
      ))}
    </nav>
  );
};

const mapStateToProps = (state) => ({
  selectedContent: getSelectedContent(state),
});

const mapDispatchToProps = {
  setView,
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
