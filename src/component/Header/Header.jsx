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
  const changeLanguage = (lng = "en" | "vn") => {
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
          {t("Discover")}
          <p className="font-light">{t("Inspiring projects made on Fiverr")}</p>
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
          {t("Community")}
          <p className="font-light">
            {t("Connect with Fiverr’s team and community")}
          </p>
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
          {t("Guides")}
          <p className="font-light">
            {t("In-depth guides covering business topics")}
          </p>
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
          {t("Podcast")}

          <p className="font-light">
            {t("Inside tips from top business minds")}
          </p>
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
          {t("Learn")}{" "}
          <p className="font-light">
            {t(" Professional online courses, led by experts")}
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
          {t("Blog")}
          <p className="font-light">
            {t("News, information and community stories")}
          </p>
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
          {t("Logo Maker")}
          <p className="font-light">{t("Create your logo instantly")}</p>
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
              <p className="font-bold text-lg">{t("I'm looking to hire")}</p>
              <p className="text-gray-500">
                {t(
                  "My team needs vetted freelance talent and a premium business solution."
                )}
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
              <p className="font-bold  text-lg">
                {t("I want to offer Pro services")}
              </p>
              <p className="text-gray-500">
                {t(
                  "I'd like to work on business projects as a Pro freelancer or agency"
                )}
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
      label: <button onClick={() => changeLanguage("en")}>English</button>,
    },
    {
      key: "2",
      label: <button onClick={() => changeLanguage("vn")}>Tiếng Việt</button>,
    },
  ];
  const isResponsive = useResponsive({
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    xxl: 1536,
  });
  // const itemsCollapse = [
  //   {
  //     key: "1",
  //     label: "Browse categories",
  //     children: listProducts.map((item) => renderItem(item.name)),
  //   },
  //   {
  //     key: "2",
  //     label: "Explore",
  //     children: items.map((item) => renderItem(item.title)),
  //   },
  //   {
  //     key: "3",
  //     label: "Fiverr Pro",
  //     children: (
  //       <>
  //         {renderItem("I'm looking to hire")}
  //         {renderItem("I want to offer Pro services")}
  //       </>
  //     ),
  //   },
  // ];
  const [activeForm, setActiveForm] = useState(false);
  const [activeCategoriesJob, setActiveCategoriesJob] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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
    <header className="sticky top-0 z-40 mb-10 bg-white font-macan semibold">
      <div className="container py-4 px-3 sm:px-5  border-b border-gray-300">
        <div className="header-content space-x-2 flex justify-between items-center">
          <div className="header-logo flex items-center space-x-4">
            <Link to={pathDefault.homePage}>
              <IconLogoHeader />
            </Link>
            <FormSearchProduct
              classWrapper={`${
                activeForm || pathname !== pathDefault.homePage
                  ? "visible opacity-100"
                  : "invisible opacity-0"
              } duration-300 w-100`}
            />
          </div>
          {!isResponsive.lg ? (
            <nav className=" space-x-3 flex items-center justify-between ">
              <Dropdown
                menu={{
                  items: itemsFiverrPro,
                }}
                trigger={["click"]}
                className=" hover:cursor-pointer cursor-pointer  py-3 Popular hover:bg-gray-100 services duration-300 rounded-md"
              >
                <div className="" onClick={(e) => e.preventDefault()}>
                  <Space>
                    Fiverr Pro
                    <DownOutlined className="w-3" />
                  </Space>
                </div>
              </Dropdown>

              <Dropdown
                menu={{
                  items,
                }}
                trigger={["click"]}
                className=" cursor-pointer py-3  Popular hover:bg-gray-100 services duration-300 rounded-md hover:cursor-pointer"
              >
                <div onClick={(e) => e.preventDefault()}>
                  <Space>
                    {t("Explore")}
                    <DownOutlined className="w-3" />
                  </Space>
                </div>
              </Dropdown>
              <Dropdown
                menu={{
                  items: itemsLanguage,
                }}
                trigger={["click"]}
                className="cursor-pointer py-3 px-2 hover:text-green-600 Popular services duration-300 rounded-md hover:cursor-pointer"
              >
                <div onClick={(e) => e.preventDefault()} className="notRotate">
                  <FontAwesomeIcon icon="fa-solid fa-globe" className="pr-1" />
                  <Space>
                    <button>{t("English")}</button>
                    {/* <DownOutlined /> */}
                  </Space>
                </div>
              </Dropdown>

              <div className="duration-300 hover:text-green-600 hover:cursor-pointer "  href="#">
                {t("seller")}
              </div>
              <LinkCustom
                content={t("Signin")}
                to={pathDefault.register}
                className={"bg-green-600 text-white "}
              />
              <LinkCustom
                content={t("JOIN")}
                to={pathDefault.login}
                className={"border border-green-500 text-green-500"}
              />
            </nav>
          ) : (
            // Khi màn hình nhỏ hơn lg, hiển thị nút menu

            <button
              className="bg-green-600 text-white px-5 py-2 rounded-md"
              onClick={() => setMenuOpen(!menuOpen)} // Toggle trạng thái mở menu
            >
              {!menuOpen ? (
                <FontAwesomeIcon icon="fa-solid fa-bars" />
              ) : (
                <FontAwesomeIcon icon="fa-solid fa-x" />
              )}
            </button>
          )}
        </div>
      </div>
      {isResponsive.lg && menuOpen && (
        <div className="p-4 bg-gray-100">
          <nav className="space-y-3 flex flex-col items-end">
            <Dropdown menu={{ items }} trigger={["click"]}>
              <a onClick={(e) => e.preventDefault()} className=" hover:cursor-pointer">
                <Space >
                  Fiverr Pro
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
            <Dropdown menu={{ items }} trigger={["click"]} className=" hover:cursor-pointer">
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  {t("Explore")}
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
            <Dropdown
                menu={{
                  items: itemsLanguage,
                }}
                trigger={["click"]}
                className="cursor-pointer py-3 px-2 hover:text-green-600 Popular services duration-300 rounded-md  hover:cursor-pointer"
              >
                <div onClick={(e) => e.preventDefault()} className="notRotate">
                  <FontAwesomeIcon icon="fa-solid fa-globe" className="pr-1" />
                  <Space>
                    <button>{t("English")}</button>
                    {/* <DownOutlined /> */}
                  </Space>
                </div>
             </Dropdown>
            <a className="duration-300 hover:text-green-600  hover:cursor-pointer " href="#">
              {t("seller")}
            </a>
         
            <LinkCustom
              to={pathDefault.register}
              content={t("Signin")}
              className="inline-block  bg-green-600 text-white"
            />
            <LinkCustom
              to={pathDefault.login}
              content={t("JOIN")}
              className="inline-block border border-green-500 text-green-500"
            />
          </nav>
        </div>
      )}
      {(activeCategoriesJob || pathname !== pathDefault.homePage) &&
        !isResponsive.lg && <CategoriesJob />}
    </header>
  );
};

export default Header;
