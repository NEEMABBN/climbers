import React from "react";
import EachCommentBoxItem from "../../../Components/EachCommentBoxItem";

export default function CommentsSection() {
  const commentData1 = [
    {
      name: "محمد محمدی",
      workArea: "لیدر کوهنوردی آژانس مهاپرواز ",
      comment: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    },
    {
      name: "محمد محمدی",
      workArea: "لیدر کوهنوردی آژانس مهاپرواز ",
      comment:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت...",
    },
    {
      name: "محمد محمدی",
      workArea: "لیدر کوهنوردی آژانس مهاپرواز ",
      comment: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    },
  ];
  const commentData2 = [
    {
      name: "محمد محمدی",
      workArea: "لیدر کوهنوردی آژانس مهاپرواز ",
      comment:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است لورم ایپسوم",
    },
    {
      name: "محمد محمدی",
      workArea: "لیدر کوهنوردی آژانس مهاپرواز ",
      comment:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت...",
    },
    {
      name: "محمد محمدی",
      workArea: "لیدر کوهنوردی آژانس مهاپرواز ",
      comment:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است لورم ایپسوم",
    },
  ];
  const commentData3 = [
    {
      name: "محمد محمدی",
      workArea: "لیدر کوهنوردی آژانس مهاپرواز ",
      comment:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است لورم ایپسوم",
    },
    {
      name: "محمد محمدی",
      workArea: "لیدر کوهنوردی آژانس مهاپرواز ",
      comment: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    },
    {
      name: "محمد محمدی",
      workArea: "لیدر کوهنوردی آژانس مهاپرواز ",
      comment:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است لورم ایپسوم",
    },
  ];
  const commentData4 = [
    {
      name: "محمد محمدی",
      workArea: "لیدر کوهنوردی آژانس مهاپرواز ",
      comment:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت...",
    },
    {
      name: "محمد محمدی",
      workArea: "لیدر کوهنوردی آژانس مهاپرواز ",
      comment: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    },
    {
      name: "محمد محمدی",
      workArea: "لیدر کوهنوردی آژانس مهاپرواز ",
      comment:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است لورم ایپسوم",
    },
  ];
  const commentData5 = [
    {
      name: "محمد محمدی",
      workArea: "لیدر کوهنوردی آژانس مهاپرواز ",
      comment: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    },
    {
      name: "محمد محمدی",
      workArea: "لیدر کوهنوردی آژانس مهاپرواز ",
      comment:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت...",
    },
    {
      name: "محمد محمدی",
      workArea: "لیدر کوهنوردی آژانس مهاپرواز ",
      comment: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    },
  ];

  return (
    <div className="container mx-auto flex flex-col items-center py-24 gap-12">
      <h2 className="text-3xl text-Titles">نظرات کاربران</h2>
      <div className="w-full flex flex-col items-center overflow-hidden">
        <div className="w-full flex items-start gap-3 h-[650px] overflow-hidden">
          <div className="w-full flex flex-col items-center gap-3">
            {commentData1.map((item, index) => (
              <EachCommentBoxItem
                key={index}
                name={item.name}
                workArea={item.workArea}
                comment={item.comment}
              />
            ))}
          </div>
          <div className="w-full flex flex-col items-center gap-3">
            {commentData2.map((item, index) => (
              <EachCommentBoxItem
                key={index}
                name={item.name}
                workArea={item.workArea}
                comment={item.comment}
              />
            ))}
          </div>
          <div className="w-full flex flex-col items-center gap-3">
            {commentData3.map((item, index) => (
              <EachCommentBoxItem
                key={index}
                name={item.name}
                workArea={item.workArea}
                comment={item.comment}
              />
            ))}
          </div>
          <div className="w-full flex flex-col items-center gap-3">
            {commentData4.map((item, index) => (
              <EachCommentBoxItem
                key={index}
                name={item.name}
                workArea={item.workArea}
                comment={item.comment}
              />
            ))}
          </div>
          <div className="w-full flex flex-col items-center gap-3">
            {commentData5.map((item, index) => (
              <EachCommentBoxItem
                key={index}
                name={item.name}
                workArea={item.workArea}
                comment={item.comment}
              />
            ))}
          </div>
        </div>
        <span className="w-full h-2 shadow-[0_0px_150px_270px_rgba(255,255,255,0.95)]"></span>
      </div>
      <span className="text-Secoundray font-bold translate-y-[-11rem]">
        و 120+ نفر دیگر
      </span>
    </div>
  );
}
