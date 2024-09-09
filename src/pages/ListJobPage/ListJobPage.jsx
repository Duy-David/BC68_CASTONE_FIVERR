import React, { useEffect, useState } from "react";
import {
  Link,
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { congViecService } from "../../service/congviec.service";
import { pathDefault } from "../../common/path";
const ListJobPage = () => {
  const { jobId } = useParams();
  const [searchParam, setSearchParam] = useSearchParams();
  console.log(searchParam.get("tenCongViec"));
  const [listJob, setListJob] = useState([]);
  console.log(listJob);
  useEffect(() => {
    let tenCongViec = searchParam.get("tenCongViec");
    congViecService
      .layCongViecTheoTen(tenCongViec)
      .then((res) => {
        console.log(res);
        setListJob(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [searchParam]);
  const renderListJob = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        {listJob.map((item) => {
          console.log(item);
          return (
            <Link
              to={`${pathDefault.detailListJob.replace(":jobId", item.id)}`}
              key={item.id}
            >
              <div className="border border-gray-300 ">
                <img src={item.congViec.hinhAnh} alt="" className="w-full" />
                <div className="px-3">
                  {/* info author */}
                  <div className="flex space-x-3 items-center mt-2">
                    <img
                      src={item.avatar}
                      alt=""
                      className="w-10 h-10 rounded-full"
                    />
                    {/* tên tác giả và cấp độ */}
                    <div>
                      <h4>{item.tenNguoiTao}</h4>
                      <p>Level 2</p>
                    </div>
                  </div>
                  {/* tên công việc */}
                  <h3>{item.congViec.tenCongViec}</h3>
                  {/* Đánh giá */}
                  <div className=" space-x-2">
                    <i className="fa-solid fa-star text-yellow-500"></i>
                    <span className="text-yellow-500">
                      {item.congViec.saoCongViec}
                    </span>
                    <span className="text-gray-400">
                      ({item.congViec.danhGia})
                    </span>
                  </div>
                  {/* yêu thích và giá tiền */}
                  <div className="flex items-center justify-between border-t border-t-gray-300">
                    <i className="fa-solid fa-heart"></i>
                    <div className="space-x-3">
                      <span className="uppercase">Starting at</span>
                      <span>${item.congViec.giaTien}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}{" "}
      </div>
    );
  };
  return <div className="container"> {renderListJob()}</div>;
};

export default ListJobPage;
