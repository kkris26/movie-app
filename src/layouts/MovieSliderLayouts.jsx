import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useRef, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import MovieCardLoading from "../components/Loading/MovieCardLoading";
import MovieCard from "../components/Card/MovieCard";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import NavigationButton from "../components/Carousel/NavigationButton";
import { Link } from "react-router-dom";
import MovieListWrapper from "./MovieListWrapper";

const MovieSliderLayouts = ({ heading, loading, data, type, link }) => {
  const swiperRef = useRef(null);
  return (
    <>
      <MovieListWrapper>
        <div className="flex justify-between w-full items-center z-1">
          <h2 className="text-2xl">{heading}</h2>
          <div className="flex justify-end gap-2">
            <NavigationButton ref={swiperRef} action={"prev"}>
              <FiChevronLeft className="text-xl" />
            </NavigationButton>
            <NavigationButton ref={swiperRef} action={"next"}>
              <FiChevronRight className="text-xl" />
            </NavigationButton>
          </div>
        </div>
        <Swiper
          className="mySwiper w-full "
          slidesPerView={5}
          spaceBetween={15}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {loading
            ? [...Array(10)].map((_, i) => (
                <SwiperSlide key={i}>
                  <MovieCardLoading />
                </SwiperSlide>
              ))
            : data
                .slice(0, type === "related-movie" ? 10 : 11)
                .map((item, i) => (
                  <SwiperSlide key={i}>
                    {i !== 10 ? (
                      <MovieCard item={item} type={type} />
                    ) : (
                      <div className="h-full">
                        <Link
                          to={link}
                          className=" cursor-pointer flex items-center gap-1 border-b z-3 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
                        >
                          View all
                          <GoArrowUpRight className="text-xl mb-[-4px]" />
                        </Link>
                        <div className="inset-0 absolute z-2"></div>
                        <div className="opacity-15">
                          <MovieCard item={item} type={type} />
                        </div>
                      </div>
                    )}
                  </SwiperSlide>
                ))}
        </Swiper>
      </MovieListWrapper>
    </>
  );
};

export default MovieSliderLayouts;
