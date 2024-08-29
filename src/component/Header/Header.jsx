import React from "react";
import IconLogoHeader from "../Icon/IconLogoHeader";
import { Link } from "react-router-dom";
import { pathDefault } from "../../common/path";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import "./header.scss";
import LinkCustom from "../LinkCustom/LinkCustom";
import FormSearchProduct from "../FormSearchProduct/FormSearchProduct";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const items = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="#"
        className="font-bold"
      >
       Discover
       <p className="font-light">Inspiring projects made on Fiverr</p>
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="#"
        className="font-bold"
      >
       Community
       <p className="font-light">Connect with Fiverr’s team and community</p>
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="#"
        className="font-bold"
      >
       Guides
       <p className="font-light">In-depth guides covering business topics</p>
      </a>
    ),
  },
  {
    key: "4",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="#"
        className="font-bold"
      >
       Podcast
       <p className="font-light">Inside tips from top business minds</p>
      </a>
    ),
  },
  {
    key: "5",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="#"
        className="font-bold"
      >
       Learn
       <p className="font-light">Professional online courses, led by experts</p>
      </a>
    ),
  },
  {
    key: "6",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="#"
        className="font-bold"
      >
       Blog
       <p className="font-light">News, information and community stories</p>
      </a>
    ),
  },
  { 
    key: "7",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="#"
        className="font-bold"
      >
       Logo Maker
       <p className="font-light">Create your logo instantly</p>
      </a>
    ),
  },

];


const categoryLinks = [
  "Graphics & Design",
  "Digital Marketing",
  "Writing & Translation",
  "Video & Animation",
  "Music & Audio",
  "Programming & Tech",
  "Business",
  "Lifestyle",
  "Trending",
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
                  EXPLORE
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
            <button> <FontAwesomeIcon icon="fa-solid fa-globe" /> ENGLISH</button>
            <a href="#"> Become a Seller</a>
            <LinkCustom
              content={"SIGN IN"}
              to={pathDefault.register}
              className={"bg-green-600 text-white"}
            />
            <LinkCustom
              content={"JOIN"}
              to={pathDefault.login}
              className={"border border-green-500 text-green-500"}
            />
         
          </nav>
        </div>
        <div className="mt-4 flex justify-between text-gray-700">
          {categoryLinks.map((category, index) => (
            <a key={index} href="#" className="hover:text-green-500">
              {category}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
