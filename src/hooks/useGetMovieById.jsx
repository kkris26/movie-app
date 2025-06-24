import React, { useEffect, useState } from "react";
import { getAPIData } from "../services/getAPIService";

const useGetMovieById = (setLoading, id) => {
  const [movieById, setMovieById] = useState([]);
  const getMovieById = () => {
    getAPIData({
      key: id,
      apiUrl: import.meta.env.VITE_MOVIE_DETAILS + id,
      setter: setMovieById,
      setterLoading: setLoading,
      resultData: null,
    });
  };
  useEffect(() => {
    getMovieById();
    console.log("movie from get Movie by Id " + id);
  }, []);
  return { movieById };
};

export default useGetMovieById;
