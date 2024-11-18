import React from "react";
import HomeHeader from "./_components/HomeHeader";
import PopularPlaces from "./_components/PopularPlaces";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center bg-white">
      <HomeHeader />
      <PopularPlaces />
    </div>
  );
}
