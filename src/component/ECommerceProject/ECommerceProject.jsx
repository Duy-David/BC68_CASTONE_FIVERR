import React from "react";
import { useTranslation } from "react-i18next";

const ECommerceProject = () => {
  const { t, i18n } = useTranslation();
  return (
    <section
      className=" text-white p-8 md:p-16 rounded-lg container my-20"
      style={{ background: "#003912" }}
    >
      <div className=" flex md:flex-row flex-col  items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-5xl font-semibold">
            fiverr <span className="font-light">pro</span>
          </h2>
          <h3 className="text-6xl font-light my-4">
            {t("New e-Commerce project management service")}{" "}
            <span className="font-bold">{t("made for your business")}</span>
          </h3>
          <p className="mt-10 mb-6">
            {t(`An experienced e-Commerce project manager will plan, coordinate, and execute your project. Overseeing a team of 
    e-Commerce experts, they'll handle everything from site building, design and content to optimization, marketing 
    strategies, and UGC videos.`)}
          </p>
          <h4 className="text-xl font-semibold mb-4">
            {t("To get started, you should have:")}
          </h4>
          <ul className="list-disc pl-6 mb-6">
            <li>
              {t("An e-Commerce project requiring expertise in various fields")}
            </li>
            <li>{t("A budget exceeding $1000")}</li>
            <li>{t("A desire to get things done, without the hassle")}</li>
          </ul>
          <button className="bg-orange-400  text-white py-2 px-8 rounded-lg font-semibold hover:bg-orange-700">
            {t("Get started")}
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src="./src/assets/Png//X1.png"
            alt="E-Commerce Project Management"
            className="rounded-lg "
          />
        </div>
      </div>
    </section>
  );
};

export default ECommerceProject;
7;
