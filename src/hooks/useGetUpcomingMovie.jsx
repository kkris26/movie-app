import { useEffect, useState } from "react";
import { getAPIData } from "../services/getAPIService";

const useGetUpcomingMovie = (setLoading) => {
  const [upcomingMovie, setUpcomingMovie] = useState([]);
  const getTopRatedMovie = () => {
    getAPIData({
      key: "upcoming_movie",
      apiUrl: import.meta.env.VITE_MOVIE_BASE_API + "upcoming?region=ID",
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
