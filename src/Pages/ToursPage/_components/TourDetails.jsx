import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

export default function TourDetails() {

    // const {id} = useParams();
    // const postId = id.split('-')[0];

    const location = useLocation(); // اطلاعات ارسال‌شده از state
  const { id } = useParams(); // شناسه از URL
  const post = location.state; // داده‌های پست ارسال‌شده

  if (!post) {
    return <p className="text-red-500">پست مورد نظر یافت نشد!</p>;
  }

  return (
    <div className="">{post.location}</div>
  )
}
