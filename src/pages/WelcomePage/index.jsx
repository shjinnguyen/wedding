import React from "react";

import "./styles.scss";

const WelcomePage = () => {
  const [showMenu, setShowMenu] = React.useState(false);

  return (
    <div className="welcome-page">
      <div className="content">
        <div className={`header ${showMenu ? "show-menu" : "hidden-menu"}`}>
          <ul className="menu-list">
            <li>
              <a href="google.com">TRANG CHỦ</a>
            </li>
            <li>
              <a href="google.com">CÂU CHUYỆN</a>
            </li>
            <li>
              <a href="google.com">ẢNH CƯỚI</a>
            </li>
            <li>
              <a href="google.com">HÔN LỄ</a>
            </li>
            <li>
              <a href="google.com">CHỈ DẪN</a>
            </li>
            <li>
              <a href="google.com">QUÀ CƯỚI</a>
            </li>
            <li>
              <a href="google.com">TRẢ LỜI</a>
            </li>
          </ul>
          <button className="button-hide" onClick={() => setShowMenu(false)}>
            X
          </button>
        </div>
        {!showMenu && (
          <button className="button-show" onClick={() => setShowMenu(true)}>
            Show Menu
          </button>
        )}
        <div className="information-section">
          <h1>Vĩnh Phúc & Việt Trinh</h1>
          <p id="time-and-place">11:00 09/03/2024 | My Tho Marina</p>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
