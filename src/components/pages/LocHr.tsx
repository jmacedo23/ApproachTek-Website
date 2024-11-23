import React from "react";
import MapWithMarker from "./Map";
import "./LocHr.css";

const LocHr: React.FC = () => {
  return (
    <div className="loc-hr-container">
      <h1>Location and Hours</h1>
      <MapWithMarker />
      {/* Add more content as needed */}
    </div>
  );
};

export default LocHr;
