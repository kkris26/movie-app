import { useEffect, useState } from "react";
import { getAPIData } from "../services/getAPIService";

const useGetUpcomingMovie = (setLoading) => {
  const [upcomingMovie, setUpcomingMovie] = useState([]);
  const getTopRatedMovie = () => {
    getAPIData({
      key: "upcoming_movie",
      apiUrl: import.meta.env.VITE_UPCOMING_MOVIE_LIST,
      setter: setUpcomingMovie,
      setterLoading: setLoading,
    });
  };
  useEffect(() => {
    getTopRatedMovie();
    console.log("genres from get Upcoming");
  }, []);
  return { upcomingMovie };
};

export default useGetUpcomingMovie;
