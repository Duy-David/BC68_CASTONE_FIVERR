import React, { useEffect, useState } from "react";
import { congViecService } from "../../service/congviec.service";
import { Menu, Dropdown, Space } from "antd";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
const CategoriesJob = () => {
  const [categoryLinks, setCategoryLinks] = useState([]);
  const { t, i18n } = useTranslation();
  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    arrows: true,

    // centerPadding:"100px"
    // className:"px-"
    // pauseOnHover:true,
    // autoplay:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ]
  };
  useEffect(() => {
    congViecService
      .layMenuTheoLoaiCongViec()
      .then((res) => {
        console.log(res.data.content);
        setCategoryLinks(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getMenuItems = (category) => {
    return category.dsNhomChiTietLoai.map((item, itemIndex) => ({
      key: itemIndex,
      label: (
        <div className="flex flex-col">
          <span className="font-bold">{item.tenNhom}</span>
          {item.dsChiTietLoai.map((subItem, subItemIndex) => (
            <span key={subItemIndex} className="text-sm ml-4">
              {t(subItem.tenChiTiet)}
            </span>
          ))}
        </div>
      ),
    }));
  };
  console.log(categoryLinks)
  return (
    <div className="home_category_links border-b border-gray-300 text-gray-700 sm:px-5">
      <div className="container py-1" >
        {/* <Space direction="horizontal" className="flex justify-between"> */}
          <Slider font-normal {...settings}  >
            {categoryLinks.map((category, index) => (
              <Dropdown
                key={index}
                menu={{
                  items: getMenuItems(category),
                }}
                placement="bottomLeft"
              >
                <div className="hover:cursor-pointer hover:text-green-600 text-xl ">
                  {category.tenLoaiCongViec}
                </div>
              </Dropdown>
            ))}
          </Slider>
        {/* </Space> */}
      </div>
    </div>
  );
};

export default CategoriesJob;
