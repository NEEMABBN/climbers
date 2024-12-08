import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const RoutesMap = ({ center, locations, mapZoom = 13 }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    // Initialize map
    const map = L.map(mapRef.current, {
      center: [center.latitude, center.longitude],
      zoom: mapZoom,
      dragging: !L.Browser.mobile,
      scrollWheelZoom: false,
      attributionControl: false,
    });

    // Add base tile layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a>',
    }).addTo(map);

    // Define custom icon for the center marker
    const customIcon = L.icon({
      iconUrl: "/src/assets/Images/MarkerIcon.svg", // Replace with the path to your image
      iconSize: [30, 38], // Adjust size as needed
      iconAnchor: [15, 38], // Anchor point of the icon
    });

    // Add marker at the center
    L.marker([center.latitude, center.longitude], { icon: customIcon })
      .bindPopup(center.title)
      .addTo(map);

    // Add other location markers
    locations.forEach((location, index) => {
      if (!location.gps_file) {
        L.marker([location.latitude, location.longitude], {
          icon: L.icon({
            iconUrl: "/leaflet-elevation/images/elevation-poi.png", // Replace if needed
            iconSize: [12, 12],
          }),
        })
          .bindPopup(`${index + 1}. ${location.title}`)
          .addTo(map);
      }
    });

    // Cleanup function
    return () => {
      map.remove();
    };
  }, [center, locations, mapZoom]);

  return <div ref={mapRef} style={{ width: "100%", height: "300px" }} />;
};

export default RoutesMap;
