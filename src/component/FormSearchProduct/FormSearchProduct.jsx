import React, { Children, useEffect, useState } from "react";
import useResponsive from "../../hook/useResponsive";
import InputCustom from "../../Input/InputCustom";
import Banner from "../Banner/Banner";
import IconSearch from "../Icon/IconSearch";
import { Link, useNavigate } from "react-router-dom";
import { pathDefault } from "../../common/path";
import { congViecService } from "../../service/congviec.service";
import { Dropdown } from "antd";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import useDebounce from "../../hook/useDebounce";

const FormSearchProduct = () => {
  const navigate = useNavigate();
  const [valueSearch, setValueSearch] = useState("");
  const [checkDropdown, setCheckDropdown] = useState(false);
  const [listJobSuggest, setListJobSuggest] = useState([]);
  // console.log(valueSearch);
  const debounceValue = useDebounce(valueSearch, 1000);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(valueSearch);
    navigate(`${pathDefault.listJob}?tenCongViec=${valueSearch}`);
  };
  useEffect(() => {
    // Gọi API lấy dữ liệu sản phẩm để gợi ý người dùng
    if (valueSearch) {
      congViecService
        .layCongViecTheoTen(valueSearch)
        .then((res) => {
     console.log(res)
          const newListJobSuggest = res.data.content
            .slice(0, 4)
            .map((item, index) => {
              return {
                key: index.toString(),
                label: (
                  <Link
                    to={`/cong-viec-chi-tiet/${item.id}`}
                    className="flex items-center space-x-4"
                  >
                    <img src={item.congViec.hinhAnh} className="h-14" alt="" />
                    <div>
                      <h4>{item.congViec.tenCongViec}</h4>
                      <p>Price: ${item.congViec.giaTien}.00</p>
                    </div>
                  </Link>
                ),
              };
            });
          setListJobSuggest(newListJobSuggest);
          setCheckDropdown(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [debounceValue]);
  const handleChange = (event) => {
    setValueSearch(event.target.value);
    console.log(debounceValue);
    if (!event.target.value) {
      setCheckDropdown(false);
    }
    // debounceValue(event.target.value)
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className=" ">
        <Dropdown
          menu={{
            items: listJobSuggest,
          }}
          open={checkDropdown}
        >
          <div className="pl-4 rounded-lg border border-gray-400 flex items-center justify-between min-w-[400px]">
            <input
              type="text"
              placeholder="Vui lòng nhập công việc cần tìm kiếm"
              className="flex-1 focus:border-none focus:outline-none"
              onChange={handleChange}
              value={valueSearch}
            />
            <button type="submit" className="p-2">
              <IconSearch size={30} color="rgb(156 163 175)" />
            </button>
          </div>
        </Dropdown>
      </form>
    </div>
  );
};

export default FormSearchProduct;
