import React from "react";
import MovieCard from "../components/Card/MovieCard";

const MovieListLayout = ({
  data,
  genre,
  heading = "Movie List",
  type = "",
  loading,
  height = "h-125",
}) => {
  return (
    <div
      className={`flex flex-col px-10 mt-10 gap-4 ${height}  overflow-hidden`}
    >
      <div className="flex justify-between w-full items-center">
        <h2 className="text-2xl">{heading}</h2>
        <button className="btn btn-outline">View More</button>
      </div>
      <div className="grid grid-cols-5 gap-y-10 gap-x-4 ">
        {loading
          ? [...Array(5)].map((_, idx) => (
              <div className="flex flex-col gap-3 " key={idx}>
                <div className="skeleton h-95 w-full"></div>
                <div className="skeleton h-4 w-[70%]"></div>
              </div>
            ))
          : data.length > 0 &&
            data.map((item) => (
              <MovieCard item={item} key={item.id} genre={genre} type={type} />
            ))}
      </div>
    </div>
  );
};

export default MovieListLayout;
