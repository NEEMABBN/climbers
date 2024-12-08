import React from "react";
import { Element } from "react-scroll";
import RoutesMap from "../../../../Components/RoutesMap";
import SimilarAttractions from "./SimilarAttractions";

export default function TourRouteAttractions({
  sectionName,
  SimilarSection,
  title,
  description,
}) {
  const center = { title: "مرکز", latitude: 35.6892, longitude: 51.389 };
  const locations = [
    { title: "نقطه 1", latitude: 35.7, longitude: 51.4, gps_file: null },
    { title: "نقطه 2", latitude: 35.75, longitude: 51.45, gps_file: null },
  ];
  const tracks = [];
  const points = [];
  const mapZoom = 13;

  return (
    <Element
      name={sectionName}
      className="w-full flex flex-col items-start gap-4 my-9"
    >
      <h2 className="text-Secoundray text-[26px]">{title}</h2>
      <p className="text-Secoundray text-SubTitle">{description}</p>
      <div className="w-full flex flex-col items-center gap-4 border-solid border-Borders border-[1px] rounded-2xl">
        <div className="w-full rounded-2xl overflow-hidden">
          <RoutesMap
            center={center}
            locations={locations}
            tracks={tracks}
            points={points}
            mapZoom={mapZoom}
          />
        </div>

        <SimilarAttractions SimilarAttraction={SimilarSection} />
      </div>
    </Element>
  );
}
