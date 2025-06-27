import React from "react";
import MovieCard from "../components/Card/MovieCard";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import MovieCardLoading from "../components/Loading/MovieCardLoading";
import MovieListWrapper from "./MovieListWrapper";

const MovieListLayout = ({ data, heading, type = "", loading, sectionRef }) => {
  return (
    <MovieListWrapper>
      <div ref={sectionRef} className="flex justify-between w-full z-1">
        <h2 className="text-md md:text-lg lg:text-2xl">{heading}</h2>

        <Link
          to="/"
          className=" text-xs md:text-md  lg:text-lg border-b gap-1 flex items-center hover:text-base-content/80"
        >
          Go Back
          <GoArrowUpRight className="text-sm md:text-lg  lg:text-xl mb-[-4px]" />
        </Link>
      </div>
      <div
        className={`grid ${
          !loading && data.length === 0
            ? ""
            : "grid-cols-2 md:grid-cols-4 lg:grid-cols-5"
        } gap-x-3 gap-y-5 lg:gap-y-10 lg:gap-x-4 `}
      >
        {loading ? (
          [...Array(20)].map((_, idx) => <MovieCardLoading key={idx} />)
        ) : data.length === 0 ? (
          <div className="  flex flex-col gap-4 h-[70vh]  items-center justify-center">
            <p className="text-base-content text-md md:text-2xl text-center">
              {type === "favorite"
                ? "You haven't added any favorites yet."
                : `No ${heading} movies found in this list.`}
            </p>
            <Link
              to={"/"}
              className="underline underline-offset-4 text-sm md:text-lg"
            >
              {type === "favorite"
                ? "Browse Movies"
                : "Try exploring other categories"}
            </Link>
          </div>
        ) : (
          data.map((item) => (
            <MovieCard item={item} key={item.id} type={type} />
          ))
        )}
      </div>
    </MovieListWrapper>
  );
};

export default MovieListLayout;
