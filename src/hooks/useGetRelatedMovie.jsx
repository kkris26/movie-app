import { useEffect, useState } from "react";
import useAPIService from "../services/getAPIService";

const { getAPIData } = useAPIService();
const useGetRelatedMovie = (setLoading, movieById, id) => {
  const [relatedMovie, setRelatedMovie] = useState([]);
  const getRelated = () => {
    if (movieById?.genres) {
      const genreList = movieById.genres.map((item) => item.id);
      const genreListJoin = genreList.length > 0 && genreList.join("|");
      getAPIData({
        key: "relatedMovie-" + id,
        path: `discover/movie?with_genres=${genreListJoin}`,
        setter: setRelatedMovie,
        text: "Fetch Movie By Genres",
        setterLoading: setLoading,
      });
    }
  };
  useEffect(() => {
    getRelated();
  }, [movieById]);
  return { relatedMovie };
};

export default useGetRelatedMovie;
