import React from "react";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ServiceCard from "../ServiceCard/ServiceCard";
import { useTranslation } from "react-i18next";
// import "./PopularService.scss";

const PopularService = () => {
  const { t, i18n } = useTranslation()

  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: true,
    // pauseOnHover:true,
    // autoplay:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const service = [
    {
      title: "Website Development",
      src: "./src/assets/Png/website-development.png",
      color: "#1F8447",
    },
    {
      title: "Logo Design",
      src: "./src/assets/Png/logo-design.png",
      color: "#FF8757",
    },
    { title: "SEO", src: "./src/assets/Png/seo.png", color: "#1F512F" },
    {
      title: "Architecture & Interior Design",
      src: "./src/assets/Png/architecture-design.png",
      color: "#633341",
    },
    {
      title: "Social Media Marketing",
      src: "./src/assets/Png/social-media-marketing.png",
      color: "#7A831F",
    },
    {
      title: "Voice Over",
      src: "./src/assets/Png/voice-over.png",
      color: "#59301F",
    },
    {
      title: "Software Development",
      src: "./src/assets/Png/software-development.png",
      color: "#40591F",
    },
    {
      title: "Data Science & ML",
      src: "./src/assets/Png/data-science.png",
      color: "#8F2900",
    },
    {
      title: "Product Photographers",
      src: "./src/assets/Png/product-photography.png",
      color: "#687200",
    },
    {
      title: "E-Commerce Marketing",
      src: "./src/assets/Png/e-commerce.png",
      color: "#1F8447",
    },
    {
      title: "Video Editing",
      src: "./src/assets//Png/video-editing.png",
      color: "#C66783",
    },
  ];
  return (
    <div className="container my-20">
      <h2 class="h2-title text-5xl my-10 font-bold">Popular services</h2>
      <div className="relative">
        <Slider {...settings}>
          {service.map((item, index) => {
            return (
              <ServiceCard
                title={t(item.title)}
                imageSrc={item.src}
                bgColor={item.color}
                key={index}
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default PopularService;
