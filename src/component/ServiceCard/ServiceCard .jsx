import React from "react";

const ServiceCard = ({ title, imageSrc, bgColor }) => {
  return (
    <div className={`rounded-xl w-48`} style={{background: bgColor}}>
      <h3 className="text-white p-3 text-lg font-semibold mb-4 h-16">{title}</h3>
      <div className="rounded-lg py-4 flex justify-center items-center">
        <img src={imageSrc} alt={title} className="rounded-xl max-h-32" />
      </div>
    </div>
  );
};

export default ServiceCard;
