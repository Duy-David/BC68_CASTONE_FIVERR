import React, { useContext, useEffect, useState } from "react";
import { congViecChiTietService } from "../../service/congviecchitiet.service";
import { getCurrentDateTime } from "../../util/utils";
import { NotificationContext } from "../../App";

const CommentBox = ({ avatar }) => {
  const { handleNotification } = useContext(NotificationContext );

  const [comment, setComment] = useState({
    maCongViec: 0,
    maNguoiBinhLuan: 0,
    ngayBinhLuan: getCurrentDateTime(),
    noiDung: "",
    saoBinhLuan: 5,
  });

  // const [isActive, setIsActive] = useState(true);

  const handleChangeTextArea = (event) => {
    const { noiDung, value } = event.target;
    setComment({ ...comment, noiDung: value });
    console.log(event.target.value);
    console.log(comment);
  };

  const handleSubmitTextArea = (event) => {
    event.preventDefault();
    if (comment.noiDung.trim()) {
      setComment(comment.noiDung == "");
      congViecChiTietService
        .binhLuanPost(comment)
        .then((res) => {
          console.log(res);
          setComment({
            maCongViec: 0,
            maNguoiBinhLuan: 0,
            ngayBinhLuan: getCurrentDateTime(),
            noiDung: "",
            saoBinhLuan: 0,
          });
          handleNotification("Thêm bình Luận thành công", "success");
        })
        .catch((err) => {
          console.log(err);
          handleNotification(
            err.response.data.message || err.response.data.content,
            "error"
          );
        });
    }
  };
  return (
    <div className=" mx-auto mt-6">
      <div className="grid grid-cols-12">
        {/* Avatar */}
        <img
          src={avatar} // Replace with the actual avatar URL
          alt="User Avatar"
          className="w-10 h-10 rounded-full mr-4"
        />
        <div className="col-span-11 space-y-2">
          <textarea
            name="noiDung"
            onChange={handleChangeTextArea}
            className="flex-1 border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            rows="4"
            placeholder="Write a comment..."
            value={comment.noiDung}
          ></textarea>

          {/* Submit button */}
          <button
            className=" bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-300 flex items-center"
            onClick={handleSubmitTextArea}
            type="button"
          >
            Add Comment
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommentBox;
