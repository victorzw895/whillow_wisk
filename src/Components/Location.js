import React, { useState } from "react";
import GoogleMapReact from "google-map-react";

const Location = () => {
  const [center, setCenter] = useState({ lat: -6.2088, lng: 106.8456 });
  const [zoom, setZoom] = useState(15);

  return (
    <div>
      <h2>LOCATION</h2>
      <div id="location">
        <div>
          <p>123 Some Address Road</p>
          <p>SUBURB, 4567</p>
          <p>Indonesia</p>
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
