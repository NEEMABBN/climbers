import React from "react";

export default function InformationCustomInput({ label, className }) {
  return (
    <div className={`${className} flex flex-col items-start w-full gap-1`}>
      <label htmlFor="" className="text-Secoundray text-SubTitle">
        {label}
      </label>
      <input
        type="text"
        className="!bg-white !w-full !border-solid !border-Borders !border-[1px] !rounded-2xl !py-2 text-Secoundray text-SubTitle"
      />
    </div>
  );
}
