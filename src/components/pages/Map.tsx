import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import "./Map.css";

const MapWithMarker: React.FC = () => {
  // Set initial coordinates for the marker
  const initialPosition: LatLngExpression = [51.505, -0.09]; // Example: London
  const [markerPosition, setMarkerPosition] =
    useState<LatLngExpression>(initialPosition);

  // Handle marker drag event
  const onMarkerDragEnd = (event: any) => {
    const newPosition = event.target.getLatLng();
    setMarkerPosition([newPosition.lat, newPosition.lng]);
  };

  return (
    <MapContainer
      center={initialPosition}
      zoom={13}
      style={{ height: "100vh", width: "100%" }}
      className="leaflet-container"
    >
      {/* Add a Tile Layer */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Add a Draggable Marker */}
      <Marker
        position={markerPosition}
        draggable={true}
        eventHandlers={{
          dragend: onMarkerDragEnd,
        }}
      >
        <Popup>
          Current Position: {Array.isArray(markerPosition) ? markerPosition[0].toFixed(5) : "N/A"},{" "}
          {Array.isArray(markerPosition) ? markerPosition[1].toFixed(5) : "N/A"}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapWithMarker;
