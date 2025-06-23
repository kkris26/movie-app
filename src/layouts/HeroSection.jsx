import React from "react";

const HeroSection = ({ image }) => {
  return (
    <div className="h-80 bg-cover bg-center relative flex items-center px-10">
      <img
        src={import.meta.env.VITE_IMAGE_PATH_ORIGINAL + image}
        className="absolute inset-0 w-full h-full object-cover"
        alt=""
      />
      <div className="absolute h-full bg-black/20 w-full inset-0"></div>
    </div>
  );
};

export default HeroSection;
