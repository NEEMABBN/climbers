import React from "react";
import DetailButton from "./DetailButton";

export default function EachBlogPost({
  image,
  date,
  title,
  description,
  userName,
  userProfile,
}) {
  return (
    <div className="flex flex-col items-center gap-3.5 bg-white rounded-2xl border-solid border-Borders border-[1px] p-1.5">
      <img
        src={image}
        alt=""
        className="xl:min-w-[300px] xl:h-[200px] rounded-2xl overflow-hidden"
      />
      <span className="text-Disable text-sm w-full text-start px-2">
        {date}
      </span>
      <div className="w-full flex flex-col items-start gap-2 px-2">
        <h3 className="YekanReg text-Secoundray line-clamp-1">{title}</h3>
        <p className="text-sm leading-6 text-Secoundray line-clamp-3">
          {description}
        </p>
      </div>
      <div className="w-full flex items-center justify-between px-2 border-solid border-t-[1px] border-Borders py-2">
        <div className="flex items-center gap-1">
          <img
            src={userProfile}
            alt=""
            className="w-[32.5px] h-[32.5px] rounded-full overflow-hidden"
          />
          <span className="text-sm text-Disable">{userName}</span>
        </div>
        <DetailButton />
      </div>
    </div>
  );
}
