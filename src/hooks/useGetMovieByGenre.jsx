import React, { useEffect, useState } from "react";
import { getAPIData } from "../services/getAPIService";

const useGetMovieByGenre = (setLoading, id) => {
  const [movieByGenre, setMovieByGenre] = useState([]);
  const getMovieByGenre = () => {
    getAPIData({
      key: id,
      apiUrl: import.meta.env.VITE_MOVIE_LIST_BY_GENRE + id,
      setter: setMovieByGenre,
      setterLoading: setLoading,
    });
  };
  useEffect(() => {
    getMovieByGenre();
    console.log("genres from get Movie by Id " + id);
  }, []);
  return { movieByGenre };
};

export default useGetMovieByGenre;
