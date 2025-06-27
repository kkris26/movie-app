import React, { useEffect, useState } from "react";
import { getAPIData } from "../services/getAPIService";

const useGetMovieById = (setLoading, id) => {
  const [movieById, setMovieById] = useState({});
  const [notFound, setNotFound] = useState(false);
  const getMovieById = () => {
    getAPIData({
      key: id,
      path: `movie/${id}`,
      setter: setMovieById,
      setterLoading: setLoading,
      resultData: null,
      setNotFound: setNotFound,
    });
  };
  useEffect(() => {
    getMovieById();
  }, []);
  return { movieById, notFound };
};

export default useGetMovieById;
