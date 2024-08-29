import React, { useState } from "react";
import Slider from "react-slick";
const About = () => {
  const [playingVideoIndex, setPlayingVideoIndex] = useState(null);
  const handlePlayClick = (index) => {
    setPlayingVideoIndex(index);
  };
  const about = [
    {
      company: "Tim and Dan Joo, Co-Founders",
      commnet:
        "When you want to create a business bigger than yourself, you need a lot of help. That's what Fiverr does.",
      logoImg: "./src/assets/Png/haerfest-logo-x2.934ab63.png",
      imgPlay: "./src/assets/JPG/desktop-play-button.bab1740.jpg",
      video: "../src/assets/Video/bsncmkwya3nectkensun.mp4",
      imgAvatar: "./src/assets/JPG/testimonial-video-still-haerfest.jpg",
    },
    {
      company: "Caitlin Tormey, Chief Commercial Officer",
      commnet:
        "We've used Fiverr for Shopify web development, graphic design, and backend web development. Working with Fiverr makes my job a little easier every day.",
      logoImg: "./src/assets/Png/naadam-logo-x2.a79031d.png",
      imgPlay: "./src/assets/JPG/desktop-play-button.bab1740.jpg",
      video: "../src/assets/Video/plfa6gdjihpdvr10rchl.mp4",
      imgAvatar: "./src/assets/JPG/testimonial-video-still-naadam.jpg",
    },
    {
      company: "Kay Kim, Co-Founder",
      commnet:
        "It's extremely exciting that Fiverr has freelancers from all over the world — it broadens the talent pool. One of the best things about Fiverr is that while we're sleeping, someone's working.",
      logoImg: "./src/assets/Png/rooted-logo-x2.7da3bc9.png",
      imgPlay: "./src/assets/JPG/desktop-play-button.bab1740.jpg",

      video: "../src/assets/Video/yja2ld5fnolhsixj3xxw.mp4",
      imgAvatar: "./src/assets/JPG/testimonial-video-still-rooted.jpg",
    },
    {
      company: "Brighid Gannon (DNP, PMHNP-BC), Co-Founder",
      commnet:
        "We used Fiverr for SEO, our logo, website, copy, animated videos — literally everything. It was like working with a human right next to you versus being across the world.",
      logoImg: "./src/assets/Png/lavender-logo-x2.3fff9e7.png",
      imgPlay: "./src/assets/JPG/desktop-play-button.bab1740.jpg",

      video: "../src/assets/Video/rb8jtakrisiz0xtsffwi.mp4",
      imgAvatar: "./src/assets/JPG/testimonial-video-still-lavender.jpg",
    },
  ];
  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    // arrows: true,

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
  return (
    <div className="container">
      <h2 className="h2-title text-5xl my-10 font-bold">
        What they're saying about Fiverr
      </h2>
      <Slider {...settings}>
        {about.map((item, index) => {
          return (
            <div className=" mx-auto p-8">
              <div className="">
                {/* Video Section */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="w-full md:w-1/2 mb-6 md:mb-0">
                    <div className="relative">
                      {playingVideoIndex === index ? (
                        <video
                          src={item.video}
                          controls
                          autoPlay
                          className="w-full rounded-lg"
                        />
                      ) : (
                        <img
                          src={item.imgAvatar}
                          alt="Video Placeholder"
                          className="w-full rounded-lg"
                        />
                      )}
                      {playingVideoIndex !== index && (
                        <button
                          className="absolute inset-0 flex items-center justify-center"
                          onClick={() => handlePlayClick(index)}
                        >
                          <img
                            src={item.imgPlay}
                            alt="Play"
                            className="w-16 h-16"
                          />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Testimonial Section */}
                  <div className="w-full md:w-1/2 md:pl-8">
                    <p className="text-lg text-gray-500  font-normal mb-2">
                      <span className="mr-2">
                      {item.company}</span>|
                      <span className="ml-2">
                        <img
                          src={item.logoImg}
                          alt=""
                          className="w-24 !inline-block"
                        />
                      </span>
                    </p>
                    <p className="italic text-2xl font-semibold text-[#003912] ">
                      "{item.commnet}"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default About;
