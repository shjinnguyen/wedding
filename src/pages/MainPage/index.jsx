import React from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import WelcomePage from "../WelcomePage";
import StoryPage from "../StoryPage";
import WeddingInfoDetailPage from "../WeddingInfoDetailPage";

import "./styles.scss";

const MainPage = () => {
  return (
    <div className="custom-parallex-wrapper">
      <ParallaxProvider>
        <Parallax speed={-45} className="parallax-image-top-wrapper">
          <div className="parallax-image"></div>
        </Parallax>
        {/* <Parallax speed={0}> */}
        <div className="content-wrapper">
          <WelcomePage />
          <StoryPage />
          <WeddingInfoDetailPage />
        </div>
        {/* </Parallax> */}
      </ParallaxProvider>
    </div>
  );
};

export default MainPage;
