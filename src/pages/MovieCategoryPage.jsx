import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
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
          loading={loading[category + "_" + page]}
          type={category}
          loadCardItem={10}
        />
        <PaginationButton
          page={page}
          totalPage={totalPage}
          setPage={setPage}
          sectionRef={sectionRef}
          loading={loading[category + "_" + page]}
        />
      </ContentLayouts>
    </>
  );
};

export default MovieCategoryPage;
