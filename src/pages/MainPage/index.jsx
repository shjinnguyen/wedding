import React from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import WelcomePage from "../WelcomePage";
import StoryPage from "../StoryPage";
import WeddingInfoDetailPage from "../WeddingInfoDetailPage";
import MapPage from "../MapPage";
import ThankYouPage from "../ThankYouPage";

import "./styles.scss";

const MainPage = () => {
  return (
    <div className="custom-parallex-wrapper">
      <ParallaxProvider>
        <Parallax speed={-45} className="parallax-image-top-wrapper">
          <div className="parallax-image"></div>
        </Parallax>
        <div className="content-wrapper">
          <WelcomePage />
          <StoryPage />
          <WeddingInfoDetailPage />
          <MapPage />
          <ThankYouPage />
        </div>
      </ParallaxProvider>
    </div>
  );
};

export default MainPage;
