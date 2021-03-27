import React from "react";
import { createUseStyles } from "react-jss";
import classnames from "classnames";

const useStyles = createUseStyles({
  imageContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "8px",
  },
  imageShadow: {
    boxShadow: "0px 4px 11px #dddddd",
  },
  imageDesc: {
    fontSize: "12px",
    color: "#8e8e8e",
    fontWeight: "bold",
  },
});

const ImageWrapper = ({
  imageSource,
  title,
  altText,
  width,
  useCardShadow = false,
}) => {
  const classes = useStyles(useCardShadow);
  return (
    <div className={classnames(classes.imageContainer)}>
      <p className={classes.imageDesc}>{title}</p>
      <img
        className={classnames(
          classes.image,
          useCardShadow ? classes.imageShadow : ""
        )}
        src={imageSource}
        alt={altText}
        width={width}
      />
    </div>
  );
};

export default ImageWrapper;
