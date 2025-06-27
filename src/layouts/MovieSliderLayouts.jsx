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
        <div className="flex  justify-between w-full items-center z-1">
          <h2 className="text-md md:text-2xl">{heading}</h2>
          <div className="flex justify-end gap-1 lg:gap-2">
            <NavigationButton ref={swiperRef} action={"prev"}>
              <FiChevronLeft />
            </NavigationButton>
            <NavigationButton ref={swiperRef} action={"next"}>
              <FiChevronRight />
            </NavigationButton>
          </div>
        </div>
        <Swiper
          className="mySwiper w-full "
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 8,
            },
            640: {
              slidesPerView: 4,
              spaceBetween: 12,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 15,
            },
          }}
        >
          {loading ? (
            [...Array(10)].map((_, i) => (
              <SwiperSlide key={i}>
                <MovieCardLoading />
              </SwiperSlide>
            ))
          ) : data.length === 0 ? (
            <div className="w-full bg-base-200 rounded-md h-80 flex flex-col gap-1 items-center justify-center">
              <h4 className="text-lg">
                {type === "related-movie"
                  ? "No related movies found."
                  : "No movies to display"}
              </h4>
            </div>
          ) : (
            data.slice(0, type === "related-movie" ? 10 : 11).map((item, i) => (
              <SwiperSlide key={i}>
                {i !== 10 ? (
                  <MovieCard item={item} type={type} />
                ) : (
                  <div className="h-full">
                    <Link
                      to={"/category" + link}
                      className="text-xs md:text-sm lg:text-md cursor-pointer flex items-center gap-1 border-b z-3 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
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
            ))
          )}
        </Swiper>
      </MovieListWrapper>
    </>
  );
};

export default MovieSliderLayouts;
