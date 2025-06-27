import { useEffect, useState } from "react";
import useAPIService from "../services/getAPIService";

const { getAPIData } = useAPIService();
const useGetGenres = () => {
  const [genres, setGenres] = useState([]);
  const [loadingGenres, setLoadingGenres] = useState({ genres: true });
  const handleGetGenres = () => {
    getAPIData({
      key: "genres",
      path: "genre/movie/list",
      setter: setGenres,
      resultData: "genres",
      setterLoading: setLoadingGenres,
    });
  };
  useEffect(() => {
    if (genres.length > 0) {
      return;
    }
    handleGetGenres();
  }, []);
  return { genres, loadingGenres };
};

export default useGetGenres;
