import React from "react";
import { Link } from "react-router-dom";

export default function TemplateV1({ title, children, links }) {
  return (
    <div className="container mx-auto flex flex-col items-center gap-12">
      <div className="w-full flex items-center md:justify-between justify-center">
        <h2 className="md:text-3xl text-2xl text-Titles">{title}</h2>
        <Link
          to={links}
          className="bg-white md:block hidden text-Primary border-solid border-2 border-Primary rounded-2xl px-4 py-2"
        >
          نمایش همه
        </Link>
      </div>
      <div className="w-full sm:pr-0 pr-2">{children}</div>
      <Link
        to={links}
        className="bg-white md:hidden block text-Primary border-solid border-2 border-Primary rounded-2xl px-4 py-2"
      >
        نمایش همه
      </Link>
    </div>
  );
}
