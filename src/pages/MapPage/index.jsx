import React from "react";

const MapPage = () => {
  return (
    <div className="map-page">
      <iframe
        title="Google Maps"
        width="100%"
        height="450"
        style={{ border: "0" }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyC94MBF38lClBfbpSbVzbKSAxoQMw8Uxyw&q=Cảng du thuyền Mỹ Tho"
      ></iframe>
    </div>
  );
};

export default MapPage;
