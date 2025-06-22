import React, { use, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAPIData } from "../services/getAPIService";
import MovieListLayout from "../layouts/MovieListLayout";

const MovieByGenres = () => {
  const { id } = useParams();
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState([]);
  const [genre, setGenre] = useState([]);
  const getMovieList = () => {
    getAPIData({
      key: id,
      apiUrl: import.meta.env.VITE_MOVIE_LLIST_BY_GENRE + id,
      setter: setMovieList,
      text: "Fetch MovieBy Genres",
      setterLoading: setLoading,
    });
  };
  const getGenre = () => {
    getAPIData({
      key: "genre",
      apiUrl: import.meta.env.VITE_GENRE_LIST,
      setter: setGenre,
      text: "Fetch Genre",
      resultData: "genres",
      setterLoading: setLoading,
    });
  };

  const genreName = genre.length > 0 && genre.find((item) => item.id == id).name;
  console.log(id);
  useEffect(() => {
    getMovieList();
    getGenre();
  }, []);

  console.log(genreName);
  console.log("genres");
  return (
    <MovieListLayout
      data={movieList}
      genre={genre}
      heading={"Movie by Genres " + genreName}
      type="byGenre"
      loading={loading.id}
      height="min-h-screen"
    />
  );
};

export default MovieByGenres;
