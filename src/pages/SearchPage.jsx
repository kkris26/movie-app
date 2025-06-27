import { useEffect, useRef, useState } from "react";
import PaginationButton from "../components/Pagination/PaginationButton";
import useSearchMovie from "../hooks/useSearchMovie";
import ContentLayouts from "../layouts/ContentLayouts";
import MovieListLayout from "../layouts/MovieListLayout";
import { Navigate, useSearchParams } from "react-router-dom";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const page = Number(searchParams.get("p") || 1);
  const [pages, setPages] = useState(page);
  useEffect(() => {
    setPages(page);
  }, [query, page]);
  const [loading, setLoading] = useState({});
  const { searchMovies, totalPage, notFound } = useSearchMovie(
    query,
    setLoading,
    pages
  );
  const sectionRef = useRef();
  if (notFound || searchMovies == undefined) {
    return <Navigate to={"404"} />;
  }
  return (
    <>
      <ContentLayouts type="no-hero" sectionRef={sectionRef}>
        <MovieListLayout
          data={searchMovies}
          heading={`Results for '${query} #${pages}'`}
          loading={loading["search_" + pages]}
        />
        {searchMovies.length > 0 && (
          <PaginationButton
            page={pages}
            totalPage={totalPage}
            setPage={setPages}
            sectionRef={sectionRef}
            loading={loading["search_" + pages]}
          />
        )}
      </ContentLayouts>
    </>
  );
};

export default SearchPage;
