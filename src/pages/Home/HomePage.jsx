import React from "react";
import Categories from "../../component/Categories/Categories";
import PopularService from "../../component/PopularService/PopularService";
import Banner from "../../component/Banner/Banner";
import FeaturesSection from "../../component/FeaturesSection/FeaturesSection";
import VideoPlayer from "../../component/VideoPlayer/VideoPlayer";
import ECommerceProject from "../../component/ECommerceProject/ECommerceProject";
import LogoMaker from "../../component/LogoMaker/LogoMaker";
import Guides from "../../component/Guides/Guides";
import About from "../../component/About/About";

const HomePage = () => {
  return (
    <div>
      <Banner/>
      <Categories />
      <PopularService/>
      <FeaturesSection/>
      <VideoPlayer/>
      <ECommerceProject/>
      <About/>
      <LogoMaker/>
      <Guides/>
    </div>
  );
};

export default HomePage;
