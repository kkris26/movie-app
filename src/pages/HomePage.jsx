import React, { useEffect, useState } from "react";
import HeroLayout from "../layouts/HeroLayout";

import MovieCard from "../components/Card/MovieCard";

const HomePage = () => {
  const [movie, setMovie] = useState(
    localStorage.getItem("movie")
      ? JSON.parse(localStorage.getItem("movie"))
      : []
  );
  const [genre, setGenre] = useState(
    localStorage.getItem("genre")
      ? JSON.parse(localStorage.getItem("genre"))
      : []
  );

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
    },
  };

  const getGenre = async () => {
    try {
      if (localStorage.getItem("genre")) {
        return;
      }
      const response = await fetch(import.meta.env.VITE_GENRE_LIST, options);
      const data = await response.json();
      setGenre(data.genres);
      localStorage.setItem("genre", JSON.stringify(data.genres));
      console.log("fetch data genre");
    } catch (err) {
      console.log(err);
    }
  };

  const getMovie = async () => {
    try {
      if (localStorage.getItem("movie")) {
        return;
      }
      const response = await fetch(import.meta.env.VITE_MOVIE_LIST, options);
      const data = await response.json();
      setMovie(data.results);
      localStorage.setItem("movie", JSON.stringify(data.results));
      console.log("fetch data movie");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getGenre();
    getMovie();
  }, []);

  console.log(movie);
  console.log(genre);

  return (
    <>
      <HeroLayout movie={movie} />
      <div className="flex flex-col min-h-screen items-center justify-center px-10 mt-10">
        <div className="grid grid-cols-5 gap-y-10 gap-x-4 ">
          {movie.length > 0 &&
            movie.map((item) => (
              <MovieCard item={item} key={item.id} genre={genre} />
            ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
