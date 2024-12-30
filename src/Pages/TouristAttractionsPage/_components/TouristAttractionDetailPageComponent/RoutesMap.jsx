import React, { useEffect } from "react";
import L from "leaflet";
import Images from "../../../../Setting/Images";
import "../../../../../node_modules/@raruto/leaflet-elevation/dist/leaflet-elevation.min.js";
import "../../../../../node_modules/@raruto/leaflet-elevation/dist/leaflet-elevation.min.css";
import "../../../../../node_modules/@raruto/leaflet-elevation/libs/leaflet-distance-marker.js";
import "../../../../../node_modules/@raruto/leaflet-elevation/libs/leaflet-distance-marker.css";
import "../../../../../node_modules/@raruto/leaflet-elevation/libs/leaflet-gpxgroup.min.js";
import "../../../../../node_modules/leaflet-geometryutil/src/leaflet.geometryutil.js";
import "../../../../../node_modules/leaflet-ui";
import "../../../../../node_modules/leaflet-gpx/gpx.js";
import "../../../../../node_modules/d3/dist/d3.min.js";

const RoutesMap = () => {
  const center = { name: "قله دماوند", lat: 35.95433921, lng: 52.11033763 };
  const routes = [
    {
      name: "جبهه شمالی",
      lat: 35.97777176,
      lng: 52.11131394,
      track: "/GPX/Northern-Front.gpx",
    },
    {
      name: "جبهه شرقی",
      lat: 35.94711,
      lng: 52.142628,
      track: "/GPX/Eastern-Front.gpx",
    },
    {
      name: "جبهه غربی",
      lat: 35.95676659,
      lng: 52.07994819,
      track: "/GPX/Western-Front.gpx",
    },
    {
      name: "جبهه جنوبی",
      lat: 35.92656934,
      lng: 52.10813284,
      track: "/GPX/South-Front.gpx",
    },
  ];
  const mapZoom = 12;

  useEffect(() => {
    const mapElement = document.getElementById("routes-map");

    if (mapElement) {
      const map = L.map("routes-map", {
        resizerControl: false,
        attributionControl: false,
        dragging: !L.Browser.mobile,
      });

      const markers = [];

      // Define Center
      markers.push(
        new L.marker([center.lat, center.lng], {
          icon: L.icon({
            iconUrl: Images.LocationIcon,
            iconSize: [30, 38],
          }),
        })
          .bindPopup(center.name)
          .addTo(map)
      );

      // Define marker for routes
      routes.forEach((route, i) => {
        const marker = new L.marker([route.lat, route.lng, route.track], {
          icon: L.icon({
            iconUrl: Images.LocationIcon,
            iconSize: [12, 12],
          }),
        })
          .bindPopup(`${i + 1}. ${route.name}`)
          .addTo(map);

        markers.push(marker);
      });

      const featureGroup = L.featureGroup(markers).addTo(map);
      map.fitBounds(featureGroup.getBounds(), { padding: [100, 100] });

      map.setZoom(mapZoom);

      map.touchZoom.disable();
      map.scrollWheelZoom.disable();

      // Add zoom control manually if it doesn't exist
      if (!map.zoomControl) {
        L.control.zoom({ position: "bottomleft" }).addTo(map);
      }

      const TopographyControl = L.Control.extend({
        options: {
          position: L.Browser.mobile ? "topleft" : "bottomleft",
        },

        onAdd: function () {
          const btn = L.DomUtil.create("div");
          btn.innerHTML = "🗻";
          btn.className = "leaflet-control";
          btn.setAttribute(
            "style",
            L.Browser.mobile
              ? "width: 34px; height: 34px; cursor: pointer; font-size: 20px; text-align: center; background: #fff; border: 2px solid rgba(0,0,0,0.2); border-radius: 4px; z-index:1000;"
              : "width: 34px; height: 34px; cursor: pointer; font-size: 20px; text-align: center; background: #fff; border: 2px solid rgba(0,0,0,0.2); border-radius: 4px; z-index:1000; margin-bottom: 24px!important;"
          );

          L.DomEvent.on(btn, "click", this._onClick, this);

          return btn;
        },

        _onClick: function () {
          const tileLayer = map.hasLayer(topographicLayer)
            ? defaultLayer
            : topographicLayer;
          map.addLayer(tileLayer);
        },
      });

      const defaultLayer = L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
          attribution: "© OpenStreetMap",
        }
      );
      const topographicLayer = L.tileLayer(
        "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
        {
          attribution: "© OpenStreetMap",
        }
      );

      defaultLayer.addTo(map);
      map.addControl(new TopographyControl());

      // Check and set fullscreen control
      if (!map.fullscreenControl) {
        console.warn("Fullscreen control is not available.");
      } else {
        map.fullscreenControl.setPosition(
          L.Browser.mobile ? "topleft" : "bottomleft"
        );
      }
    }
  }, []);

  return <div id="routes-map" style={{ height: "400px", width: "100%" }}></div>;
};

export default RoutesMap;
