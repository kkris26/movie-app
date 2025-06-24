import { useEffect, useState } from "react";
import ContentLayouts from "../layouts/ContentLayouts";
import MovieListLayout from "../layouts/MovieListLayout";
import { getAPIData } from "../services/getAPIService";
import { useGlobalContext } from "../contexts/globalContext";

const FavoriteMoviePage = () => {
  const { favorite, loadingGenres } = useGlobalContext();
  return (
    <>
      <ContentLayouts type="no-hero">
        <MovieListLayout
          data={favorite}
          heading={"Favorite Movie"}
          loading={loadingGenres.genres}
          loadCardItem={10}
        />
      </ContentLayouts>
    </>
  );
};

export default FavoriteMoviePage;
