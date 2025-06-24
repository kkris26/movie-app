import { useRef, useState } from "react";
import HeroLayout from "../layouts/HeroLayout";
import MovieListLayout from "../layouts/MovieListLayout";
import ContentLayouts from "../layouts/ContentLayouts";
import useGetNowPlaying from "../hooks/useGetNowPlaying";
import useGetPopularMovie from "../hooks/useGetPopularMovie";
import useGetTopRatedMovie from "../hooks/useGetTopRatedMovie";
import useGetUpcomingMovie from "../hooks/useGetUpcomingMovie";

const HomePage = () => {
  const [loading, setLoading] = useState({
    genre: true,
    now_playing_movie: true,
    popular_movie: true,
    top_rated_movie: true,
    upcoming_movie: true,
  });
  const { nowPlayingMovie } = useGetNowPlaying(setLoading);
  const { popularMovie } = useGetPopularMovie(setLoading);
  const { topRatedMovie } = useGetTopRatedMovie(setLoading);
  const { upcomingMovie } = useGetUpcomingMovie(setLoading);
  const sectionRef = useRef();

  const scroolTo = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <HeroLayout
        loading={loading}
        data={nowPlayingMovie}
        scrollAction={scroolTo}
      />

      <ContentLayouts customClass="flex flex-col gap-10 pt-20" ref={sectionRef}>
        <MovieListLayout
          data={nowPlayingMovie}
          heading="Now Playing"
          loading={loading.now_playing_movie}
          max={5}
          btnLink="/now_playing"
          btntext="View More"
        />
        <MovieListLayout
          data={popularMovie}
          heading="Popular Movie"
          loading={loading.popular_movie}
          max={5}
          btnLink="/popular"
          btntext="View More"
        />
        <MovieListLayout
          data={topRatedMovie}
          heading="Top Rated"
          loading={loading.top_rated_movie}
          max={5}
          btnLink="/top_rated"
          btntext="View More"
        />
        <MovieListLayout
          data={upcomingMovie}
          heading="Upcoming List"
          type="upcoming"
          loading={loading.upcoming_movie}
          max={5}
          btnLink="/upcoming"
          btntext="View More"
        />
      </ContentLayouts>
    </>
  );
};

export default HomePage;
