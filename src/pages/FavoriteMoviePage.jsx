import { useEffect, useState } from "react";
import { useFavorite } from "../contexts/FavoriteContext";
import ContentLayouts from "../layouts/ContentLayouts";
import MovieListLayout from "../layouts/MovieListLayout";
import HeroSectionLoad from "../components/Loading/HeroSectionLoad";
import { getAPIData } from "../services/getAPIService";

const FavoriteMoviePage = () => {
  const [genre, setGenre] = useState([]);
  const { favorite } = useFavorite();
  const [loading, setLoading] = useState({ genre: true });

  const getGenre = async () => {
    getAPIData({
      key: "genre",
      apiUrl: import.meta.env.VITE_GENRE_LIST,
      setter: setGenre,
      resultData: "genres",
      setterLoading: setLoading,
    });
  };

  useEffect(() => {
    getGenre();
  }, []);
  return (
    <>
      <ContentLayouts type="no-hero">
        <MovieListLayout
          data={favorite}
          genre={genre}
          heading={"Favorite Movie"}
          loading={loading.genre}
        />
      </ContentLayouts>
    </>
  );
};

export default FavoriteMoviePage;
