import React, { useEffect, useState } from "react";
import { getAPIData } from "../services/getAPIService";

const useGetMovieById = (setLoading, id) => {
  const [movieById, setMovieById] = useState([]);
  const getMovieById = () => {
    getAPIData({
      key: id,
      apiUrl: import.meta.env.VITE_MOVIE_BASE_API + id,
      setter: setMovieById,
      setterLoading: setLoading,
      resultData: null,
    });
  };
  useEffect(() => {
    getMovieById();
  }, []);
  return { movieById };
};

export default useGetMovieById;
