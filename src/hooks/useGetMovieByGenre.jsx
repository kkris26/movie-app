import React, { useEffect, useState } from "react";
import { getAPIData } from "../services/getAPIService";

const useGetMovieByGenre = (setLoading, id, page) => {
  const [movieByGenre, setMovieByGenre] = useState([]);
  const [totalPage, setTotalPage] = useState();
  const getMovieByGenre = () => {
    getAPIData({
      key: id,
      apiUrl:
        import.meta.env.VITE_MOVIE_LIST_BY_GENRE +
        `?page=${page}&with_genres=${id}`,
      setter: setMovieByGenre,
      setterLoading: setLoading,
      setTotalPage: setTotalPage,
    });
  };
  useEffect(() => {
    setLoading((prev) => ({ ...prev, [id]: true }));
    getMovieByGenre();
  }, [page]);
  return { movieByGenre, totalPage };
};

export default useGetMovieByGenre;
