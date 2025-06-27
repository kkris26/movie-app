import { useRef, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import MovieListLayout from "../layouts/MovieListLayout";
import ContentLayouts from "../layouts/ContentLayouts";
import { useGlobalContext } from "../contexts/globalContext";
import useGetMovieByGenre from "../hooks/useGetMovieByGenre";
import PaginationButton from "../components/Pagination/PaginationButton";

const MovieListSection = () => {
  const { id } = useParams();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState({
    [id + "_" + page]: true,
  });
  const { genres } = useGlobalContext();
  const { movieByGenre, totalPage } = useGetMovieByGenre(setLoading, id, page);
  const sectionRef = useRef(null);
  if (genres.length > 0 && !genres.find((item) => item.id == id)) {
    return <Navigate to={"404"} />;
  }
  const genreName =
    genres.length > 0 && genres.find((item) => item.id == id)?.name;
  return (
    <>
      <ContentLayouts sectionRef={sectionRef} type="no-hero">
        <MovieListLayout
          data={movieByGenre}
          heading={genreName + " Movies"}
          loading={loading[id + "_" + page]}
          loadCardItem={10}
        />
        <PaginationButton
          page={page}
          totalPage={totalPage}
          setPage={setPage}
          sectionRef={sectionRef}
          loading={loading[id + "_" + page]}
        />
      </ContentLayouts>
    </>
  );
};

export default MovieListSection;
