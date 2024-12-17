import React from "react";

export default function SearchBar({ children }) {
  return (
    <div className="w-full bg-[#DFE5E587] py-12">
      <div className="container mx-auto flex md:flex-row flex-col md:items-end items-center gap-5 sm:px-0 px-3">
        {children}
      </div>
    </div>
  );
}
