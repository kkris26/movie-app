import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { formatDate, formatRating } from "../utilities/Formatter/formatter";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import GenreLabelLink from "../Label/GenreLabelLink";
import { useGlobalContext } from "../../contexts/globalContext";
import DetailsHover from "../Hover/DetailsHover";

const MovieCard = ({ item, type }) => {
  const { favorite, toggleFavorite, loadingGenres } = useGlobalContext();
  return (
    <div className="flex flex-col gap-1 lg:gap-2 ">
      <div className="relative group img-card cursor-pointer rounded-sm overflow-hidden ">
        <Link to={`/movie/${item.id}`}>
          {type === "upcoming" ? (
            <div className="absolute right-2 top-2 md:right-3 md:top-3  bg-red-400 z-2 px-[5px] py-[2px] text-white rounded-xs md:rounded-sm flex items-center gap-1 text-[10px] md:text-xs">
              <p>{formatDate(item.release_date)}</p>
            </div>
          ) : (
            <div className="absolute right-2 top-2 md:right-3 md:top-3 text-white  bg-amber-500 px-[5px] py-[2px] rounded-xs md:rounded-sm flex items-center gap-1 z-2">
              <FaStar className="text-xs md:text-sm" />
              <p className="text-[11px] md:text-xs">
                {formatRating(item.vote_average)}
              </p>
            </div>
          )}
          <div className="inset-0 z-1 absolute  hover:bg-black/20 bg-black/0 transition-all 0.3s"></div>

          <img
            src={import.meta.env.VITE_IMAGE_PATH + item.poster_path}
            alt={item.title}
            className="rounded-xs md:rounded-md aspect-[2/3] w-full object-cover bg-base-300 group-hover:scale-105 transition-all 1s ease-in-out"
          />
        </Link>
      </div>
      <div className="flex mt-1 md:mt-2 lg:mt-0 justify-between items-center gap-1">
        <Link
          to={`/movie/${item.id}`}
          className="text-xs md:text-md lg:text-lg z-1 hover:underline hover:underline-offset-2 cursor-pointer  transition-all 0.3s line-clamp-1"
        >
          {item.title}
        </Link>
        <div
          className="text-xs md:text-md lg:text-lg group cursor-pointer relative"
          onClick={() => toggleFavorite(item)}
        >
          <IoMdHeart
            className={
              favorite.find((fav) => fav.id === item.id)
                ? `block text-red-400`
                : `hidden`
            }
          />
          <IoMdHeartEmpty
            className={
              favorite.find((fav) => fav.id === item.id) ? `hidden ` : `block`
            }
          />
          <DetailsHover
            customClass={`text-[6px] md:text-[8px] lg:text-[11px]  ${
              favorite.find((fav) => fav.id === item.id)
                ? "bg-base-300"
                : "bg-red-400 text-white"
            }`}
          >
            {favorite.find((fav) => fav.id === item.id)
              ? "Remove Favorite"
              : "Add to Favorite"}
          </DetailsHover>
        </div>
      </div>
      <div className="w-full overflow-auto z-0 scroll-thin">
        <ul className="flex gap-[3px] md:gap-[5px] lg:gap-1 flex-wrap">
          {(item.genre_ids ? item.genre_ids : item.genres).length > 0 &&
            (item.genre_ids ? item.genre_ids : item.genres).map(
              (genreId, index) => (
                <GenreLabelLink
                  key={index}
                  genreId={item.genre_ids ? genreId : genreId.id}
                />
              )
            )}
        </ul>
      </div>
    </div>
  );
};

export default MovieCard;
