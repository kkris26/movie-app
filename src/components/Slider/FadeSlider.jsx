import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./slider.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper/modules";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

export default function FadeSlider({ item, customClass }) {
  //   const progressCircle = useRef(null);
  //   const progressContent = useRef(null);
  //   const onAutoplayTimeLeft = (s, time, progress) => {
  //     progressCircle.current.style.setProperty("--progress", 1 - progress);
  //     progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;

  return (
    <>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={1000}
        effect={"fade"}
        modules={[EffectFade, Autoplay, Pagination, Navigation]}
        // onAutoplayTimeLeft={onAutoplayTimeLeft}
        className={customClass}
      >
        {item.slice(0, 5).map((item) => (
          <SwiperSlide>
            {
              <div className="relative h-screen">
                <div className="max-w-7xl mx-auto">
                  <div className="flex h-screen items-center">
                    <div className="z-2 flex flex-col items-start gap-3  lg:gap-4 text-white w-full md:w-150 lg:w-160 px-4 lg:px-0">
                      <h1 className="text-4xl md:text-6xl lg:text-7xl text-start">
                        {item.title}
                      </h1>
                      <p className="text-start text-xs md:text-sm lg:text-md md:w-130 lg:w-150 line-clamp-2">
                        {item.overview}
                      </p>
                      <Link
                        to={"/movie/" + item.id}
                        className="text-md md:text-lg lg:text-xl cursor-pointer border-b font-light flex gap-2 w-max items-center hover:text-white/80"
                      >
                        Start Explore
                        <GoArrowUpRight className="text-xl mb-[-4px]" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/30 z-1"></div>
                <img
                  src={
                    import.meta.env.VITE_IMAGE_PATH_ORIGINAL +
                    item.backdrop_path
                  }
                  className="h-full w-full object-cover absolute inset-0 z-0 hidden md:block"
                />
                <img
                  src={
                    import.meta.env.VITE_IMAGE_PATH_ORIGINAL + item.poster_path
                  }
                  className="h-full w-full object-cover absolute inset-0 z-0 md:hidden block"
                />
              </div>
            }
          </SwiperSlide>
        ))}
        {/* 
        <div
          className="autoplay-progress right-6 bottom-20 hidden"
          slot="container-end"
        >
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div> */}
      </Swiper>
    </>
  );
}
