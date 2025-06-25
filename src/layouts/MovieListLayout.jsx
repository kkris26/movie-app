import React from "react";
import MovieCard from "../components/Card/MovieCard";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import MovieCardLoading from "../components/Loading/MovieCardLoading";
import MovieListWrapper from "./MovieListWrapper";

const MovieListLayout = ({
  data,
  heading,
  type = "",
  loading,
}) => {
  return (
    <MovieListWrapper>
      <div className="flex justify-between w-full items-center z-1">
        <h2 className="text-2xl">{heading}</h2>

        <Link
          to="/"
          className=" border-b gap-1 flex items-center hover:text-base-content/80"
        >
          Go Back
          <GoArrowUpRight className="text-xl mb-[-4px]" />
        </Link>
      </div>
      <div
        className={`grid ${
          !loading && data.length === 0 ? "" : "grid-cols-5"
        } gap-y-10 gap-x-4 `}
      >
        {loading ? (
          [...Array(10)].map((_, idx) => <MovieCardLoading key={idx} />)
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
