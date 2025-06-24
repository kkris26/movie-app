import React, { useEffect, useState } from "react";
import { BsPerson } from "react-icons/bs";
import { FaEye, FaStar } from "react-icons/fa";
import { GoArrowUpRight, GoPerson } from "react-icons/go";
import { IoIosStar, IoMdTime } from "react-icons/io";
import {
  IoEyeOutline,
  IoEyeSharp,
  IoPersonOutline,
  IoPersonSharp,
  IoTime,
} from "react-icons/io5";
import { MdDateRange } from "react-icons/md";

import { data, Link, useParams } from "react-router-dom";
import {
  formatDate,
  formatRating,
} from "../components/utilities/Formatter/formatter";
import { getAPIData } from "../services/getAPIService";
import MovieListLayout from "../layouts/MovieListLayout";
import ListLabel from "../components/Label/ListLabel";
import GenreLabelLink from "../components/Label/GenreLabelLink";
import ContentLayouts from "../layouts/ContentLayouts";
import HeroSectionLoad from "../components/Loading/HeroSectionLoad";

const MovieDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState({
    [id]: true,
    ["relatedMovie-" + id]: true,
    genre: true,
  });
  const [movieByID, setMovieByID] = useState({});
  const [genre, setGenre] = useState([]);
  const [relatedMovie, setRelatedMovie] = useState([]);

  const getMovieByID = async () => {
    getAPIData({
      key: id,
      apiUrl: import.meta.env.VITE_MOVIE_DETAILS + id,
      setter: setMovieByID,
      text: "Fetch Movie by ID",
      resultData: null,
      setterLoading: setLoading,
    });
  };

  const getGenre = async () => {
    getAPIData({
      key: "genre",
      apiUrl: import.meta.env.VITE_GENRE_LIST,
      setter: setGenre,
      text: "Fetch Genre",
      resultData: "genres",
      setterLoading: setLoading,
    });
  };

  const getRelated = () => {
    if (movieByID?.genres) {
      const genreList = movieByID.genres.map((item) => item.id);
      const genreListJoin = genreList.length > 0 && genreList.join("|");
      getAPIData({
        key: "relatedMovie-" + id,
        apiUrl: import.meta.env.VITE_MOVIE_LLIST_BY_GENRE + genreListJoin,
        setter: setRelatedMovie,
        text: "Fetch Movie By Genres",
        setterLoading: setLoading,
      });
    }
  };

  useEffect(() => {
    getMovieByID();
    getGenre();
  }, []);
  useEffect(() => {
    getRelated();
  }, [movieByID]);
  return (
    <>
      {loading[id] ? (
        <div className="h-screen  flex items-center px-10">
          <div className="skeleton h-screen inset-0 bg-base-200/50 absolute w-full"></div>
          <div className="z-1 w-150 flex flex-col gap-5 justify-start text-white">
            <div className="skeleton h-18 w-full"></div>
            <div className="flex gap-4 text-sm text-gray-300">
              <div className="flex gap-1 items-center ">
                <div className="skeleton h-4 w-5"></div>
                <div className="skeleton h-4 w-20"></div>
              </div>
              <div className="flex items-center gap-1">
                <div className="skeleton h-4 w-5"></div>
                <div className="skeleton h-4 w-20"></div>
              </div>
            </div>
            <div className="text-gray-300 w-full flex flex-col gap-2">
              <div className="skeleton h-4 w-full"></div>{" "}
              <div className="skeleton h-4 w-full"></div>{" "}
            </div>
            <div className="skeleton h-10 w-30"></div>{" "}
          </div>
        </div>
      ) : (
        <div
          className="h-screen bg-cover relative flex items-center px-10"
          style={{
            backgroundImage: `url(${
              import.meta.env.VITE_IMAGE_PATH_ORIGINAL + movieByID.backdrop_path
            }`,
          }}
        >
          <div className="w-7xl mx-auto">
            <div className="z-1 relative w-150 flex flex-col gap-5 justify-start text-white">
              <h1 className="text-7xl tracking-wider">{movieByID.title}</h1>
              <div className="flex gap-4 text-sm text-gray-300">
                <div className="flex gap-1 items-center ">
                  <FaStar className="text-yellow-500 text-md" />

                  <div className="flex items-center gap-1">
                    <p>
                      {formatRating(movieByID.vote_average)} /{" "}
                      {movieByID.vote_count}
                    </p>
                    <IoPersonSharp className="text-[11px]" />
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <IoMdTime className="text-lg" />
                  <p>{movieByID.runtime} min</p>
                </div>
              </div>
              <p className="text-gray-200 font-light line-clamp-2 w-full">
                {movieByID.overview}
              </p>
              <a
                className="text-xl border-b font-light flex gap-2 w-max items-center hover:text-white/80"
                href={`#content-details`}
              >
                Start Explore
                <GoArrowUpRight className="text-xl mb-[-4px]" />
              </a>
            </div>
          </div>
          <div className="absolute inset-0 bg-linear-to-l from-transparent to-black/70 z-0"></div>
        </div>
      )}
      <>
        <ContentLayouts>
          {loading[id] ? (
            <div className="flex gap-10 items-center h-screen w-5xl mx-auto">
              <div className="flex items-center p-2 rounded-md border-2 border-base-content">
                <div className="skeleton w-[240px] h-[360px] rounded"></div>
              </div>
              <div className="flex flex-col justify-center flex-1 h-full items-start gap-4 z-1">
                <div className="skeleton h-8 w-[60%] rounded"></div>{" "}
                <div className="flex gap-2 flex-wrap">
                  <div className="skeleton h-5 w-20 rounded-full"></div>
                  <div className="skeleton h-5 w-14 rounded-full"></div>
                  <div className="skeleton h-5 w-24 rounded-full"></div>
                </div>
                <div className="skeleton h-4 w-40"></div>
                <div className="skeleton h-4 w-[90%]"></div>
                <div className="skeleton h-4 w-[85%]"></div>
                <div className="skeleton h-4 w-[80%]"></div>
                <div className="flex flex-col gap-1 mt-4">
                  <div className="skeleton h-4 w-28"></div>
                  <div className="flex gap-2 flex-wrap">
                    <div className="skeleton h-5 w-20 rounded-full"></div>
                    <div className="skeleton h-5 w-16 rounded-full"></div>
                    <div className="skeleton h-5 w-24 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div
              id="content-details"
              className="flex gap-10 items-center h-screen w-5xl mx-auto"
            >
              <div className=" flex items-center p-2 rounded-md border-2 border-base-content ">
                <img
                  src={import.meta.env.VITE_IMAGE_PATH + movieByID.poster_path}
                  alt=""
                  srcSet=""
                  className="w-90 rounded"
                />
              </div>
              <div className=" flex flex-col justify-center flex-1 h-full items-start gap-4 z-1">
                <h2 className="text-3xl">{movieByID.title}</h2>
                <ul className="flex gap-2 flex-wrap">
                  {loading.genre ? (
                    <p>Loading ...</p>
                  ) : (
                    movieByID.genres.map((genreId, index) => (
                      <GenreLabelLink
                        key={index}
                        genreId={genreId.id}
                        genre={genre}
                      />
                    ))
                  )}
                </ul>
                <p className="text-sm">
                  Release on {formatDate(movieByID.release_date)}
                </p>
                <p className="text-sm">{movieByID.overview}</p>
                {movieByID.production_companies.length > 0 && (
                  <div className="flex flex-col gap-1">
                    <p className="text-sm">Production by</p>
                    <ul className="flex gap-2 flex-wrap">
                      {movieByID.production_companies.map((item) => (
                        <ListLabel key={item.id}>{item.name}</ListLabel>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}
          <MovieListLayout
            data={relatedMovie.filter((item) => item.id !== parseInt(id))}
            genre={genre}
            heading="Related Movie"
            type="byGenre"
            loading={loading["relatedMovie-" + id]}
            max={10}
          />
        </ContentLayouts>
      </>
    </>
  );
};

export default MovieDetails;
