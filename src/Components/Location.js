import React, { useState } from "react";
import GoogleMapReact from "google-map-react";

const Location = () => {
  const [center, setCenter] = useState({ lat: -6.2088, lng: 106.8456 });
  const [zoom, setZoom] = useState(15);

  return (
    <div>
      <h2>Find Us At</h2>
      <div id="location">
        <div>
          <p>Address</p>
          <p>Suburb</p>
          <p>City</p>
          <p>Hours</p>
        </div>
        <div
          style={{
            height: "40vh",
            width: "30vw",
            display: "flex",
            justifyContent: "flex-end"
          }}
        >
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyCa4w8L7E_1H3PaIid_rghRouKFt-0iklM"
            }}
            defaultCenter={center}
            defaultZoom={zoom}
          ></GoogleMapReact>
        </div>
      </div>
    </div>
  );
};

export default Location;
