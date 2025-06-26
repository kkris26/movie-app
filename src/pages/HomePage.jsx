import { useRef, useState } from "react";
import ContentLayouts from "../layouts/ContentLayouts";
import useGetNowPlaying from "../hooks/useGetNowPlaying";
import useGetPopularMovie from "../hooks/useGetPopularMovie";
import useGetTopRatedMovie from "../hooks/useGetTopRatedMovie";
import useGetUpcomingMovie from "../hooks/useGetUpcomingMovie";
import MovieSliderLayouts from "../layouts/MovieSliderLayouts";
import HeroSectionLoad from "../components/Loading/HeroSectionLoad";
import FadeSlider from "../components/Slider/FadeSlider";

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

  return (
    <>
      {loading.now_playing_movie ? (
        <HeroSectionLoad />
      ) : (
        <div className="h-dvh relative flex items-center transition-all duration-300 ease-in-out">
          <FadeSlider
            item={nowPlayingMovie}
            customClass="inset-0   swiper-absolute"
          />
        </div>
      )}

      <ContentLayouts
        customClass="flex flex-col gap-6 md:gap-8 lg:gap-10 -mt-10 pt-22 md:pt-25 lg:pt-30"
        sectionRef={sectionRef}
      >
        <MovieSliderLayouts
          data={nowPlayingMovie}
          heading="Now Playing"
          loading={loading.now_playing_movie}
          link={"/now_playing"}
        />
        <MovieSliderLayouts
          data={popularMovie}
          heading="Popular Movie"
          loading={loading.popular_movie}
          link={"/popular"}
        />
        <MovieSliderLayouts
          data={topRatedMovie}
          heading="Top Rated"
          loading={loading.top_rated_movie}
          link={"/top_rated"}
        />
        <MovieSliderLayouts
          data={upcomingMovie}
          heading="Upcoming List"
          type="upcoming"
          loading={loading.upcoming_movie}
          link={"/upcoming"}
        />
      </ContentLayouts>
    </>
  );
};

export default HomePage;
