import React, { useEffect, useState } from "react";
import HeroSectionLoad from "../components/Loading/HeroSectionLoad";

const HeroLayout = ({ data, id, loading }) => {
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
        <div className="h-screen relative flex items-center   transition-all duration-300 ease-in-out">
          {data.length > 0 &&
            data.map((item, idx) => (
              <img
                key={idx}
                src={
                  import.meta.env.VITE_IMAGE_PATH_ORIGINAL + item.backdrop_path
                }
                className={`w-full object-cover absolute inset-0 h-full image-bg  transition-all duration-300 ease-in-out
                  ${idx == 0 ? "" : "opacity-0"}
               `}
              />
            ))}
          <div className="flex flex-col gap-4 w-200 mx-40">
            <div className="z-1  flex flex-col gap-6">
              <h1 className="text-8xl text-start">
                Your Gateway to the World of Movies
              </h1>
              <p className="text-start">
                Explore trending titles, discover hidden gems by genre, and stay
                updated with what’s now playing, upcoming, or top rated — all in
                one place. Movora is your personalized home for cinematic
                discovery.
              </p>
              <button className="btn btn-lg btn-outline border-white hover:bg-white hover:text-black rounded-none w-max">
                <a href={`#${id}`}>Start Explore</a>
              </button>
            </div>
          </div>
          <div className=" inset-0 absolute bg-black/30"></div>
        </div>
      )}
    </>
  );
};

export default HeroLayout;
