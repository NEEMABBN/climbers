import React from "react";

export default function InformationCustomSelect({ label, options }) {
  return (
    <div className="w-full flex flex-col items-start gap-1">
      <label htmlFor="" className="text-Secoundray text-SubTitle">
        {label}
      </label>
      <select
        name=""
        id=""
        className="!bg-white !w-full !border-solid !border-Borders !border-[1px] !rounded-2xl !py-2 !text-SubTitle !text-Secoundray"
      >
        {options}
      </select>
    </div>
  );
}
