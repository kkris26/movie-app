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
          <div className="h-100 flex flex-col gap-4  w-full  items-center justify-center">
            <p className="text-base-content text-xl">
              You haven't added any favorites yet.
            </p>
            <Link to={"/"} className="underline underline-offset-4">
              Browse Movies
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
