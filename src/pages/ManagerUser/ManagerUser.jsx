import React, { useContext, useEffect, useState } from "react";
import { Modal, Space, Table, Tag } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getValueUserAPI } from "../../redux/nguoiDungSlice";
import { nguoiDungService } from "../../service/nguoiDung.service";
import { NotificationContext } from "../../App";
import InputCustom from "../../Input/InputCustom";
import { useFormik } from "formik";

//thực hiện tạo một servce dùng để quản lý các API về gười dùng
//Cấu hình lại phương thức dùng để xóa trong người dùng trong hệ thống (khi gọi tới phương thức cần truyền id của nugười dùng đang muống xóa)
//Sâu khi cấu hình phương thức  quay trở lại componet manerger và xử lý tạo sự kiênclick tương tác
const ManagerUser = () => {
  const { handleNotification } = useContext(NotificationContext);
  const dispatch = useDispatch();
  const { listUsers } = useSelector((state) => state.nguoiDungSlice);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const {
    handleChange,
    handleSubmit,
    values,
    setFieldValue,
    resetForm,
    setValues,
    handleReset,
    errors,
    touched, //true,false
    handleBlur,
    isValid,
  } = useFormik({
    initialValues: {
      id: 0,
      name: "",
      email: "",
      phone: "",
      birthday: "",
      password: "",
      gender: true,
      role: "",
      skill: [],
      certification: [],
    },
    onSubmit: (value) => {
      // console.log();
      nguoiDungService
        .updateUser(value.id, value)
        .then((res) => {
          console.log(res);
          handleNotification("Sữa dữ liệu thành công", "success");
          dispatch(getValueUserAPI()); // Refresh the user list
          setIsModalOpen(false); // Close the modal
        })
        .catch((err) => {
          console.log(err);
          handleNotification(
            err.response.data.message || err.response.data.content,
            "error"
          );
        });
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .email("Vui lòng nhập định dạng email")
        .required("Vui lòng nhập dữ liệu"),
      msnv: yup
        .string()
        .required("Vui lòng không được bỏ trống")
        .min(4, "Vui lòng nhập trên 4 ký tự")
        .max(8, "Vui lòng nhập ít hơn 8 ký tự"),
      matKhau: yup
        .string()
        .matches(
          /^(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).*$/,
          " Vui lòng nhập bao gồm ít nhất 1 ký tự đặt biệt,1 chữ cái viết hoa, và  trong khoản từ 6 đến 12 ký tự"
        )
        .min(6, "Vui lòng nhập trên 6 ký tự")
        .max(12, "Vui lòng nhập ít hơn 12 ký tự"),
    }),
  });
  console.log(listUsers);
  useEffect(() => {
    dispatch(getValueUserAPI());
  }, []);
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Avatar",
      dataIndex: "avatar",
      key: "avatar",
      render: (text) => {
        return <img className="h-14" src={text} alt="" />;
      },
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      render: (text) => {
        return <Tag color={text ? "blue" : "cyan"}>{text ? "Nam" : "Nữ"}</Tag>;
      },
    },
    {
      title: "Role",
      dataIndex: "role",
      render: (text) => {
        return (
          <Tag color={text == "ADMIN" ? "geekblue-inverse" : "lime-inverse"}>
            {text}
          </Tag>
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
              nguoiDungService
                .deleteUser(record.id)
                .then((res) => {
                  console.log(res);
                  handleNotification(res.data.message, "success");
                  dispatch(getValueUserAPI());
                })
                .catch((err) => {
                  console.log(err);
                  handleNotification(
                    err.response.data.message || err.response.data.content,
                    "error"
                  );
                  dispatch(getValueUserAPI());
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
            title="Form người dùng trong hệ thống"
            open={isModalOpen}
            onOk={handleSubmit}
            onCancel={handleCancel}
          >
            <img src={values.avatar} alt="" className="h-16" />
            <form onSubmit={handleSubmit}>
              <div className="flex flex-wrap">
                <InputCustom
                  contentLabel={"Id"}
                  placeHolder={"Vui lòng nhập ID"}
                  classWrapper="w-1/2 p-3 "
                  name={"id"}
                  value={values.id}
                  disabled={values}
                  onChange={handleChange}
                />
                <InputCustom
                  contentLabel={"Name"}
                  placeHolder={"Vui lòng nhập họ và tên"}
                  classWrapper="w-1/2 p-3"
                  name={"name"}
                  value={values.name}
                  onChange={handleChange}
                />
                <InputCustom
                  contentLabel={"Số điện thoại"}
                  placeHolder={"Vui lòng nhập số điện thoại"}
                  classWrapper="w-1/2 p-3"
                  name={"phone"}
                  value={values.phone}
                  onChange={handleChange}
                />
                <InputCustom
                  contentLabel={"Email"}
                  placeHolder={"Vui lòng nhập email"}
                  classWrapper="w-1/2 p-3"
                  name={"email"}
                  value={values.email}
                  onChange={handleChange}
                />
                <InputCustom
                  contentLabel={"Mật khẩu"}
                  placeHolder={"Vui lòng nhập Mật khẩu"}
                  classWrapper="w-1/2 p-3"
                  name={"password"}
                  value={values.password}
                  type="password"
                  onChange={handleChange}
                />
                <div className="w-1/2 p-3">
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Giới tính
                  </label>
                  <select
                    name="gender"
                    value={values.gender ? "Nam" : "Nữ"}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    onChange={handleChange}
                  >
                    {/* <option value="">Chọn giới tính</option> */}
                    <option value="Nam">Nam</option>
                    <option value="Nữ">Nữ</option>
                  </select>
                </div>
                <InputCustom
                  contentLabel={"Vai trò"}
                  placeHolder={"Vui lòng nhập Vai trò"}
                  classWrapper="w-1/2 p-3"
                  name={"role"}
                  value={values.role}
                  onChange={handleChange}
                />
              </div>
            </form>
          </Modal>
        </Space>
      ),
    },
  ];

  return <Table columns={columns} dataSource={listUsers} />;
};
export default ManagerUser;
