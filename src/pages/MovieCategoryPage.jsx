import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import MovieListLayout from "../layouts/MovieListLayout";
import ContentLayouts from "../layouts/ContentLayouts";
import useGetCategoryMovie from "../hooks/useGetCategoryMovie";
import PaginationButton from "../components/Pagination/PaginationButton";

const MovieCategoryPage = () => {
  const { category } = useParams();
  const [loading, setLoading] = useState({
    [category]: true,
  });
  const [page, setPage] = useState(1);
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
    { name: "Upcoming", link: "upcoming" },
  ];
  return (
    <>
      <ContentLayouts type="no-hero" sectionRef={sectionRef}>
        <MovieListLayout
          data={movieCategory}
          heading={
            "Category " + movieList.find((item) => item.link == category).name
          }
          loading={loading[category]}
          type={category}
          loadCardItem={10}
        />
        <PaginationButton
          page={page}
          totalPage={totalPage}
          setPage={setPage}
          sectionRef={sectionRef}
        />
      </ContentLayouts>
    </>
  );
};

export default MovieCategoryPage;
