import { useEffect, useState } from "react";
import useAPIService from "../services/getAPIService";

const { getAPIData } = useAPIService();
const useGetNowPlaying = (setLoading) => {
  const [nowPlayingMovie, setNowPlayingMovie] = useState([]);
  const getMovieNowPlaying = () => {
    getAPIData({
      key: "now_playing_movie",
      path: "/movie/now_playing?region=ID",
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
