import React, { useContext, useEffect, useState } from "react";
import { getValueJobAPI } from "../../redux/congViecSlice";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Space, Table, Tag } from "antd";
import { quanLyCongViecService } from "../../service/quanLyCongViec.sevice";
import { NotificationContext } from "../../App";
import InputCustom from "../../Input/InputCustom";
import { useFormik } from "formik";
import * as yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
const ManagerJob = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.authSlice);
  console.log(user.token)
  const { handleNotification } = useContext(NotificationContext);
  const dispatch = useDispatch();
  const { listJob } = useSelector((state) => state.congViecSlice);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    dispatch(getValueJobAPI());
  }, [dispatch]);
  const {
    handleChange,
    handleSubmit,
    values,
    //setFieldValue,
    resetForm,
    setValues,
    handleReset,
    errors,
    touched, 
    handleBlur,
    isValid,
  } = useFormik({
    initialValues: {
      id: 0,
      tenCongViec: "",
      danhGia: 0,
      giaTien: 0,
      nguoiTao: 0,
      hinhAnh: "",
      moTa: "",
      maChiTietLoaiCongViec: 0,
      moTaNgan: "",
      saoCongViec: 0,
    },
    onSubmit: (value) => {
      console.log(value);
      quanLyCongViecService
        .putCongViec(value.id, value, user.token)
        .then((res) => {
          console.log(res);
          handleNotification("Sữa dữ liệu thành công", "success");
          dispatch(getValueJobAPI()); // Refresh the user list
          setIsModalOpen(false); // Close the modal
        })
        .catch((err) => {
          console.log(err);
          console.log(err.response.data.content)
          handleNotification(
            err.response.data.message || err.response.data.content,
            "error"
          );
        });
    },
    validationSchema: yup.object({
      tenCongViec: yup.string().required("Vui lòng nhập dữ liệu"),
      danhGia: yup.number().required("Vui lòng không được bỏ trống"),
      moTa: yup.string().required("Vui lòng không được bỏ trống"),
      giaTien: yup.number().required("Vui lòng không được bỏ trống"),
      moTaNgan: yup.string().required("Vui lòng không được bỏ trống"),
      saoCongViec: yup
        .number()
        .min(1, "Vui lòng đánh giá it nhất là 1 sao")
        .max(5, "Vui lòng đánh giá nhiều nhất là 5 sao")
        .required("Vui lòng không được bỏ trống"),
    }),
  });

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Tên Công Việc",
      dataIndex: "tenCongViec",
      key: "tenCongViec",
    },
    {
      title: "Hình Ảnh",
      dataIndex: "hinhAnh",
      key: "hinhAnh",
      render: (text) => {
        return <img className="h-14" src={text} alt="" />;
      },
    },
    {
      title: "Giá Tiền",
      dataIndex: "giaTien",
      key: "giaTien",
      render: (text) => {
        return <p className="text-red-500 font-medium">{`$${text}`}</p>;
      },
    },
    {
      title: "Đánh Giá",
      dataIndex: "danhGia",
      key: "danhGia",
    },
    {
      title: "Sao Công việc",
      dataIndex: "saoCongViec",
      key: "saoCongViec",
      render: (text) => {
        return (
          <p>
            {text}
            <FontAwesomeIcon icon="fa-solid fa-star" color="yellow" />
          </p>
        );
      },
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle" className="space-x-3">
          <button
            onClick={() => {
              quanLyCongViecService
                .deleteCongViec(record.id,user.token)
                .then((res) => {
                  console.log(res);
                  handleNotification(res.data.message, "success");
                  dispatch(getValueJobAPI());
                })
                .catch((err) => {
                  console.log(err);
                  handleNotification(
                    err.response.data.message || err.response.data.content,
                    "error"
                  );
                  dispatch(getValueJobAPI());
                });
            }}
            className=" bg-red-500 text-white py-2 px-5 rounded-md duration-300 hover:bg-red-500/90 "
          >
            Xóa{" "}
          </button>
          <button
            onClick={() => {
              setIsModalOpen(true);
              setValues(record);
            }}
            className="bg-yellow-500 text-white py-2 px-5 rounded-md duration-300 hover:bg-yellow-500/90"
          >
            Sửa
          </button>
          <Modal
            key={values.id}
            title="Form Công Việc trong hệ thống"
            open={isModalOpen}
            onOk={handleSubmit}
            onCancel={handleCancel}
          >
            <img src={values.hinhAnh} alt="" className="h-16" />
            <form onSubmit={handleSubmit}>
              <div className="flex flex-wrap">
                <InputCustom
                  contentLabel={"Id"}
                  placeHolder={"Vui lòng nhập ID"}
                  classWrapper="w-1/3 p-3 "
                  name={"id"}
                  value={values.id}
                  disabled={values}
                  onChange={handleChange}
                />
                <InputCustom
                  contentLabel={"Tên Công việc"}
                  placeHolder={"Vui lòng nhập Tên Công việc"}
                  classWrapper="w-full p-3"
                  name={"tenCongViec"}
                  value={values.tenCongViec}
                  onChange={handleChange}
                />
                <InputCustom
                  contentLabel={"Số đánh giá"}
                  placeHolder={"Vui lòng nhập số đánh giá"}
                  classWrapper="w-1/4 p-3"
                  name={"danhGia"}
                  value={values.danhGia}
                  onChange={handleChange}
                />
                <InputCustom
                  contentLabel={"Giá Tiển"}
                  placeHolder={"Vui lòng nhập Giá Tiển"}
                  classWrapper="w-1/4 p-3"
                  name={"giaTien"}
                  value={values.giaTien}
                  onChange={handleChange}
                />
                <InputCustom
                  contentLabel={"Sao Công Việc"}
                  placeHolder={"Sao Công Việc"}
                  classWrapper="w-1/4 p-3"
                  name={"saoCongViec"}
                  value={values.saoCongViec}
                  onChange={handleChange}
                />
                <InputCustom
                  contentLabel={"Mã Chi tiết"}
                  placeHolder={"Vui lòng nhập Mã Chi tiết loại Công Việc"}
                  classWrapper="w-1/4 p-3"
                  name={"maChiTietLoaiCongViec"}
                  value={values.maChiTietLoaiCongViec}
                  onChange={handleChange}
                />

                <InputCustom
                  contentLabel={"Mô tả ngắn"}
                  placeHolder={"Vui lòng nhập mô tả ngắn"}
                  classWrapper="w-full p-3"
                  name={"moTaNgan"}
                  value={values.moTaNgan}
                  onChange={handleChange}
                />
                <InputCustom
                  contentLabel={"Mô tả"}
                  placeHolder={"Vui lòng nhập mô tả"}
                  classWrapper="w-full p-3"
                  name={"moTa"}
                  value={values.moTa}
                  onChange={handleChange}
                />
              </div>
            </form>
          </Modal>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-4xl font-bold">Quản lý Công Việc </h2>
        <button
            onClick={() => navigate("/admin/create-job")}
          className="bg-blue-500 text-white py-2 px-5 rounded-md hover:bg-blue-500/90"
        >
          Thêm Công Việc
        </button>
      </div>
      <Table columns={columns} dataSource={listJob} />;
    </div>
  );
};

export default ManagerJob;
