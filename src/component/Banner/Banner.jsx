import React from "react";
import FormSearchProduct from "../FormSearchProduct/FormSearchProduct";
import IconBanner from "../Icon/IconBanner";
import { useTranslation } from "react-i18next";

const Banner = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="container min-h-[350px] lg:min-h-[460px] banner-bg">
      {/* <img
        src="./src/assets/wedp/hero-lg-x1.webp"
        className="w-full relative hidden lg:block"
        alt=""
      /> */}
      <div className="bg-none banner-image min-h-[350px] md:min-h-[460px]">
        <div className="w-1/2 mx-auto">
          <h1 class="KQ4yuTW text-5xl text-white font-normal text-center mb-10">
            {t("Find the right")}{" "}
            <span class="font-ddisplay text-green-500">{t("freelance")}</span>{" "}
            {t("service, right away")}
          </h1>
          <FormSearchProduct classWrapper="bg-white rounded-lg " />
          <div className=" text-gray-300 flex gap-6 justify-between mt-10 opacity-50">
            <span className="">{t("Trusted by:")}</span>
            <IconBanner />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
