import React, { useEffect, useState } from "react";
import { getAPIData } from "../services/getAPIService";
import { useParams } from "react-router-dom";
import HeroSectionLoad from "../components/Loading/HeroSectionLoad";
import HeroSection from "../layouts/HeroSection";
import MovieListLayout from "../layouts/MovieListLayout";
import ContentLayouts from "../layouts/ContentLayouts";
import useGetCategoryMovie from "../hooks/useGetCategoryMovie";

const MovieCategoryPage = () => {
  const { category } = useParams();
  const [loading, setLoading] = useState({
    [category]: true,
  });
  const { movieCategory } = useGetCategoryMovie(category, setLoading);

  const movieList = [
    { name: "Now Playing", link: "now_playing" },
    { name: "Popular", link: "popular" },
    { name: "Top Rated", link: "top_rated" },
    { name: "Upcoming", link: "upcoming" },
  ];
  return (
    <>
      <ContentLayouts type="no-hero">
        <MovieListLayout
          data={movieCategory}
          heading={
            "Category " + movieList.find((item) => item.link == category).name
          }
          loading={loading[category]}
          type={category}
          loadCardItem={10}
        />
      </ContentLayouts>
    </>
  );
};

export default MovieCategoryPage;
