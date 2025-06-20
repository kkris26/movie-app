import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ item, genre }) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="relative img-card cursor-pointer">
        <Link to={`/movie/${item.id}`}>
          <div className="inset-0 absolute  rounded-sm hover:bg-black/40 bg-black/0 transition-all 0.3s"></div>

          <img
            src={import.meta.env.VITE_IMAGE_PATH + item.poster_path}
            alt={item.title}
            className="rounded-sm"
          />
        </Link>
      </div>
      <h2 className="text-xl cursor-pointer hover:text-primary transition-all 0.3s">
        {item.title}
      </h2>
      <div>
        <ul className="flex gap-2 flex-wrap">
          {item.genre_ids.map((genreId, index) => (
            <li
              className="bg-base-300 p-1 px-2 rounded-md text-xs cursor-pointer hover:bg-base-200  transition-all 0.3s"
              key={index}
            >
              {genre.map((item) => item.id === genreId && item.name)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MovieCard;
