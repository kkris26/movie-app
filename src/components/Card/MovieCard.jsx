import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { formatDate, formatRating } from "../utilities/Formatter/formatter";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import GenreLabelLink from "../Label/GenreLabelLink";
import { useGlobalContext } from "../../contexts/globalContext";

const MovieCard = ({ item, type }) => {
  const { favorite, toggleFavorite } = useGlobalContext();

  return (
    <div className="flex flex-col gap-3 ">
      <div className="relative group img-card cursor-pointer rounded-sm overflow-hidden ">
        <Link to={`/movie/${item.id}`}>
          {type === "upcoming" ? (
            <div className="absolute right-3 top-3  bg-red-600 z-2 px-[5px] py-[2px] text-white rounded-sm flex items-center gap-1 z-1 text-xs">
              <p>{formatDate(item.release_date)}</p>
            </div>
          ) : (
            <div className="absolute right-3 top-3 text-white  bg-amber-500 px-[5px] py-[2px] rounded-sm flex items-center gap-1 z-2">
              <FaStar className="text-sm" />
              <p className="text-xs">{formatRating(item.vote_average)}</p>
            </div>
          )}
          <div className="inset-0 z-1 absolute  hover:bg-black/20 bg-black/0 transition-all 0.3s"></div>

          <img
            src={import.meta.env.VITE_IMAGE_PATH + item.poster_path}
            alt={item.title}
            className="rounded-md w-full object-cover bg-base-300 group-hover:scale-105 transition-all 1s ease-in-out"
          />
        </Link>
      </div>
      <div className="flex justify-between items-center gap-1">
        <Link
          to={`/movie/${item.id}`}
          className="text-md z-1 hover:underline hover:underline-offset-2 cursor-pointer hover:text-base-content/70 transition-all 0.3s line-clamp-1"
        >
          {item.title}
        </Link>
        <div
          className="text-lg  cursor-pointer relative"
          onClick={() => toggleFavorite(item)}
        >
          <IoMdHeart
            className={
              favorite.find((fav) => fav.id === item.id) ? `block ` : `hidden`
            }
          />
          <IoMdHeartEmpty
            className={
              favorite.find((fav) => fav.id === item.id) ? `hidden ` : `block`
            }
          />
        </div>
      </div>
      <div className="w-full overflow-auto z-0 scroll-thin">
        <ul className="flex gap-1 flex-wrap">
          {item.genre_ids?.length > 0 &&
            item.genre_ids.map((genreId, index) => (
              <GenreLabelLink key={index} genreId={genreId} />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default MovieCard;
