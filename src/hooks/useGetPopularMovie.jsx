import { useEffect, useState } from "react";
import { getAPIData } from "../services/getAPIService";

const useGetPopularMovie = (setLoading) => {
  const [popularMovie, setPopularMovie] = useState([]);
  const getPopularMovie = () => {
    getAPIData({
      key: "popular_movie",
      apiUrl: import.meta.env.VITE_POPULAR_MOVIE_LIST,
      setter: setPopularMovie,
      setterLoading: setLoading,
    });
  };

  useEffect(() => {
    getPopularMovie();
    console.log("genres from get Popular");
  }, []);
  return { popularMovie };
};

export default useGetPopularMovie;
