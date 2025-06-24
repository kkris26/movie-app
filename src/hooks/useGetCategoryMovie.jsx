import React, { useEffect, useState } from "react";
import { getAPIData } from "../services/getAPIService";

const useGetCategoryMovie = (category, setLoading) => {
  const [movieCategory, setMovieCategory] = useState([]);
  const getCategoryMovie = () => {
    getAPIData({
      key: category,
      apiUrl: import.meta.env.VITE_MOVIE_DETAILS + category + "?region=ID",
      setter: setMovieCategory,
      setterLoading: setLoading,
    });
  };

  useEffect(() => {
    getCategoryMovie();
  }, []);
  return { movieCategory };
};

export default useGetCategoryMovie;
