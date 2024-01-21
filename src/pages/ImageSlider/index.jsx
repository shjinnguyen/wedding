import React from "react";
import { Carousel } from "react-responsive-carousel";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-lazy-load-image-component/src/effects/blur.css";

import "./styles.scss";

const images = [
  process.env.PUBLIC_URL + "/images/kiss.jpg",
  process.env.PUBLIC_URL + "/images/kiss-1.jpg",
  process.env.PUBLIC_URL + "/images/kiss-2.jpg",
];

const ImageSlider = () => {
  return (
    <div className="image-slider" style={{ backgroundColor: "white" }}>
      <Carousel infiniteLoop={true} interval={2000} showThumbs={false} autoPlay>
        {images.map((image, index) =>
          index === 0 ? (
            <img src={images[0]} alt="" className="image-item" />
          ) : (
            <div>
              <LazyLoadImage
                src={image}
                alt=""
                effect="blur"
                width="100%"
                className="image-item"
              />
            </div>
          )
        )}
      </Carousel>
    </div>
  );
};

export default ImageSlider;
