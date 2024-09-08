import React, { Children, useEffect, useState } from "react";
import IconSearch from "../Icon/IconSearch";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { pathDefault } from "../../common/path";
import { congViecService } from "../../service/congviec.service";
import { Dropdown } from "antd";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import useDebounce from "../../hook/useDebounce";
import { useTranslation } from "react-i18next";

const FormSearchProduct = ({ classWrapper }) => {
  const { t, i18n } = useTranslation();
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
    setCheckDropdown(false);
    // console.log(listJobSuggest)
    // setListJobSuggest(listJobSuggest)
  };
  useEffect(() => {
    // Gọi API lấy dữ liệu sản phẩm để gợi ý người dùng
    if (valueSearch) {
      congViecService
        .layCongViecTheoTen(valueSearch)
        .then((res) => {
          console.log(res);
          if (res.data.content.length > 0) {
            const newListJobSuggest = res.data.content
              .slice(0, 4)
              .map((item, index) => {
                return {
                  key: index.toString(),
                  label: (
                    <Link
                      to={`${pathDefault.detailListJob.replace(
                        ":jobId",
                        item.id
                      )}`}
                      className="flex items-center space-x-4"
                      key={item.id}
                    >
                      <img
                        src={item.congViec.hinhAnh}
                        className="h-14"
                        alt=""
                      />
                      <div>
                        <h4>{item.congViec.tenCongViec}</h4>
                        <p>Price: ${item.congViec.giaTien}.00</p>
                      </div>
                    </Link>
                  ),
                };
              });
            setListJobSuggest(newListJobSuggest);
          } else {
            setListJobSuggest([
              {
                key: "not-found",
                label: <div className="p-4 text-center">Not Found</div>,
              },
            ]);
          }

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
    <>
      <form onSubmit={handleSubmit} className={classWrapper}>
        <Dropdown
          menu={{
            items: listJobSuggest,
          }}
          open={checkDropdown}
        >
          <div className="notRotate pl-4 rounded-lg border border-gray-400 flex items-center justify-between lg:min-w-[400px] sm:min-w-[300px] ">
            <input
              type="text"
              placeholder={t("What service are you looking for today?")}
              className="flex-1 focus:border-none focus:outline-none"
              onChange={handleChange}
              value={valueSearch}
            />
            <button
              type="submit"
              className="px-3 py-2 rounded-e-lg bg-black hover:bg-black/70"
            >
              <IconSearch size={30} color="rgb(240 240 240)" />
            </button>
          </div>
        </Dropdown>
      </form>
    </>
  );
};

export default FormSearchProduct;
