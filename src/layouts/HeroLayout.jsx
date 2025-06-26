import React, { useEffect, useState } from "react";
import HeroSectionLoad from "../components/Loading/HeroSectionLoad";
import { GoArrowUpRight } from "react-icons/go";

const HeroLayout = ({ data, loading, scrollAction }) => {
  let indexImage = 0;
  useEffect(() => {
    const interval = setInterval(() => {
      const imageBg = document.querySelectorAll(".image-bg");
      imageBg.forEach((image) => {
        image.classList.add("opacity-0");
      });
      indexImage = indexImage === data.length - 1 ? 0 : indexImage + 1;
      imageBg[indexImage].classList.remove("opacity-0");
    }, 5000);
    return () => {
      console.log("kill interval");
      clearInterval(interval);
    };
  }, [data]);
  return (
    <>
      {loading.now_playing_movie ? (
        <HeroSectionLoad />
      ) : (
        <div className="h-dvh relative flex items-center transition-all duration-300 ease-in-out">
          {data.length > 0 &&
            data.map((item, idx) => (
              <img
                alt={item.title}
                key={idx}
                src={
                  import.meta.env.VITE_IMAGE_PATH_ORIGINAL + item.backdrop_path
                }
                className={`w-full object-cover absolute inset-0 h-full image-bg  transition-all duration-300 ease-in-out
                  ${idx == 0 ? "" : "opacity-0"}
               `}
              />
            ))}
          <div className="flex w-7xl justify-start mx-auto">
            <div className="z-1 flex place-items-start w-full">
              <div className="flex flex-col items-start gap-3  lg:gap-4 text-white w-full md:w-150 lg:w-160 px-4 lg:px-0">
                <h1 className="text-4xl md:text-6xl lg:text-7xl text-start">
                  Your Gateway to the World of Movies
                </h1>
                <p className="text-start text-xs md:text-sm lg:text-md md:w-130 lg:w-150">
                  Explore trending titles, discover hidden gems by genre, and
                  stay updated with what’s now playing, upcoming, or top rated —
                  all in one place. Movora is your personalized home for
                  cinematic discovery.
                </p>
                <button
                  className="text-md md:text-lg lg:text-xl cursor-pointer border-b font-light flex gap-2 w-max items-center hover:text-white/80"
                  onClick={scrollAction}
                >
                  Start Explore
                  <GoArrowUpRight className="text-xl mb-[-4px]" />
                </button>
              </div>
            </div>
          </div>
          <div className=" inset-0 absolute bg-black/30"></div>
        </div>
      )}
    </>
  );
};

export default HeroLayout;
