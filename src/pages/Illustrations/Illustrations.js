import React from "react";
import breakfastImg from "../../assets/img/illustrations/his-hers-breakfast.jpg";
import coffeee from "../../assets/img/illustrations/coffeeee.jpeg";
import eucalyptusPlant from "../../assets/img/illustrations/eucalyptus.jpeg";
import PageHeading from "../../components/Typography/PageHeading";
import madeleineLatte from "../../assets/img/illustrations/madeleine_latte.png";
import winterWonderlandCabin from "../../assets/img/illustrations/winter_2020.png";
import desert from "../../assets/img/illustrations/desert.png";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
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

const IllustrationImages = [
  { src: desert, alt: "Desert Illustration" },
  { src: winterWonderlandCabin, alt: "Winter Wonderland Cabin" },
  { src: madeleineLatte, alt: "French Madeleine & Latte" },
  { src: breakfastImg, alt: "Breakfast His and Hers Illustration" },
  { src: eucalyptusPlant, alt: "Eucalyptus Plant" },
  { src: coffeee, alt: "Pour Over Coffee Set" },
];

const Illustrations = () => {
  const classes = useStyles();
  return (
    <div>
      <PageHeading title="Illustrations" />
      <div className={classes.illustrations}>
        {IllustrationImages.map((image, index) => (
          <img
            key={`image_${index}`}
            src={image.src}
            alt={image.alt}
            style={{
              border: "1px solid #eee",
              ...imgStyle,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Illustrations;
