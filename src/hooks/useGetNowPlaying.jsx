import { useEffect, useState } from "react";
import { getAPIData } from "../services/getAPIService";

const useGetNowPlaying = (setLoading) => {
  const [nowPlayingMovie, setNowPlayingMovie] = useState([]);
  const getMovieNowPlaying = () => {
    getAPIData({
      key: "now_playing_movie",
      apiUrl: import.meta.env.VITE_NOW_PLAYING_MOVIE_LIST,
      setter: setNowPlayingMovie,
      setterLoading: setLoading,
    });
  };

  useEffect(() => {
    getMovieNowPlaying();
    console.log("genres from get Now Playing");
  }, []);
  return { nowPlayingMovie };
};

export default useGetNowPlaying;
