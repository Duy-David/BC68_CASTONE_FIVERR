import React, { useEffect, useState } from "react";
import { congViecService } from "../../service/congviec.service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "react-slick";

const Viewed = () => {
  const [listJob, setListJob] = useState([]);
  useEffect(() => {
    congViecService
      .layCongViec()
      .then((res) => {
        console.log(res.data.content);
        setListJob(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
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
          initialSlide: 0,
          infinite: false,
          // dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0,

        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
    initialSlide: 0,

        },
      },
    ],
  };
  console.log(listJob);
  return (
    <div className="container my-16">
      <h2 className=" h2-title text-5xl my-10 font-bold">Recently Viewed & More </h2>
      <Slider font-normal mb-10 {...settings}>
        {listJob.map((item, index) => {
          return (
            <div className=" rounded-lg overflow-hidden px-4 h-96" key={index}>
              <img src={item.hinhAnh} alt="" className=" object-cover" />
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div className=" h-24">
                    <h2 className="text-gray-800 text-lg font-semibold">
                      {item.nguoiTao === 1 ? "Admin" : "User"}
                    </h2>
                    <p className="text-sm text-gray-600">{item.tenCongViec}</p>
                  </div>
                </div>
                <div className="flex  justify-between mt-4">
                  <div className="">
                    <FontAwesomeIcon icon="fa-solid fa-star" />
                    <span className="text-gray-700 ml-1">5.0</span>
                    <span className="text-gray-500 ml-2">({item.danhGia})</span>
                  </div>
                  <span className="bg-yellow-400 text-yellow-800 text-xs px-2 py-1  rounded-sm">
                    Top Rated
                  </span>
                </div>
                <div className="mt-4">
                  <span className="text-gray-800 font-semibold">
                    From US${item.giaTien}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Viewed;
