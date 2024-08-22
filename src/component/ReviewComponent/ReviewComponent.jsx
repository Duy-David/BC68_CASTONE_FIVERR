import React from "react";

const ReviewComponent = ({ comment }) => {
  console.log(comment);
  const review = {
    username: "blackballs49",
    rating: 5,
    country: "United States",
    flag: "🇺🇸", // You can use emojis or an image for the flag
    reviewText:
      "Nofilrazzaq did a great job. I forgot to add a few things and he had no problem fixing what I forgot and making sure I was happy with the end product.",
    publishedDate: "Published 10 months ago",
  };

  return (
    <div className="container mt-8">
      {comment.map((comment) => {
        return (
          <div className="p-4 mt-8 bg-white shadow-md rounded-md  items-start ">
            <div className="flex mb-2">
              <div className="w-10 h-10 rounded-full bg-gray-200 mr-3">
                <img src={comment.avatar} className="rounded-full" alt="" />
              </div>
              <div>
                <div className="flex items-center">
                  <span className="font-semibold">{comment.tenNguoiBinhLuan}</span>
                  <div className="ml-2 text-yellow-500">
                    {"★".repeat(comment.saoBinhLuan)}
                  </div>
                </div>
                <div className="text-sm text-gray-500 flex items-center">
                  <span className="mr-2">US</span>
                </div>
              </div>
            </div>
            <div className="text-gray-700 mb-2">{comment.noiDung}</div>
            <div className="text-gray-500 text-sm mb-2">
              {comment.ngayBinhLuan}
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <button className="mr-4 hover:underline">Helpful</button>
              <button className="hover:underline">Not Helpful</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ReviewComponent;
