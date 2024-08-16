import React, { useContext, useEffect } from "react";
import { Space, Table, Tag } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getValueUserAPI } from "../../redux/nguoiDungSlice";
import { nguoiDungService } from "../../service/nguoiDung.service";
import { NotificationContext } from "../../App";

//thực hiện tạo một servce dùng để quản lý các API về gười dùng
//Cấu hình lại phương thức dùng để xóa trong người dùng trong hệ thống (khi gọi tới phương thức cần truyền id của nugười dùng đang muống xóa)
//Sâu khi cấu hình phương thức  quay trở lại componet manerger và xử lý tạo sự kiênclick tương tác
const ManagerUser = () => {
  const { handleNotification } = useContext(NotificationContext);
  const dispatch = useDispatch();
  const { listUsers } = useSelector((state) => state.nguoiDungSlice);
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
          <button className="bg-yellow-500 text-white py-2 px-5 rounded-md duration-300 hover:bg-yellow-500/90">
            Sửa
          </button>
        </Space>
      ),
    },
  ];
  return <Table columns={columns} dataSource={listUsers} />;
};
export default ManagerUser;
