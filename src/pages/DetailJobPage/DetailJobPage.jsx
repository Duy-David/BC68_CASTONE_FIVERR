import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { congViecChiTietService } from "../../service/congviecchitiet.service";
import { Breadcrumb } from "antd";
import ListJobPage from "../ListJobPage/ListJobPage";
import RatingComponent from "../../component/RatingComponent/RatingComponent";
import ReviewComponent from "../../component/ReviewComponent/ReviewComponent";
import CommentBox from "../../component/CommentBox/CommentBox";
const DetailJobPage = () => {
  const [detailJob, setDetailJob] = useState(null);
  const [comment, setComment] = useState(null);
  const { jobId } = useParams();
  console.log(jobId)
  useEffect(() => {
    if (jobId) {
      congViecChiTietService
      .layCongViecChiTiet(jobId)
      .then((res) => {
        console.log(res.data.content);
        setDetailJob(res.data.content[0]);
      })
      .catch((err) => {
        console.log(err);
      });
    congViecChiTietService
      .layBinhLuanTheoCongViec(jobId)
      .then((res) => {
        console.log(res);
        setComment(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
    }
    
  }, [jobId]);

  const commentPost = {
    maCongViec: 0,
    maNguoiBinhLuan: 0,
    ngayBinhLuan: "",
    noiDung: "",
    saoBinhLuan: 0,
  };
  if (!detailJob) {
    return <div>Loading...</div>;
  }
  console.log(detailJob);
  const { avatar, congViec, tenNguoiTao,tenLoaiCongViec, tenNhomChiTietLoai,tenChiTietLoai} = detailJob ;

  const {
    id,
    tenCongViec,
    danhGia,
    saoCongViec,
    hinhAnh,
    moTaNgan,
    giaTien,
    moTa,
  } = congViec;
  console.log(comment);
  return (
    <div className="container">
      <Breadcrumb
        className=" my-4"
        items={[
          {
            title: "Home",
          },
          {
            title: (
              <a href="#" className="hover:text-green-600">
                {tenLoaiCongViec}
              </a>
            ),
          },
          {
            title: (
              <a href="#" className="hover:text-green-600">
                {tenNhomChiTietLoai}
              </a>
            ),
          },
          {
            title: `${tenChiTietLoai}`,
          },
        ]}
      />
      <div className="grid grid-cols-2 md:grid-cols-3">
        <div className="container mx-auto col-span-2 ">
          {/* Job Title and Seller Information */}
          <div className="mb-6">
            <h2 className="text-3xl font-bold">{tenCongViec}</h2>
            <div className="text-sm text-gray-600 mt-2 flex items-center">
              <img
                src={avatar}
                alt="Seller Avatar"
                className="w-8 h-8 rounded-full mr-2"
              />
              <span>
                by{" "}
                <span className="font-semibold">{tenNguoiTao}</span>
                <span className="ml-2 text-yellow-500 bg-yellow-100 px-2 py-1 rounded">
                  Top Rated Seller
                </span>
              </span>
              <span className="ml-4 text-yellow-500">
                ★{saoCongViec}.0 ({danhGia})
              </span>
              <span className="ml-4">| 4 Orders in Queue</span>
            </div>
          </div>

          {/* Buyers Returning Notice */}
          <div className="bg-yellow-100 p-4 rounded-lg mb-6">
            <p className="text-gray-800 font-semibold">
              Buyers keep returning!
              <span className="ml-1 font-normal">
                nofifrazzaq has an exceptional number of repeat buyers.
              </span>
            </p>
          </div>

          {/* Experience Section */}
          <div className="flex items-center">
            <img src={hinhAnh} alt="" className="w-full" />
          </div>
          <div className="my-6">{moTa}</div>
          <div className=" border-t pt-4 grid grid-cols-3 gap-4 mb-6">
            <div>
              <h4 className="font-semibold text-gray-800">
                Programming Language
              </h4>
              <p className="text-gray-600">PHP</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Expertise</h4>
              <p className="text-gray-600">Cross Browser </p>
              <p className="text-gray-600">Compatibility</p>
              <p className="text-gray-600"> PSD to HTML, Performance</p>
            </div>
          </div>

          {/* About The Seller Section */}
          <div className="border-t pt-4">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              About The Seller
            </h3>
            <div className="flex items-center">
              <img
                src={detailJob.avatar}
                alt="Seller Avatar"
                className="w-16 h-16 rounded-full border-2 border-yellow-500 mr-4"
              />
              <div>
                <h4 className="font-bold text-gray-800">
                  {detailJob.tenNguoiTao}
                </h4>
                <p className="text-sm text-gray-600">
                  {detailJob.tenLoaiCongViec}
                </p>
                <div className="flex items-center mt-1">
                  <span className="text-yellow-500 text-lg">
                    {saoCongViec} ★{" "}
                  </span>
                  <span className="ml-2 text-gray-600">{danhGia}</span>
                </div>
              </div>
            </div>
          </div>
          <RatingComponent saoCongViec={saoCongViec} danhGia={danhGia} />
          <ReviewComponent comment={comment} />
          <CommentBox avatar={avatar} />
        </div>
        <div className="sticky top-0 my-5 col-span-2 md:col-span-1 ">
          <div className="col-span-1">
            <div className="max-w-sm mx-auto border border-gray-300 rounded-lg p-6 text-center bg-white">
              <div className="flex justify-between items-center mb-4">
                <span className=" text-2xl font-bold text-green-600">
                  Standard
                </span>
                <span className="text-2xl font-bold">${giaTien}</span>
              </div>

              <p className="mb-4 text-gray-700">{moTaNgan}</p>

              <button className="w-full bg-green-600 text-white py-2 rounded-lg font-bold mb-4">
                Continue ${giaTien}
              </button>

              <div className="flex flex-col items-center">
                <a href="#compare" className="text-green-600 underline mb-2">
                  Compare Packages
                </a>
                <button className="border border-green-600 text-green-600 py-2 px-4 rounded-lg">
                  Get a Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailJobPage;
