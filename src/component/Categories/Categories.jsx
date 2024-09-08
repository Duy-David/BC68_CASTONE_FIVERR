import React from "react";
import IconProgamming from "../Icon/Categories/IconProgamming";
import IconGraphic from "../Icon/Categories/IconGraphic";
import IconDigital from "../Icon/Categories/IconDigital";
import IconWriting from "../Icon/Categories/IconWriting";
import IconVideo from "../Icon/Categories/IconVideo";
import IconAI from "../Icon/Categories/IconAI";
import IconMusic from "../Icon/Categories/IconMusic";
import IconBussiness from "../Icon/Categories/IconBussiness";
import IconCosulting from "../Icon/Categories/IconCosulting";
import "./Categories.scss";
import { useTranslation } from "react-i18next";

const Categories = () => {
  const size = "20";
  const { t, i18n } = useTranslation();
  const categories = [
    { icon: <IconProgamming size={size} />, title: "Programming & Tech" },
    { icon: <IconGraphic size={size} />, title: "Graphics & Design" },
    { icon: <IconDigital size={size} />, title: "Digital Marketing" },
    { icon: <IconWriting size={size} />, title: "Writing & Translation" },
    { icon: <IconVideo size={size} />, title: "Video & Animation" },
    { icon: <IconAI size={size} />, title: "AI Services" },
    { icon: <IconMusic size={size} />, title: "Music & Audio" },
    { icon: <IconBussiness size={size} />, title: "Business" },
    { icon: <IconCosulting size={size} />, title: "Consulting" },
  ];
  return (
    <div className="container flex justify-center gap-4 mt-5 DTwxxPA">
      {categories.map((item, index) => {
        return (
          <div
            key={index}
            className="bg-white p-5 rounded-xl shadow-lg w-1/2 h-32 items-left text-left rleRWUb"
          >
            <div className="mb-4 QIkI1k0">{item.icon}</div>
            {/* <img src={item.icon} alt={item.title} /> */}
            <h3 className="text-sm font-semibold">{t(item.title)}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
