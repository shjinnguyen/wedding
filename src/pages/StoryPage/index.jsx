import React from "react";
import "./styles.scss";

const StoryPage = () => {
  return (
    <div className="story-page">
      <h1>Câu chuyện</h1>
      <h3>CHÚNG TÔI SẮP KẾT HÔN (:</h3>
      <p>
        Tôi là đoạn văn. Nhấp vào đây để thêm văn bản và chỉnh sửa. Dễ thôi. Chỉ
        cần nhấp vào “Chỉnh sửa văn bản” hoặc nhấp đúp để thêm nội dung và thay
        đổi phông chữ. Tôi là nơi tuyệt vời để bạn kể một câu chuyện và cho
        người dùng biết thêm về bạn.
      </p>
      <img
        src={process.env.PUBLIC_URL + "/images/kiss.jpg"}
        alt="kiss"
        width="100%"
      />
    </div>
  );
};

export default StoryPage;
