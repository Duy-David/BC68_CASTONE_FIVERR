import React from "react";
import IconLogoHeader from "../Icon/IconLogoHeader";
import { Link } from "react-router-dom";
import { pathDefault } from "../../common/path";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import "./header.scss";
import LinkCustom from "../LinkCustom/LinkCustom";
import FormSearchProduct from "../FormSearchProduct/FormSearchProduct";
const items = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item (disabled)
      </a>
    ),
    icon: <SmileOutlined />,
    disabled: true,
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: "4",
    danger: true,
    label: "a danger item",
  },
];

const Header = () => {
  return (
    <header className="py-5">
      <div className="container">
        <div className="header-content flex justify-between items-center">
          <div className="header-logo flex items-center space-x-4">
            <Link to={pathDefault.homePage}>
              <IconLogoHeader />
            </Link>
              <FormSearchProduct />
          </div>

          <nav className="header-navigation space-x-5">
            <Dropdown
              menu={{
                items,
              }}
              trigger={["click"]}
              className="cursor-pointer py-3 px-4 hover:bg-gray-500 duration-300 rounded-md"
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  Click me
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
            <button>Eng</button>
            <a href="#"> Become a Seller</a>
            <LinkCustom
              content={"Đăng nhập"}
              to={pathDefault.login}
              className={"border border-green-500 text-green-500"}
            />
            <LinkCustom
              content={"Đăng ký"}
              to={pathDefault.register}
              className={"bg-green-600 text-white"}
            />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
