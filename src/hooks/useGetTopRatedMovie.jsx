import { useEffect, useState } from "react";
import useAPIService from "../services/getAPIService";

const { getAPIData } = useAPIService();
const useGetTopRatedMovie = (setLoading) => {
  const [topRatedMovie, setTopRatedMovie] = useState([]);
  const getTopRatedMovie = () => {
    getAPIData({
      key: "top_rated_movie",
      path: "movie/top_rated?region=ID",
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
