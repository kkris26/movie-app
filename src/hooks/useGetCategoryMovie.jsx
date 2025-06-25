import React, { useEffect, useState } from "react";
import { getAPIData } from "../services/getAPIService";

const useGetCategoryMovie = (category, setLoading, page) => {
  const [movieCategory, setMovieCategory] = useState([]);
  const [totalPage, setTotalPage] = useState();
  const getCategoryMovie = () => {
    getAPIData({
      key: category,
      apiUrl:
        import.meta.env.VITE_MOVIE_DETAILS +
        category +
        `?page=${page}&region=ID`,
      setter: setMovieCategory,
      setterLoading: setLoading,
      setTotalPage: setTotalPage,
    });
  };

  useEffect(() => {
    setLoading((prev) => ({ ...prev, [category]: true }));
    getCategoryMovie();
  }, [page]);
  return { movieCategory, totalPage };
};

export default useGetCategoryMovie;
