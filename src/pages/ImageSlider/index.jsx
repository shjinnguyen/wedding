import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const images = [
  process.env.PUBLIC_URL + "/images/kiss.jpg",
  process.env.PUBLIC_URL + "/images/kiss.jpg",
  process.env.PUBLIC_URL + "/images/kiss.jpg",
];

const ImageSlider = () => {
  return (
    <div className="image-slider">
      <Carousel infiniteLoop={true} interval={2000} showThumbs={false} autoPlay>
        {images.map((image) => (
          <div>
            <img src={image} alt="" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageSlider;
