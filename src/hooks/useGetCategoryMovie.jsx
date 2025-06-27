import { useEffect, useState } from "react";
import useAPIService from "../services/getAPIService";

const { getAPIData } = useAPIService();
const useGetCategoryMovie = (category, setLoading, page) => {
  const [movieCategory, setMovieCategory] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const getCategoryMovie = () => {
    getAPIData({
      key: category + "_" + page,
      path: `movie/${category}?page=${page}&region=ID`,
      setter: setMovieCategory,
      setterLoading: setLoading,
      setTotalPage: setTotalPage,
    });
  };
  useEffect(() => {
    setLoading((prev) => ({ ...prev, [category + "_" + page]: true }));
    getCategoryMovie();
  }, [page]);
  return { movieCategory, totalPage };
};

export default useGetCategoryMovie;
