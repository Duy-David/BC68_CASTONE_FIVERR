import React, { useEffect, useState } from "react";
import { congViecService } from "../../service/congviec.service";
import { Menu, Dropdown, Space } from "antd";
import { useTranslation } from "react-i18next";

const CategoriesJob = () => {
  const [categoryLinks, setCategoryLinks] = useState([]);
  const { t, i18n } = useTranslation();

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

  return (
    <div className="home_category_links border-b border-gray-300 text-gray-700 sm:px-5 lg:px-20">
      <div className="container py-1">
        <Space direction="horizontal" className="flex justify-between">
          {categoryLinks.map((category, index) => (
            <Dropdown
              key={index}
              menu={{
                items: getMenuItems(category),
              }}
              placement="bottomLeft"
            >
              <div className="hover:cursor-pointer whitespace-nowrap hover:text-green-600">
                {category.tenLoaiCongViec}
              </div>
            </Dropdown>
          ))}
        </Space>
      </div>
    </div>
  );
};

export default CategoriesJob;
