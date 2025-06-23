import React from "react";
import MovieCard from "../components/Card/MovieCard";
import { Link } from "react-router-dom";

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
  fav,
  setFav,
}) => {
  return (
    <div className={`flex flex-col gap-4 overflow-hidden  ${customClass} `}>
      <div className="flex justify-between w-full items-center z-1">
        <h2 className="text-2xl">{heading}</h2>
        <Link to={btnLink} className="btn btn-outline">
          {btntext}
        </Link>
      </div>
      <div className="grid grid-cols-5 gap-y-10 gap-x-4 ">
        {loading
          ? [...Array(5)].map((_, idx) => (
              <div className="flex flex-col gap-3 " key={idx}>
                <div className="skeleton h-95 w-full"></div>
                <div className="skeleton h-4 w-[70%]"></div>
              </div>
            ))
          : data.length > 0 && max
          ? data
              .slice(0, max)
              .map((item) => (
                <MovieCard
                  item={item}
                  key={item.id}
                  genre={genre}
                  type={type}
                  fav={fav}
                  setFav={setFav}
                />
              ))
          : data.map((item) => (
              <MovieCard
                item={item}
                key={item.id}
                genre={genre}
                type={type}
                fav={fav}
                setFav={setFav}
              />
            ))}
      </div>
    </div>
  );
};

export default MovieListLayout;
