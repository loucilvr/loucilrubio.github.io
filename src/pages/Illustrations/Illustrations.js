import React from "react";
import breakfastImg from "../../assets/img/illustrations/his-hers-breakfast.jpg";
import coffeee from "../../assets/img/illustrations/coffeeee.jpeg";
import eucalyptusPlant from "../../assets/img/illustrations/eucalyptus.jpeg";
import commonStyles from "../../common/commonStyles";
import madeleineLatte from "../../assets/img/illustrations/madeleine_latte.png";
import winterWonderlandCabin from "../../assets/img/illustrations/winter_2020.png";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  ...commonStyles,
  illustrations: {
    padding: "32px 0px",
  },
});

const imgStyle = {
  width: "60%",
  display: "block",
  marginBottom: "20px",
  marginLeft: "auto",
  marginRight: "auto",
};

const Illustrations = () => {
  const classes = useStyles();
  return (
    <div>
      <h3 className={classes.heading}>Illustrations</h3>
      <div className={classes.illustrations}>
        <img
          src={winterWonderlandCabin}
          alt="Winter Wonderland Cabin"
          align="center"
          style={{
            ...imgStyle,
          }}
        />
        <img
          src={madeleineLatte}
          alt="French Madeleine & Latte"
          align="center"
          style={{
            ...imgStyle,
          }}
        />
        <img
          src={breakfastImg}
          alt="Breakfast His and Hers Illustration"
          align="center"
          style={{
            ...imgStyle,
          }}
        />
        <img
          src={eucalyptusPlant}
          alt="Eucalyptus Plant"
          align="center"
          style={{
            ...imgStyle,
          }}
        />
        <img
          src={coffeee}
          alt="Pour Over Coffee Set"
          align="center"
          style={{
            border: "1px solid #eee",
            ...imgStyle,
          }}
        />
      </div>
    </div>
  );
};

export default Illustrations;
