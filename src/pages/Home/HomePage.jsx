import React from "react";
import Categories from "../../component/Categories/Categories";
import PopularService from "../../component/PopularService/PopularService";
import Banner from "../../component/Banner/Banner";

const HomePage = () => {
  return (
    <div>
      <Banner/>
      <Categories />
      <PopularService/>
    </div>
  );
};

export default HomePage;
