import { useEffect, useState } from "react";
import { getAPIData } from "../services/getAPIService";

const useGetNowPlaying = (setLoading) => {
  const [nowPlayingMovie, setNowPlayingMovie] = useState([]);
  const getMovieNowPlaying = () => {
    getAPIData({
      key: "now_playing_movie",
      apiUrl:
        import.meta.env.VITE_MOVIE_BASE_API +
        "now_playing?region=ID",
      setter: setNowPlayingMovie,
      setterLoading: setLoading,
    });
  };

  useEffect(() => {
    getMovieNowPlaying();
  }, []);
  return { nowPlayingMovie };
};

export default useGetNowPlaying;
