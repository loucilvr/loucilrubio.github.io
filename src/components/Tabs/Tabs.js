import React from "react";
import { createUseStyles } from "react-jss";
import classnames from "classnames";

const useStyles = createUseStyles({
  tabButton: {
    background: "#FFFFFF",
    border: "none",
    fontWeight: 600,
    padding: "8px",
    "&:hover": {
      borderBottom: "2px solid #000000",
      cursor: "pointer",
    },
    margin: "0px 8px",
  },
  tabButtonSelected: {
    borderBottom: "2px solid #000000",
  },
  tabs: {
    margin: "24px",
  },
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
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
