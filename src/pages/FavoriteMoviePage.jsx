import ContentLayouts from "../layouts/ContentLayouts";
import MovieListLayout from "../layouts/MovieListLayout";
import { useGlobalContext } from "../contexts/globalContext";

const FavoriteMoviePage = () => {
  const { favorite, loadingGenres } = useGlobalContext();
  return (
    <>
      <ContentLayouts type="no-hero">
        <MovieListLayout
          data={favorite}
          heading={"Favorite Movies"}
          loading={loadingGenres.genres}
          loadCardItem={10}
          type="favorite"
        />
      </ContentLayouts>
    </>
  );
};

export default FavoriteMoviePage;
