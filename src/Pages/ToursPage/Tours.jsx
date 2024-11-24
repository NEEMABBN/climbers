import React from "react";
import SearchBar from "./_components/SearchBar";
import LastMinuteTours from "./_components/LastMinuteTours";
import SelectedDestinations from "./_components/SelectedDestinations";
import BestSellingTours from "./_components/BestSellingTours";

export default function Tours() {
  return (
    <div className="w-full flex flex-col items-center bg-white">
      <SearchBar />
      <LastMinuteTours />
      <SelectedDestinations />
      <BestSellingTours />
    </div>
  );
}
