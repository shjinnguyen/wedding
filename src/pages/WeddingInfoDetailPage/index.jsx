import React from "react";

import "./styles.scss";

const WeddingInfoDetailPage = () => {
  return (
    <div className="wedding-detail">
      <div className="title">
        LỄ <br />
        THÀNH HÔN
      </div>
      <div
        style={{ display: "flex", justifyContent: "center" }}
        className="time-and-place"
      >
        <div style={{ width: "50%", borderRight: "1px solid black" }}>
          <h3>Thời gian</h3>
          <p>11:00 09/03/2024</p>
        </div>
        <div style={{ width: "50%" }}>
          <h3>Địa điểm</h3>
          <p>
            Mytho Marina - Cảng Du Thuyền Mỹ Tho
            <br />2 Hoàng Sa, Phường 4, Thành phố Mỹ Tho, Tiền Giang
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeddingInfoDetailPage;
