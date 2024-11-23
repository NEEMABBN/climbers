import React from "react";
import Images from "../Setting/Images";

export default function EachCommentBoxItem({ name, workArea, comment }) {
  return (
    <div className="bg-[#FAFAFA] hover:bg-white hover:shadow-xl transition-all duration-300 h-fit mb-3 flex flex-col items-start border-solid border-Borders border-[1px] rounded-2xl p-3 gap-1.5">
      <img src={Images.Quotation} alt="" className="" />
      <span className="text-Secoundray text-SubTitle">{name}</span>
      <span className="text-Disable text-sm">{workArea}</span>
      <p className="text-Secoundray line-clamp-[3.5] text-sm leading-6 my-1 border-solid border-Borders border-t-[1px] pt-2.5">
        {comment}
      </p>
    </div>
  );
}
