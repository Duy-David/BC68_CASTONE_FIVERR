import React, { useEffect, useState } from "react";
import Categories from "../../component/Categories/Categories";
import PopularService from "../../component/PopularService/PopularService";
import Banner from "../../component/Banner/Banner";
import FeaturesSection from "../../component/FeaturesSection/FeaturesSection";
import VideoPlayer from "../../component/VideoPlayer/VideoPlayer";
import ECommerceProject from "../../component/ECommerceProject/ECommerceProject";
import LogoMaker from "../../component/LogoMaker/LogoMaker";
import Guides from "../../component/Guides/Guides";
import About from "../../component/About/About";
import Viewed from "../../component/Viewed/Viewed";

const HomePage = () => {


  return (
    <>

      <Banner/>
      <Categories />
      <Viewed/>
      <PopularService/>
      <FeaturesSection/>
      <VideoPlayer/>
      <ECommerceProject/>
      <About/>
      <LogoMaker/>
      <Guides/>
    </>
  );
};

export default HomePage;
