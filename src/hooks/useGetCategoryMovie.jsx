import React, { useEffect, useState } from "react";
import { getAPIData } from "../services/getAPIService";

const useGetCategoryMovie = (category, setLoading, page) => {
  const [movieCategory, setMovieCategory] = useState([]);
  const [totalPage, setTotalPage] = useState();
  const [notFound, setNotFound] = useState(false);
  const getCategoryMovie = () => {
    getAPIData({
      key: category + "_" + page,
      path: `movie/${category}?page=${page}&region=ID`,
      setter: setMovieCategory,
      setterLoading: setLoading,
      setTotalPage: setTotalPage,
      setNotFound: setNotFound,
    });
  };

  useEffect(() => {
    setLoading((prev) => ({ ...prev, [category + "_" + page]: true }));
    getCategoryMovie();
  }, [page]);
  return { movieCategory, totalPage, notFound };
};

export default useGetCategoryMovie;
