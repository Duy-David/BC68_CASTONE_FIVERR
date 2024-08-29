import React, { useRef } from "react";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
const Guides = () => {
  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,

    // centerPadding:"100px"
    // className:"px-"
    // pauseOnHover:true,
    // autoplay:true,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       initialSlide: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };
  const guides = [
    {
      imgSrc: "./src/assets/Png/sidehustle.png",
      title: "Start a side business",
    },
    {
      imgSrc:
        "./src/assets/Png/1685561103924-12profitableecommercebusinessideasyoucanstarttoday.png",
      title: "Ecommerce business Ideas",
    },
    {
      imgSrc: "./src/assets/Png/homebasedonlinebusiness-fiverr.png",
      title: "Start an online business and work from home",
    },
    {
      imgSrc:
        "./src/assets/Png/1682363178357-Howtobuildawebsitefromscratch.png",
      title: "Build a Website from Scratch",
    },
    {
      imgSrc: "./src/assets/Png/05-Article-Cover.png",
      title: "Grow your business with AI",
    },
    {
      imgSrc: "./src/assets/Png/business-logo-design-fiverr-guide.png",
      title: "Create a logo for your business",
    },
  ];
  return (
    <div className="container mt-20">
      <h2 class="text-6xl font-normal mb-10 ">Guides to help you grow</h2>
      <div className="relative">
        <Slider {...settings}>
          {guides.map((item, index) => {
            return (
              <div className="px-3" key={index}>
                <img src={item.imgSrc} alt="" className="h-72" />
                <h4 className="font-medium my-4 text-lg">{item.title}</h4>
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="bg-[#4c1a24] text-white text-center px-8 py-10 rounded-lg my-10">
        <h3 className="text-2xl md:text-6xl font-medium mb-14">
          Freelance services at your{" "}
          <span className="text-[#e54a0a]">fingertips!</span>
        </h3>
        <button className="bg-white text-[#4c1a24] py-2 px-4 rounded-lg font-bold hover:bg-[#e54a0a] hover:text-white transition duration-300">
          Join Fiverr
        </button>
      </div>
    </div>
  );
};

export default Guides;
