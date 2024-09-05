import React, { useEffect, useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { getLocalStorage } from "../../util/utils";
import { useDispatch } from "react-redux";
import { getValueUserAPI } from "../../redux/nguoiDungSlice";
import { Link, Outlet } from "react-router-dom";
const { Header, Sider, Content } = Layout;
const Admintemplate = () => {
  const dispatch = useDispatch();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  useEffect(() => {
    let dataLocal = getLocalStorage("user");
    console.log(dataLocal);
    dataLocal.user.role !== "ADMIN"
      ? (window.location.href = "https://www.google.com/")
      : null;
  }, []);

  return (
    <Layout className="min-h-full">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[""]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: <Link to={"/admin/manager-user"}> Quản lý người dùng</Link>,
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: <Link to={"/admin/manager-job"}> Quản lý Công Việc</Link>,
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: <Link>Thêm Công Việc</Link>,
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default Admintemplate;
