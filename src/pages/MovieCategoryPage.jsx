import React, { useEffect, useState } from "react";
import { getAPIData } from "../services/getAPIService";
import { useParams } from "react-router-dom";
import HeroSectionLoad from "../components/Loading/HeroSectionLoad";
import HeroSection from "../layouts/HeroSection";
import MovieListLayout from "../layouts/MovieListLayout";
import ContentLayouts from "../layouts/ContentLayouts";

const MovieCategoryPage = () => {
  const { category } = useParams();
  const [movieCategory, setMovieCategory] = useState([]);
  const [genre, setGenre] = useState([]);
  const [loading, setLoading] = useState({
    [category]: true,
    genre: true,
  });
  const getCategoryMovie = () => {
    getAPIData({
      key: category,
      apiUrl: import.meta.env.VITE_MOVIE_DETAILS + category,
      setter: setMovieCategory,
      setterLoading: setLoading,
    });
  };
  const getGenre = () => {
    getAPIData({
      key: "genre",
      apiUrl: import.meta.env.VITE_GENRE_LIST,
      setter: setGenre,
      resultData: "genres",
      setterLoading: setLoading,
    });
  };

  useEffect(() => {
    getCategoryMovie();
    getGenre();
  }, []);

  const movieList = [
    { name: "Now Playing", link: "now_playing" },
    { name: "Popular", link: "popular" },
    { name: "Top Rated", link: "top_rated" },
    { name: "Upcoming", link: "upcoming" },
  ];
  console.log(category);
  return (
    <>
      {loading[category] || loading.genre ? (
        <HeroSectionLoad />
      ) : (
        <>
          <ContentLayouts type="no-hero">
            <MovieListLayout
              data={movieCategory}
              genre={genre}
              heading={
                "Category " + movieList.find((item) => item.link == category).name
              }
              loading={loading.category}
            />
          </ContentLayouts>
        </>
      )}
    </>
  );
};

export default MovieCategoryPage;
