import { useEffect, useState } from "react";
import { getAPIData } from "../services/getAPIService";

const useGetTopRatedMovie = (setLoading) => {
  const [topRatedMovie, setTopRatedMovie] = useState([]);
  const getTopRatedMovie = () => {
    getAPIData({
      key: "top_rated_movie",
      apiUrl: import.meta.env.VITE_TOP_RATED_MOVIE_LIST,
      setter: setTopRatedMovie,
      setterLoading: setLoading,
    });
  };
  useEffect(() => {
    getTopRatedMovie();
    console.log("genres from get Top Rated");
  }, []);
  return { topRatedMovie };
};

export default useGetTopRatedMovie;
