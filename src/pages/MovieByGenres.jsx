import { useState } from "react";
import { useParams } from "react-router-dom";
import MovieListLayout from "../layouts/MovieListLayout";
import ContentLayouts from "../layouts/ContentLayouts";
import { useGlobalContext } from "../contexts/globalContext";
import useGetMovieByGenre from "../hooks/useGetMovieByGenre";

const MovieListSection = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState({
    [id]: true,
  });
  const { genres } = useGlobalContext();
  const { movieByGenre } = useGetMovieByGenre(setLoading, id);

  const genreName =
    genres.length > 0 && genres.find((item) => item.id == id).name;

  return (
    <>
      <ContentLayouts type="no-hero">
        <MovieListLayout
          data={movieByGenre}
          heading={genreName + " Movies"}
          loading={loading[id]}
          loadCardItem={10}
        />
      </ContentLayouts>
    </>
  );
};

export default MovieListSection;
