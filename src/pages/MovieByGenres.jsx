import React, { use, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAPIData } from "../services/getAPIService";
import MovieListLayout from "../layouts/MovieListLayout";
import ContentLayouts from "../layouts/ContentLayouts";

const MovieByGenres = () => {
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
        <div className="h-screen  flex items-center px-10">
          <div className="skeleton h-screen inset-0 bg-base-200/50 absolute w-full"></div>
          <div className="skeleton h-10 w-80"></div>
        </div>
      ) : (
        <>
          <div
            className="h-screen bg-cover relative flex items-center px-10"
            style={{
              backgroundImage: `url(${
                import.meta.env.VITE_IMAGE_PATH_ORIGINAL +
                movieList[0].backdrop_path
              }`,
            }}
          >
            <h1 className="text-5xl">Showing List {genreName}</h1>
          </div>
          <ContentLayouts>
            <MovieListLayout
              data={movieList}
              genre={genre}
              heading={"Movie by Genres " + genreName}
              type="byGenre"
              loading={loading.id}
              height="min-h-screen"
            />
          </ContentLayouts>
        </>
      )}
    </>
  );
};

export default MovieByGenres;
