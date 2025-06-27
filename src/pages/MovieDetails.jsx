import React, { useEffect, useRef, useState } from "react";

import { FaStar } from "react-icons/fa";
import { GoArrowUpRight, GoPerson } from "react-icons/go";
import { IoMdHeart, IoMdHeartEmpty, IoMdTime } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import { Navigate, useParams } from "react-router-dom";
import {
  formatDate,
  formatRating,
} from "../components/utilities/Formatter/formatter";
import ListLabel from "../components/Label/ListLabel";
import GenreLabelLink from "../components/Label/GenreLabelLink";
import ContentLayouts from "../layouts/ContentLayouts";
import { useGlobalContext } from "../contexts/globalContext";
import useGetMovieById from "../hooks/useGetMovieById";
import useGetRelatedMovie from "../hooks/useGetRelatedMovie";
import MovieSliderLayouts from "../layouts/MovieSliderLayouts";

const MovieDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState({
    [id]: true,
    ["relatedMovie-" + id]: true,
    genre: true,
  });

  const { favorite, toggleFavorite, loadingGenres } = useGlobalContext();
  const sectionRef = useRef();
  const { movieById, notFound } = useGetMovieById(setLoading, id);
  const { relatedMovie } = useGetRelatedMovie(setLoading, movieById, id);
  const scroolTo = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  if (notFound) {
    return <Navigate to={"404"} />;
  }
  return (
    <>
      {loading[id] ? (
        <div className="relative h-screen bg-base-200/30 flex items-center px-4 overflow-hidden">
          <div className="absolute inset-0 skeleton bg-base-200/40"></div>
          <div className="absolute inset-0 bg-gradient-to-l z-0"></div>
          <div className="relative z-10 w-7xl mx-auto">
            <div className="md:w-150 flex flex-col gap-3 md:gap-4 lg:gap-5 justify-start text-white">
              <div className="skeleton h-12 md:h-16 lg:h-24 w-3/4 rounded"></div>
              <div className="flex gap-3 md:gap-4 text-xs md:text-sm text-gray-200">
                <div className="flex gap-1 items-center">
                  <div className="skeleton h-4 w-4 rounded-full"></div>
                  <div className="skeleton h-4 w-24 rounded"></div>
                </div>
                <div className="flex gap-1 items-center">
                  <div className="skeleton h-4 w-4 rounded-full"></div>
                  <div className="skeleton h-4 w-16 rounded"></div>
                </div>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-5/6"></div>
              </div>
              <div className="skeleton h-10 w-40 rounded"></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-screen bg-cover relative bg-center flex items-center px-4">
          <img
            src={
              import.meta.env.VITE_IMAGE_PATH_ORIGINAL + movieById.backdrop_path
            }
            className="h-full w-full object-cover absolute inset-0 z-0 md:block hidden"
          />
          <img
            src={
              import.meta.env.VITE_IMAGE_PATH_ORIGINAL + movieById.poster_path
            }
            className="h-full w-full object-cover absolute inset-0 z-0 md:hidden block"
          />
          <div className="w-7xl mx-auto">
            <div className="z-1 relative md:w-150 flex flex-col gap-3 md:gap-4 lg:gap-5 justify-start text-white">
              <h1 className="text-3xl md:text-5xl lg:text-7xl tracking-wider">
                {movieById.title}
              </h1>
              <div className="flex gap-3 md:gap-4 text-xs md:text-sm text-gray-200">
                <div className="flex gap-1 items-center ">
                  <FaStar className="text-yellow-500 text-md" />

                  <div className="flex items-center gap-1">
                    <p>
                      {formatRating(movieById.vote_average)} /{" "}
                      {movieById.vote_count}
                    </p>
                    <IoPersonSharp className="text-[11px]" />
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <IoMdTime className="text-lg" />
                  <p>{movieById.runtime} min</p>
                </div>
              </div>
              <p className="text-gray-200 font-light line-clamp-2 w-full text-sm md:text-md lg:text-lg">
                {movieById.overview}
              </p>
              <button
                onClick={scroolTo}
                className="text-sm md:text-lg lg:text-xl cursor-pointer border-b font-light flex gap-1 lg:gap-2 w-max items-center hover:text-white/80"
              >
                More Details
                <GoArrowUpRight className="text-sm md:text-lg lg:text-xl mb-[-2px] md:mb-[-4px]" />
              </button>
            </div>
          </div>
          <div className="absolute inset-0 bg-linear-to-l from-transparent to-black/70 z-0"></div>
        </div>
      )}
      <>
        <ContentLayouts>
          {loading[id] ? (
            <div className="flex gap-10 items-center max-w-6xl pb-10 lg:pb-18 -mt-10 lg:-mt-12 mx-auto pt-22 lg:pt-30">
              <div className="flex flex-col md:flex-row gap-10 items-center bg-base-100 p-5 md:p-3 lg:p-5 rounded-md w-full">
                <div className="flex items-center p-2 border-2 border-base-content">
                  <div className="skeleton w-40 md:w-60 lg:w-90 h-[300px] rounded-md"></div>
                </div>
                <div className="flex flex-col justify-center flex-1 h-full items-start gap-2 md:gap-3 lg:gap-5 z-1 md:pe-6 lg:pe-10 w-full">
                  <div className="skeleton h-6 md:h-8 lg:h-10 w-3/4 rounded"></div>
                  <div className="flex gap-2 flex-wrap">
                    <div className="skeleton h-5 w-16 rounded-full"></div>
                    <div className="skeleton h-5 w-20 rounded-full"></div>
                    <div className="skeleton h-5 w-14 rounded-full"></div>
                  </div>
                  <div className="skeleton h-4 w-32 rounded"></div>
                  <div className="flex flex-col gap-1 w-full">
                    <div className="skeleton h-4 w-full rounded"></div>
                    <div className="skeleton h-4 w-5/6 rounded"></div>
                    <div className="skeleton h-4 w-2/3 rounded"></div>
                  </div>
                  <div className="flex flex-col gap-1 w-full">
                    <div className="skeleton h-4 w-24 rounded"></div>
                    <div className="flex gap-2 flex-wrap">
                      <div className="skeleton h-5 w-20 rounded-full"></div>
                      <div className="skeleton h-5 w-28 rounded-full"></div>
                    </div>
                  </div>
                  <div className="skeleton h-10 w-48 rounded mt-2"></div>
                </div>
              </div>
            </div>
          ) : (
            <div
              ref={sectionRef}
              className="flex gap-10 items-center max-w-6xl pb-10 lg:pb-18 -mt-10 lg:-mt-12 mx-auto pt-22 lg:pt-30"
            >
              <div className="flex flex-col md:flex-row  gap-6 lg:gap-10 items-center bg-base-200/50 p-5 md:p-3 lg:p-5 rounded-md w-full">
                <div className=" flex items-center p-2 border-2 border-base-content ">
                  <img
                    src={
                      import.meta.env.VITE_IMAGE_PATH + movieById.poster_path
                    }
                    alt={movieById.title}
                    srcSet=""
                    className="w-full md:w-60 lg:w-90"
                  />
                </div>
                <div className=" flex flex-col justify-center flex-1 h-full items-start gap-2 md:gap-3 lg:gap-5 z-1 md:pe-6 lg:pe-10">
                  <h2 className="text-xl md:text-2xl lg:text-3xl">
                    {movieById.title}
                  </h2>
                  {loadingGenres.genres ? (
                    <p>Loading ...</p>
                  ) : (
                    movieById.genres?.length > 0 && (
                      <ul className="flex gap-1 lg:gap-2 flex-wrap">
                        {movieById.genres.map((genreId, index) => (
                          <GenreLabelLink key={index} genreId={genreId.id} />
                        ))}
                      </ul>
                    )
                  )}
                  <p className="text-xs lg:text-sm">
                    Release on {formatDate(movieById.release_date)}
                  </p>
                  <p className="text-xs lg:text-sm font-light">
                    {movieById.overview}
                  </p>
                  {movieById.production_companies?.length > 0 && (
                    <div className="flex flex-col gap-2">
                      <p className="text-xs lg:text-sm">Production by</p>
                      <ul className="flex gap-2 flex-wrap">
                        {movieById.production_companies.map((item) => (
                          <ListLabel key={item.id}>{item.name}</ListLabel>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div
                    className="mt-2"
                    onClick={() => toggleFavorite(movieById)}
                  >
                    {favorite.find((fav) => fav.id === movieById.id) ? (
                      <button className="p-2 flex items-center text-sm lg:text-md cursor-pointer gap-2 bg-base-300 rounded">
                        <IoMdHeart className="text-sm lg:text-md text-red-400" />
                        Remove from Favorite
                      </button>
                    ) : (
                      <button className="p-2 flex items-center text-xs lg:text-md cursor-pointer gap-1 bg-red-400 light:bg-red-800 text-white rounded">
                        <IoMdHeartEmpty className="text-sm lg:text-md" /> Add to
                        Favorite
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          <MovieSliderLayouts
            data={relatedMovie.filter((item) => item.id !== parseInt(id))}
            heading="Related Movie"
            loading={loading["relatedMovie-" + id]}
            type={"related-movie"}
          />
        </ContentLayouts>
      </>
    </>
  );
};

export default MovieDetails;
