import React from "react";
import CategorieIcon from "../Icon/FeaturesIcon/CategorieIcon";
import LightningIcon from "../Icon/FeaturesIcon/LightningIcon";
import SupportIcon from "../Icon/FeaturesIcon/SupportIcon";
import HandShakeIcon from "../Icon/FeaturesIcon/HandShakeIcon";

const FeaturesSection = () => {
  const sizeIcon = 32;
  const features = [
    {
      icon: <CategorieIcon size={sizeIcon} />,
      title: "Over 700 categories",
      description:
        "Get results from skilled freelancers from all over the world, for every task, at any price point.",
    },
    {
      icon: <HandShakeIcon size={sizeIcon} />,
      title: "Clear, transparent pricing",
      description:
        "Pay per project or by the hour (Pro). Payments only get released when you approve.",
    },
    {
      icon: <LightningIcon size={sizeIcon} />,
      title: "Quality work done faster",
      description:
        "Filter to find the right freelancers quickly and get great work delivered in no time, every time.",
    },
    {
      icon: <SupportIcon size={sizeIcon} />,
      title: "24/7 award-winning support",
      description:
        "Chat with our team to get your questions answered or resolve any issues with your orders.",
    },
  ];

  return (
    <div className="text-left py-16 container">
      <h2 className="text-6xl font-normal mb-10">
        <p>A whole world of freelance</p>
        <p>talent at your fingertips</p>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-left">
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-2xl font-normal mb-2 h-20">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
