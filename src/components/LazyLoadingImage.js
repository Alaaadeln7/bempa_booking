import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const LazyLoadingImage = (props) => (
  <div>
    <LazyLoadImage
      alt={props.alt}
      src={props.image}
      height={"100%"}
      width={"100%"}
      effect="blur"
    />
  </div>
);

export default LazyLoadingImage;
