import React, { use, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAPIData } from "../services/getAPIService";
import MovieListLayout from "../layouts/MovieListLayout";
import ContentLayouts from "../layouts/ContentLayouts";
import HeroSection from "../layouts/HeroSection";
import HeroSectionLoad from "../components/Loading/HeroSectionLoad";

const MovieListSection = () => {
  const { id } = useParams();
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState({
    [id]: true,
  });
  const [genre, setGenre] = useState([]);
  const getMovieList = () => {
    getAPIData({
      key: id,
      apiUrl: import.meta.env.VITE_MOVIE_LLIST_BY_GENRE + id,
      setter: setMovieList,
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

  const genreName =
    genre.length > 0 && genre.find((item) => item.id == id).name;
  console.log(id);
  useEffect(() => {
    getMovieList();
    getGenre();
  }, []);

  console.log(loading[id]);
  console.log("genres");
  return (
    <>
      {loading[id] ? (
        <HeroSectionLoad />
      ) : (
        <>
          <HeroSection image={movieList[0].backdrop_path} />
          <ContentLayouts>
            <MovieListLayout
              data={movieList}
              genre={genre}
              heading={genreName + " Movies"}
              loading={loading.id}
            />
          </ContentLayouts>
        </>
      )}
    </>
  );
};

export default MovieListSection;
