import React from "react";
import HomeHeader from "./_components/HomeHeader";
import PopularPlaces from "./_components/PopularPlaces";
import BestTours from "./_components/BestTours";
import Reports from "./_components/Reports";
import TripReport from "./_components/TripReport";
import ActiveTeams from "./_components/ActiveTeams";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center bg-white">
      <HomeHeader />
      <PopularPlaces />
      <BestTours />
      <Reports />
      <TripReport />
      <ActiveTeams />
    </div>
  );
}
