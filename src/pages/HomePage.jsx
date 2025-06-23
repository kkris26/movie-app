import React, { useEffect, useState } from "react";
import HeroLayout from "../layouts/HeroLayout";
import MovieListLayout from "../layouts/MovieListLayout";
import { getAPIData } from "../services/getAPIService";

const HomePage = () => {
  const movieList = {
    genre: "genre",
    now_playing_movie: "now_playing_movie",
    popular_movie: "popular_movie",
    top_rated_movie: "top_rated_movie",
    upcoming_movie: "upcoming_movie",
  };

  const [nowPlayingMovie, setNowPlayingMovie] = useState([]);
  const [popularMovie, setPopularMovie] = useState([]);
  const [topRatedMovie, setTopRatedMovie] = useState([]);
  const [upcomingMovie, setUpcomingMovie] = useState([]);
  const [loading, setLoading] = useState({
    genre: true,
    now_playing_movie: true,
    popular_movie: true,
    top_rated_movie: true,
    upcoming_movie: true,
  });
  const [genre, setGenre] = useState([]);

  const getGenre = async () => {
    getAPIData({
      key: movieList.genre,
      apiUrl: import.meta.env.VITE_GENRE_LIST,
      setter: setGenre,
      text: "Fetch Genre",
      resultData: "genres",
      setterLoading: setLoading,
    });
  };

  const getMovieNowPlaying = () => {
    getAPIData({
      key: movieList.now_playing_movie,
      apiUrl: import.meta.env.VITE_NOW_PLAYING_MOVIE_LIST,
      setter: setNowPlayingMovie,
      text: "Fetch Now Playing Movie",
      setterLoading: setLoading,
    });
  };
  const getPopularMovie = () => {
    getAPIData({
      key: movieList.popular_movie,
      apiUrl: import.meta.env.VITE_POPULAR_MOVIE_LIST,
      setter: setPopularMovie,
      text: "Fetch Popular Movie",
      setterLoading: setLoading,
    });
  };
  const getTopRatedMovie = () => {
    getAPIData({
      key: movieList.top_rated_movie,
      apiUrl: import.meta.env.VITE_TOP_RATED_MOVIE_LIST,
      setter: setTopRatedMovie,
      text: "Fetch Top Rated Movie",
      setterLoading: setLoading,
    });
  };
  const getUpcomingMovie = () => {
    getAPIData({
      key: movieList.upcoming_movie,
      apiUrl: import.meta.env.VITE_UPCOMING_MOVIE_LIST,
      setter: setUpcomingMovie,
      text: "Fetch Top Upcoming Movie",
      setterLoading: setLoading,
    });
  };

  useEffect(() => {
    getGenre();
    getMovieNowPlaying();
    getPopularMovie();
    getTopRatedMovie();
    getUpcomingMovie();
  }, []);

  // console.log(genre);

  return (
    <>
      <HeroLayout data={nowPlayingMovie} />
      <div className="gap-4 flex flex-col mt-10">

      <MovieListLayout
        data={nowPlayingMovie}
        genre={genre}
        heading="Now Playing"
        loading={loading.now_playing_movie}
        />
      <MovieListLayout
        data={popularMovie}
        genre={genre}
        heading="Popular Movie"
        loading={loading.popular_movie}
        />
      <MovieListLayout
        data={topRatedMovie}
        genre={genre}
        heading="Top Rated"
        loading={loading.top_rated_movie}
        />
      <MovieListLayout
        data={upcomingMovie}
        genre={genre}
        heading="Upcoming List"
        type="upcoming"
        loading={loading.upcoming_movie}
        />
        </div>
    </>
  );
};

export default HomePage;
