import React from "react";
import MovieCard from "../components/Card/MovieCard";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";

const MovieListLayout = ({
  data,
  genre,
  heading = "Movie List",
  type = "",
  max,
  loading,
  customClass = "",
  btntext = "Go Back",
  btnLink = "/",
}) => {
  return (
    <div className={`flex flex-col gap-4 overflow-hidden  ${customClass} `}>
      <div className="flex justify-between w-full items-center z-1">
        <h2 className="text-2xl">{heading}</h2>

        <Link
          to={btnLink}
          className=" border-b gap-1 flex items-center hover:text-base-content/80"
        >
          {btntext}
          <GoArrowUpRight className="text-xl mb-[-4px]" />
        </Link>
      </div>
      <div
        className={`grid ${
          data.length === 0 ? "" : "grid-cols-5"
        } gap-y-10 gap-x-4 `}
      >
        {loading ? (
          [...Array(5)].map((_, idx) => (
            <div className="flex flex-col gap-3 " key={idx}>
              <div className="skeleton h-95 w-full"></div>
              <div className="skeleton h-4 w-[70%]"></div>
            </div>
          ))
        ) : data.length === 0 ? (
          <div className="h-100 flex flex-col gap-4  w-full  items-center justify-center">
            <p className="text-white text-xl">
              You haven't added any favorites yet.
            </p>
            <Link to={"/"} className="underline underline-offset-4">
              Browse Movies
            </Link>
          </div>
        ) : data.length > 0 && max ? (
          data
            .slice(0, max)
            .map((item) => (
              <MovieCard item={item} key={item.id} genre={genre} type={type} />
            ))
        ) : (
          data.map((item) => (
            <MovieCard item={item} key={item.id} genre={genre} type={type} />
          ))
        )}
      </div>
    </div>
  );
};

export default MovieListLayout;
