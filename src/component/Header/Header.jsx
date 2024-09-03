import React, { useRef, useState } from "react";
import IconLogoHeader from "../Icon/IconLogoHeader";
import { Link, useLocation } from "react-router-dom";
import { pathDefault } from "../../common/path";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import "./header.scss";
import LinkCustom from "../LinkCustom/LinkCustom";
import FormSearchProduct from "../FormSearchProduct/FormSearchProduct";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { congViecService } from "../../service/congviec.service";
import CategoriesJob from "../../component/CategoriesJob/CategoriesJob";
import useResponsive from "../../hook/useResponsive";
import IconFiverrPro from "../Icon/IconFiverrPro";
import IconFiverrPro2 from "../Icon/IconFiverrPro2";
import { useTranslation } from "react-i18next";
// import { changeLanguage } from "i18next";


const Header = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng = 'en'|'vn') => {
    i18n.changeLanguage(lng);
  };
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
          <p className="font-light">
            Professional online courses, led by experts
          </p>
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
  const itemsFiverrPro = [
    {
      key: "1",
      label: (
        <div className="border border-solid border-gray-300 px-3 py-4 rounded">
          <div className="flex items-center gap-5">
            <IconFiverrPro />
            <div>
              <p className="font-bold text-lg">I'm looking to hire</p>
              <p className="text-gray-500">
                My team needs vetted freelance talent
                <br />
                and a premium business solution.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div className="border border-solid border-gray-300 px-3 py-4 rounded">
          <div className="flex items-center gap-5">
            <IconFiverrPro2 />
            <div>
              <p className="font-bold text-lg">I want to offer Pro services</p>
              <p className="text-gray-500">
                I'd like to work on business projects as a<br />
                Pro freelancer or agency
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];
  
  const itemsLanguage = [
    {
      key: "1",
      label: (
        <button
          onClick={() => changeLanguage('en')}
        >
          English
        </button>
      ),
    },
    {
      key: "2",
      label: (
        <button 
        onClick={() => changeLanguage('vn')}
        >
          Tiếng Việt
        </button>
      ),
    },
  ];
  const isResponsive = useResponsive({
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    xxl: 1536,
  });
  const [activeForm, setActiveForm] = useState(false);
  const [activeCategoriesJob, setActiveCategoriesJob] = useState(false);
  const sidebarRef = useRef(null);
  const buttonRef = useRef(null);
  const { pathname } = useLocation();
  const isActiveForm = () => {
    window.scrollY > 350 ? setActiveForm(true) : setActiveForm(false);
  };

  const isActiveCategoriesJob = () => {
    window.scrollY > 500
      ? setActiveCategoriesJob(true)
      : setActiveCategoriesJob(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActiveForm);
    return () => {
      window.removeEventListener("scroll", isActiveForm);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", isActiveCategoriesJob);
    return () => {
      window.removeEventListener("scroll", isActiveCategoriesJob);
    };
  }, []);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        let sideBar = document.querySelector(".sidebar_wrapper");
        sideBar.style.display = "none";
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-white">
      <div className="container py-5">
        <div className="header-content flex justify-between items-center">
          <div className="header-logo flex items-center space-x-4">
            <Link to={pathDefault.homePage}>
              <IconLogoHeader />
            </Link>
            <FormSearchProduct
              classWrapper={`${
                activeForm || pathname !== pathDefault.homePage
                  ? "visible opacity-100"
                  : "invisible opacity-0"
              } duration-300`}
            />
          </div>

          <nav className="header-navigation space-x-5">
            <Dropdown
              menu={{
                items: itemsFiverrPro,
              }}
              trigger={["click"]}
              className="cursor-pointer py-3 px-4Popular services duration-300 rounded-md"
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  Fiverr Pro
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>

            <Dropdown
              menu={{
                items,
              }}
              trigger={["click"]}
              className="cursor-pointer py-3 px-4Popular services duration-300 rounded-md"
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  Explore
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
            <Dropdown
              menu={{
                items: itemsLanguage,
              }}
              trigger={["click"]}
              className="cursor-pointer py-3 px-4Popular services duration-300 rounded-md"
            >
              <a onClick={(e) => e.preventDefault()}>
                <FontAwesomeIcon icon="fa-solid fa-globe" className="px-2" />
                <Space>
                  <button>English</button>
                  {/* <DownOutlined /> */}
                </Space>
              </a>
            </Dropdown>

            <a href="#">{t("seller")}</a>
            <LinkCustom
              content={t("Signin")}
              to={pathDefault.register}
              className={"bg-green-600 text-white"}
            />
            <LinkCustom
              content={t("JOIN")}
              to={pathDefault.login}
              className={"border border-green-500 text-green-500"}
            />
          </nav>
        </div>
      </div>
      {(activeCategoriesJob || pathname !== pathDefault.homePage) &&
        !isResponsive.lg && <CategoriesJob />}
    </header>
  );
};

export default Header;
