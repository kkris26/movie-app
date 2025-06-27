import { useRef, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import MovieListLayout from "../layouts/MovieListLayout";
import ContentLayouts from "../layouts/ContentLayouts";
import useGetCategoryMovie from "../hooks/useGetCategoryMovie";
import PaginationButton from "../components/Pagination/PaginationButton";

const MovieCategoryPage = () => {
  const { category } = useParams();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState({
    [category + "_" + page]: true,
  });
  const { movieCategory, totalPage } = useGetCategoryMovie(
    category,
    setLoading,
    page
  );
  const sectionRef = useRef();
  const movieList = [
    { name: "Now Playing", link: "now_playing" },
    { name: "Popular", link: "popular" },
    { name: "Top Rated", link: "top_rated" },
    { name: "Coming Soon", link: "upcoming" },
  ];
  if (!movieList.find((item) => item.link == category)) {
    return <Navigate to={"404"} />;
  }
  return (
    <>
      <ContentLayouts type="no-hero" sectionRef={sectionRef}>
        <MovieListLayout
          data={movieCategory}
          heading={movieList.find((item) => item.link == category).name}
          loading={loading[category + "_" + page]}
          type={category}
          loadCardItem={10}
        />
        {movieCategory.length > 0 && (
          <PaginationButton
            page={page}
            totalPage={totalPage}
            setPage={setPage}
            sectionRef={sectionRef}
            loading={loading[category + "_" + page]}
          />
        )}
      </ContentLayouts>
    </>
  );
};

export default MovieCategoryPage;
