import React, { useEffect, useState } from "react";

const HeroLayout = ({ movie }) => {
  const [loading, setLoading] = useState(false);
  let indexImage = 0;
  setInterval(() => {
    const imageBg = document.querySelectorAll(".image-bg");
    imageBg.forEach((image) => {
      image.classList.add("opacity-0");
    });
    indexImage = indexImage == movie.length - 1 ? 0 : indexImage + 1;
    imageBg[indexImage].classList.remove("opacity-0");
  }, 3000);

  return (
    <div className="h-150 relative flex items-center justify-center transition-all duration-300 ease-in-out">
      {movie.map((item, idx) => (
        <img
          key={idx}
          src={import.meta.env.VITE_IMAGE_PATH + item.backdrop_path}
          className={`w-full object-cover absolute inset-0 h-full image-bg  transition-all duration-300 ease-in-out ${
            idx === 0 ? "" : "opacity-0"
          }`}
        />
      ))}
      <div className=" inset-0 absolute bg-black/20"></div>

      <h1 className="z-2 text-8xl text-white">Welcome to Movora</h1>
    </div>
  );
};

export default HeroLayout;
