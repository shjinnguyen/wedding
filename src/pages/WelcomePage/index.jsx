import React from "react";
import moment from "moment";
import Timer from "./components/Timer.jsx";
import HamburgerIcon from "../../components/icon/HamburgerIcon";
import CloseIcon from "../../components/icon/CloseIcon";

import "./styles.scss";

const WelcomePage = () => {
  const [showMenu, setShowMenu] = React.useState(false);

  const scrollTo = (className) => {
    const element = document.getElementsByClassName(className)[0];
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setShowMenu(false);
  };

  return (
    <div className="welcome-page">
      <div className="content">
        <div className={`header ${showMenu ? "show-menu" : "hidden-menu"}`}>
          <ul className="menu-list">
            <li className="menu-item" onClick={() => scrollTo("welcome-page")}>
              TRANG CHỦ
            </li>
            <li className="menu-item" onClick={() => scrollTo("story-page")}>
              CÂU CHUYỆN
            </li>
            <li className="menu-item" onClick={() => scrollTo("image-slider")}>
              ẢNH CƯỚI
            </li>
            <li
              className="menu-item"
              onClick={() => scrollTo("wedding-detail")}
            >
              HÔN LỄ
            </li>
            <li className="menu-item" onClick={() => scrollTo("map-page")}>
              CHỈ DẪN
            </li>
            <li
              className="menu-item"
              onClick={() => scrollTo("thank-you-wrapper")}
            >
              LỜI CẢM ƠN
            </li>
          </ul>
          <button className="button-hide" onClick={() => setShowMenu(false)}>
            <CloseIcon />
          </button>
        </div>
        {!showMenu && (
          <button className="button-show" onClick={() => setShowMenu(true)}>
            <HamburgerIcon />
          </button>
        )}
        <div className="information-section">
          <h1>Vĩnh Phúc & Việt Trinh</h1>
          <p id="time-and-place">11:00 09/03/2024 | My Tho Marina</p>
          <Timer futureMoment={moment("2024-03-09T11:00:00+07:00")} />
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
