import { useEffect, useState } from "react";
import useAPIService from "../services/getAPIService";

const { getAPIData } = useAPIService();
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
