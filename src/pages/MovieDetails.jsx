import React, { useEffect, useState } from "react";
import { BsPerson } from "react-icons/bs";
import { FaEye, FaStar } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import { IoIosStar, IoMdTime } from "react-icons/io";
import { IoEyeOutline, IoEyeSharp, IoPersonOutline, IoPersonSharp, IoTime } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";

import { data, Link, useParams } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();
  const [movieByID, setMovieByID] = useState(
    localStorage.getItem(id) ? JSON.parse(localStorage.getItem(id)) : {}
  );

  const formatDate = (value) => {
    const date = new Date(value);
    const options = {
      //   weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("en-GB", options);
  };

  const formatNumber = (value) => {
    return Number.parseFloat(value).toFixed(1);
  };

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
    },
  };
  const getMovieByID = async () => {
    if (localStorage.getItem(id)) {
      return;
    }
    try {
      const response = await fetch(
        import.meta.env.VITE_MOVIE_DETAILS + id,
        options
      );
      const data = await response.json();
      setMovieByID(data);
      localStorage.setItem(id, JSON.stringify(data));
      console.log("Fetch Movie Details");
    } catch (error) {}
  };
  useEffect(() => {
    getMovieByID();
  }, []);

  console.log(movieByID);

  return (
    <>
      <div
        className="h-screen bg-cover relative flex items-center px-10"
        style={{
          backgroundImage: `url(${
            import.meta.env.VITE_IMAGE_PATH_ORIGINAL + movieByID.backdrop_path
          }`,
        }}
      >
        <div className="z-1 w-150 flex flex-col gap-3 justify-start text-white">
          <h1 className="text-7xl font-bold tracking-wider">
            {movieByID.title}
          </h1>
          {/* <h3 className="text-lg">{movieByID.tagline}</h3> */}
          <div className="flex gap-4 text-sm text-gray-300">
            <div className="flex gap-1 items-center">
              <MdDateRange />
              <p>{formatDate(movieByID.release_date)}</p>
            </div>
            {/* <div className="flex gap-2 items-center">
              <IoEyeSharp className="text-lg" />
              <p>{movieByID.popularity}</p>
            </div> */}
            <div className="flex gap-1 items-center ">
              <FaStar className="text-yellow-500 text-md" />
       
              <div className="flex items-center gap-1">
                <p>
                  {formatNumber(movieByID.vote_average)} /{" "}
                  {movieByID.vote_count}
                </p>
                {/* <IoPersonOutline className="text-[12px]" /> */}
                {/* <BsPerson/> */}
                <IoPersonSharp className="text-[11px]" />
              </div>
            </div>
            <div className="flex items-center gap-1">
              {/* <IoTime className="text-lg" /> */}
              <IoMdTime className="text-lg" />
              <p>{movieByID.runtime} min.</p>
            </div>
          </div>
          <p className="text-gray-300 line-clamp-2 w-[80%]">
            {movieByID.overview}
          </p>
          <button className="bg-white rounded-none btn w-max mt-2 text-black">
            View More
          </button>
        </div>
        <div className="absolute inset-0 bg-linear-to-l from-transparent to-black/70 z-0"></div>
      </div>
      <div className=" flex items-center flex-col gap-5 justify-center"></div>
    </>
  );
};

export default MovieDetails;
