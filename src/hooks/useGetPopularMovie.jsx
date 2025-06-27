import { useEffect, useState } from "react";
import { getAPIData } from "../services/getAPIService";

const useGetPopularMovie = (setLoading) => {
  const [popularMovie, setPopularMovie] = useState([]);
  const getPopularMovie = () => {
    getAPIData({
      key: "popular_movie",
      path: "movie/popular?region=ID",
      setter: setPopularMovie,
      setterLoading: setLoading,
    });
  };

  useEffect(() => {
    getPopularMovie();
  }, []);
  return { popularMovie };
};

export default useGetPopularMovie;
