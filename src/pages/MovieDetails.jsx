import React, { useEffect, useState } from "react";
import { BsPerson } from "react-icons/bs";
import { FaEye, FaStar } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
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
import { formatRating } from "../components/utilities/Formatter/formatter";
import { getAPIData } from "../services/getAPIService";

const MovieDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState({
    [id]: true,
  });
  const [movieByID, setMovieByID] = useState({});

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
  useEffect(() => {
    getMovieByID();
  }, []);
  console.log("isi loadings");
  console.log(loading[id]);
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
          <div className="z-1 w-150 flex flex-col gap-4 justify-start text-white">
            <h1 className="text-7xl font-bold tracking-wider">
              {movieByID.title}
            </h1>
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
                <p>{movieByID.runtime} min.</p>
              </div>
            </div>
            <p className="text-gray-300 line-clamp-2 w-full">
              {movieByID.overview}
            </p>
            <button className="bg-white rounded-none btn w-max mt-2 text-black">
              View More
            </button>
          </div>
          <div className="absolute inset-0 bg-linear-to-l from-transparent to-black/70 z-0"></div>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
