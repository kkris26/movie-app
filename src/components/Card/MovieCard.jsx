import { Link } from "react-router-dom";

import { FaStar } from "react-icons/fa";
import { formatDate, formatRating } from "../utilities/Formatter/formatter";

const MovieCard = ({ item, genre, type }) => {
  return (
    <div className="flex flex-col gap-3 ">
      <div className="relative group img-card cursor-pointer rounded-sm overflow-hidden ">
        <Link to={`/movie/${item.id}`}>
          {type === "upcoming" ? (
            <div className="absolute right-4 top-4  bg-red-600 px-2 rounded flex items-center gap-1 z-1 text-sm">
              <p>{formatDate(item.release_date)}</p>
            </div>
          ) : (
            <div className="absolute right-4 top-4  bg-amber-500 px-2 rounded flex items-center gap-1 z-1">
              <FaStar className="text-md" />
              <p>{formatRating(item.vote_average)}</p>
            </div>
          )}
          <div className="inset-0 z-1 absolute  hover:bg-black/20 bg-black/0 transition-all 0.3s"></div>

          <img
            src={import.meta.env.VITE_IMAGE_PATH + item.poster_path}
            alt={item.title}
            className="rounded-md w-full object-cover bg-red-600 group-hover:scale-105 transition-all 1s ease-in-out"
          />
        </Link>
      </div>
      <h2 className="text-md cursor-pointer hover:text-primary transition-all 0.3s">
        {item.title}
      </h2>
      <div>
        <ul className="flex gap-2 flex-wrap">
          {item.genre_ids.map((genreId, index) => (
            <li
              className="bg-base-300 p-1 px-2 rounded-md text-xs cursor-pointer hover:bg-base-200  transition-all 0.3s"
              key={index}
            >
              {genre.length > 0 &&
                genre.map((item) => item.id === genreId && item.name)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MovieCard;
