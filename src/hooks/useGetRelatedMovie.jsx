import React, { useEffect, useState } from "react";
import { getAPIData } from "../services/getAPIService";

const useGetRelatedMovie = (setLoading, movieById, id) => {
  const [relatedMovie, setRelatedMovie] = useState([]);
  const getRelated = () => {
    if (movieById?.genres) {
      const genreList = movieById.genres.map((item) => item.id);
      const genreListJoin = genreList.length > 0 && genreList.join("|");
      getAPIData({
        key: "relatedMovie-" + id,
        apiUrl: import.meta.env.VITE_MOVIE_LIST_BY_GENRE + genreListJoin,
        setter: setRelatedMovie,
        text: "Fetch Movie By Genres",
        setterLoading: setLoading,
      });
    }
  };
  useEffect(() => {
    getRelated();
  }, [movieById]);
  return { relatedMovie };
};

export default useGetRelatedMovie;
