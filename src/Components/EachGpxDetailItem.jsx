import React from "react";
import Images from "../Setting/Images";

export default function EachGpxDetailItem({
  routeNum,
  direction,
  description,
}) {
  return (
    <div className="w-full flex flex-col items-center border-solid border-Borders border-l-2 pl-2 gap-3">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="text-SubTitle text-Disable">{routeNum}</span>
          <span className="text-base text-Secoundray">{direction}</span>
        </div>
        <button className="text-Primary bg-white rounded-2xl hover:bg-Primary hover:text-white transition-all py-1.5 px-4">
          آپلود فایل GPS
        </button>
      </div>
      <p className="text-SubTitle text-Secoundray leading-6 h-[168px] line-clamp-[7]">
        {description}
      </p>
      <div className="w-full flex justify-end">
        <button className="flex items-center gap-1.5 px-4">
          <img src={Images.NoteIcon} alt="" className="" />
          <span className="text-Primary">گزارش برنامه</span>
        </button>
      </div>
    </div>
  );
}
