import { useEffect, useState } from "react";
import { getAPIData } from "../services/getAPIService";

const useGetTopRatedMovie = (setLoading) => {
  const [topRatedMovie, setTopRatedMovie] = useState([]);
  const getTopRatedMovie = () => {
    getAPIData({
      key: "top_rated_movie",
      apiUrl: import.meta.env.VITE_MOVIE_BASE_API + "top_rated?region=ID",
      setter: setTopRatedMovie,
      setterLoading: setLoading,
    });
  };
  useEffect(() => {
    getTopRatedMovie();
  }, []);
  return { topRatedMovie };
};

export default useGetTopRatedMovie;
