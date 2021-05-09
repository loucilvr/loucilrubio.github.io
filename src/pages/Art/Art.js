import React, { useEffect, useState } from "react";
import breakfastImg from "../../assets/img/illustrations/his-hers-breakfast.jpg";
import coffeee from "../../assets/img/illustrations/coffeeee.jpeg";
import eucalyptusPlant from "../../assets/img/illustrations/eucalyptus.jpeg";
import PageHeading from "../../components/Typography/PageHeading";
import madeleineLatte from "../../assets/img/illustrations/madeleine_latte.png";
import winterWonderlandCabin from "../../assets/img/illustrations/winter_2020.png";
import desert from "../../assets/img/illustrations/desert.png";
import { createUseStyles } from "react-jss";
import heart_latte from "../../assets/img/heart_latte.jpg";
import latte_breakfast from "../../assets/img/latte_breakfast.jpg";
import slow_latte from "../../assets/img/slow_latte.JPG";
import latte_pastries from "../../assets/img/latte_pastries.JPG";
import Tabs from "../../components/Tabs";
import BodyText from "../../components/Typography/BodyText";

const useStyles = createUseStyles({
  illustrations: {
    padding: "32px 0px",
    display: "flex",
    flexWrap: "wrap",
    "@media (min-width: 769px)": {
      width: "800px",
      display: "flex",
      justifyContent: "center",
    },
  },
  artContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

const imgStyle = {
  flexGrow: 1,
  width: "260px",
  margin: "8px",
};

const ART_TYPE = {
  DIGITAL: "Digital",
  WATERCOLOR: "Watercolor",
  LATTE: "Lattes",
  ALL: "All",
};

const IllustrationImages = [
  { src: desert, alt: "Desert Illustration", type: ART_TYPE.DIGITAL },
  {
    src: winterWonderlandCabin,
    alt: "Winter Wonderland Cabin",
    type: ART_TYPE.DIGITAL,
  },
  {
    src: slow_latte,
    alt: "Latte with slow rossetta design",
    type: ART_TYPE.LATTE,
  },
  {
    src: latte_pastries,
    alt: "Latte with home made cream cheese pastries",
    type: ART_TYPE.LATTE,
  },
  {
    src: madeleineLatte,
    alt: "French Madeleine & Latte",
    type: ART_TYPE.DIGITAL,
  },
  { src: heart_latte, alt: "Latte with heart design", type: ART_TYPE.LATTE },
  {
    src: breakfastImg,
    alt: "Breakfast His and Hers Illustration",
    type: ART_TYPE.DIGITAL,
  },
  { src: eucalyptusPlant, alt: "Eucalyptus Plant", type: ART_TYPE.DIGITAL },
  { src: coffeee, alt: "Pour Over Coffee Set", type: ART_TYPE.DIGITAL },
  {
    src: latte_breakfast,
    alt: "Latte with heart design and breakfast biscuit with potatoes",
    type: ART_TYPE.LATTE,
  },
];

const Illustrations = () => {
  const classes = useStyles();
  const [selectedTab, setSelectedTab] = useState(ART_TYPE.DIGITAL);
  const [images, setImages] = useState(IllustrationImages);

  useEffect(() => {
    const imagesToRender = IllustrationImages.filter(
      (image) => image.type === selectedTab
    );
    setImages(imagesToRender);
    if (selectedTab === "All") {
      setImages(IllustrationImages);
    }
  }, [selectedTab]);

  console.log("selectedTab", selectedTab);
  return (
    <div className={classes.artContainer}>
      <PageHeading title="Art" />
      <Tabs
        selectedTab={selectedTab}
        tabs={Object.values(ART_TYPE)}
        handleTabChange={setSelectedTab}
      />
      <div className={classes.illustrations}>
        {images &&
          images.map((image, index) => (
            <img
              key={`image_${index}`}
              src={image.src}
              alt={image.alt}
              style={{
                border: "1px solid #eee",
                ...imgStyle,
              }}
              loading="lazy"
            />
          ))}
        {selectedTab === ART_TYPE.WATERCOLOR && (
          <BodyText>To be published soon :-)</BodyText>
        )}
      </div>
    </div>
  );
};

export default Illustrations;
