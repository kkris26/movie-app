import { useEffect, useState } from "react";
import useAPIService from "../services/getAPIService";

const { getAPIData } = useAPIService();
const useGetUpcomingMovie = (setLoading) => {
  const [upcomingMovie, setUpcomingMovie] = useState([]);
  const getTopRatedMovie = () => {
    getAPIData({
      key: "upcoming_movie",
      path: "movie/upcoming?region=ID",
      setter: setUpcomingMovie,
      setterLoading: setLoading,
    });
  };
  useEffect(() => {
    getTopRatedMovie();
  }, []);
  return { upcomingMovie };
};

export default useGetUpcomingMovie;
