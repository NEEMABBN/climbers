import React from "react";

export default function TemplateV1({ title, children }) {
  return (
    <div className="container mx-auto flex flex-col items-center gap-12">
      <div className="w-full flex items-center md:justify-between justify-center">
        <h2 className="md:text-3xl text-2xl text-Titles">{title}</h2>
        <button className="bg-white md:block hidden text-Primary border-solid border-2 border-Primary rounded-2xl px-4 py-2">
          نمایش همه
        </button>
      </div>
      <div className="w-full sm:mr-0 mr-5">{children}</div>
      <button className="bg-white md:hidden block text-Primary border-solid border-2 border-Primary rounded-2xl px-4 py-2">
        نمایش همه
      </button>
    </div>
  );
}
