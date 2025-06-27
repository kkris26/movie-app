import React, { useEffect, useState } from "react";
import useAPIService from "../services/getAPIService";
import { Navigate } from "react-router-dom";

const useSearchMovie = (searchQuery, setLoading, page) => {
  const { getAPIData } = useAPIService();
  const [searchMovies, setSearchMovies] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [notFound, setNotFound] = useState(false);
  useEffect(() => {
    if (searchQuery == "") {
      setLoading({ ["search_" + page]: true });
      return;
    }
    setLoading({ ["search_" + page]: true });
    const searchMovieTO = setTimeout(() => {
      getAPIData({
        key: "search_" + page,
        path: `search/movie?query=${searchQuery}&page=${page}`,
        setter: setSearchMovies,
        setterLoading: setLoading,
        type: "search",
        setTotalPage: setTotalPage,
        setNotFound: setNotFound,
      });
    }, 500);
    return () => {
      clearTimeout(searchMovieTO);
    };
  }, [searchQuery, page]);

  return { searchMovies, totalPage, page, notFound };
};

export default useSearchMovie;
