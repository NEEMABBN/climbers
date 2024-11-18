import React from "react";

export default function TemplateV1({ title, children }) {
  return (
    <div className="container mx-auto flex flex-col items-center gap-12">
      <div className="w-full flex items-center justify-between">
        <h2 className="text-3xl text-Titles">{title}</h2>
        <button className="bg-white text-Primary border-solid border-2 border-Primary rounded-2xl px-4 py-2">
          نمایش همه
        </button>
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
}
