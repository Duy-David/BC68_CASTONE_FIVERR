import React, { useContext, useEffect, useState } from "react";
import InputCustom from "../../Input/InputCustom";
import { nguoiDungService } from "../../service/nguoiDung.service";
import { Select, Space } from "antd";
import { NotificationContext } from "../../App";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { quanLyCongViecService } from "../../service/quanLyCongViec.sevice";

export const CreateJob = () => {
  const { handleNotification } = useContext(NotificationContext);
  const { user } = useSelector((state) => state.authSlice);
  const [jobValue, setJobValue] = useState({
    tenCongViec: "",
    danhGia: 0,
    giaTien: 0,
    nguoiTao: 0,
    hinhAnh: "",
    moTa: "",
    maChiTietLoaiCongViec: 0,
    moTaNgan: "",
    saoCongViec: 0,
  });
  const [uploadImage, setUploadImage] = useState(null);
  const [errorImage, setErrorImage] = useState("");
  const handleChangeValue = (event) => {
    const { name, value } = event.target;
    setJobValue({ ...jobValue, [name]: value });
  };
  const handleSubmitAvatar = (event) => {
    event.preventDefault();
    let formData = new FormData();
    if (uploadImage) {
      formData.append("formFile", uploadImage.image);
      quanLyCongViecService
        .postHinhAnhCongViec(jobValue.id, user.token, formData)
        .then((res) => {
          console.log(res);
          handleNotification("Upload ảnh thành công", "success");
          navigate("/admin");
        })
        .catch((err) => {
          console.log(err);
          handleNotification(err.response.data.content, "error");
        });
    }
  };
  const handleCancleAvatar = () => {
    setUploadImage(null);
    setErrorImage("");
  };

  const handleSubmitFormCreateJob = (event) => {
    event.preventDefault();
    //  console.log(userValue);
    quanLyCongViecService
      .postCongViec(user.token)
      .then((res) => {
        console.log(res);
        //đẩy người dùng đế trang update hình ảnh
        // setStep(step + 1);
        setIsActive(false);
        handleNotification("Tạo tài khoản thành công", "success");
      })
      .catch((err) => {
        console.log(err);
        handleNotification(err.response.data.content, "error");
      });
    handleSubmitAvatar;
  };
  return (
    <div>
      <h2 className="font-semibold text-3xl mb-5">
        Form tạo người dùng trong hệ thống
      </h2>
      <form
        className=" space-y-3 grid gap-5"
        onSubmit={handleSubmitFormCreateJob}
      >
        <div className="flex flex-wrap">
          <InputCustom
            contentLabel={"Tên Công việc"}
            placeHolder={"Vui lòng nhập Tên Công việc"}
            classWrapper="w-full p-3"
            name={"tenCongViec"}
            onChange={handleChangeValue}
          />
          <InputCustom
            contentLabel={"Số đánh giá"}
            placeHolder={"Vui lòng nhập số đánh giá"}
            classWrapper="w-1/5 p-3"
            name={"danhGia"}
            onChange={handleChangeValue}
            type="number"
          />
          <InputCustom
            contentLabel={"Giá Tiển"}
            placeHolder={"Vui lòng nhập Giá Tiển"}
            classWrapper="w-1/5 p-3"
            name={"giaTien"}
            onChange={handleChangeValue}
            type="number"
          />
          <InputCustom
            contentLabel={"Sao Công Việc"}
            placeHolder={"Sao Công Việc"}
            classWrapper="w-1/5 p-3"
            name={"saoCongViec"}
            onChange={handleChangeValue}
            type="number"
          />
          <InputCustom
            contentLabel={"Người Tạo"}
            placeHolder={"Người Tạo"}
            classWrapper="w-1/5 p-3"
            name={"nguoiTao"}
            onChange={handleChangeValue}
          />
          <InputCustom
            contentLabel={"Mã Chi tiết"}
            placeHolder={"Vui lòng nhập Mã Chi tiết loại Công Việc"}
            classWrapper="w-1/5 p-3"
            name={"maChiTietLoaiCongViec"}
            onChange={handleChangeValue}
            type="number"
          />
          <InputCustom
            contentLabel={"Mô tả ngắn"}
            placeHolder={"Vui lòng nhập mô tả ngắn"}
            classWrapper="w-full p-3"
            name={"moTaNgan"}
            onChange={handleChangeValue}
          />
          <InputCustom
            contentLabel={"Mô tả"}
            placeHolder={"Vui lòng nhập mô tả"}
            classWrapper="w-full p-3"
            name={"moTa"}
            onChange={handleChangeValue}
          />{" "}
          <div className="w-full p-3">
            <label
              htmlFor=""
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Hình ảnh công việc
            </label>
            <input
              accept="image/png, image/jpeg"
              type="file"
              onChange={(event) => {
                console.log(event.target.files[0]);
                const image = event.target.files[0];

                if (image) {
                  //kiểm tra dung lượng hình, nếu lớn hơn 10MB thì thông báo lỗi và không nhận hình ảnh
                  if (image.size > 1024 * 1024 * 1) {
                    setErrorImage("Hình vượt quá dung lượng cho phép");
                    return;
                  }
                  const imageUrl = URL.createObjectURL(image);
                  console.log(imageUrl);
                  setUploadImage({ image, imageUrl });
                  setErrorImage("");
                }
              }}
            />
          </div>
          <p className="text-red-500 ">{errorImage}</p>
          <div className=" ">
            {" "}
            <img
              src={uploadImage?.imageUrl}
              alt=""
              className=" px-3 w-32 "
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="px-5 py-2 bg-black text-white rounded-md"
          >
            Tạo người dùng
          </button>
        </div>
      </form>
      {/* <form action="" className="space-y-3" onSubmit={handleSubmitAvatar}>
        <h2> upload hình cho người dùng</h2>

        <div className=" space-x-5">
          <button
            type="submit"
            className="px-5 py-2 bg-green-500 text-white rounded-md"
            // to="/admin"
          >
            Upload hình ảnh
          </button>
          <button
            onClick={handleCancleAvatar}
            className="px-5 py-2 bg-red-500 text-white rounded-md"
          >
            Xóa hình ảnh
          </button>
          {/* <button ></button> */}
      {/* </div>
      </form> */}
    </div>
  );
};
