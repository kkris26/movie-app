import React, { useEffect, useState } from "react";
import { getAPIData } from "../services/getAPIService";

const useGetMovieByGenre = (setLoading, id, page) => {
  const [movieByGenre, setMovieByGenre] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const getMovieByGenre = () => {
    getAPIData({
      key: id + "_" + page,
      path: `discover/movie?page=${page}&with_genres=${id}`,
      setter: setMovieByGenre,
      setterLoading: setLoading,
      setTotalPage: setTotalPage,
    });
  };
  useEffect(() => {
    setLoading((prev) => ({ ...prev, [id + "_" + page]: true }));
    getMovieByGenre();
  }, [page]);
  return { movieByGenre, totalPage };
};

export default useGetMovieByGenre;
