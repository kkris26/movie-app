import { Route, useLocation, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import MovieDetails from "./pages/MovieDetails";
import SmoothFollower from "./components/utilities/CursorAnimation";
import PageTransitions from "./components/utilities/transitions/PageTransitions";
import { AnimatePresence } from "framer-motion";
import MovieByGenres from "./pages/MovieByGenres";
import MovieCategoryPage from "./pages/MovieCategoryPage";
import Footer from "./components/Footer/Footer";
import FavoriteMoviePage from "./pages/FavoriteMoviePage";
import ThemeToggle from "./components/Button/ThemeToggle";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  const location = useLocation();
  return (
    <>
      <Navbar pathname={location.pathname} />
      <SmoothFollower />
      {/* <AudioPlay /> */}
      <ThemeToggle />
      <MainLayout>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageTransitions>
                  <HomePage />
                </PageTransitions>
              }
            />
            <Route
              path="/movie/:id"
              element={
                <PageTransitions>
                  <MovieDetails />
                </PageTransitions>
              }
            />
            <Route
              path="/genre/:id"
              element={
                <PageTransitions>
                  <MovieByGenres />
                </PageTransitions>
              }
            />
            <Route
              path="/category/:category"
              element={
                <PageTransitions>
                  <MovieCategoryPage />
                </PageTransitions>
              }
            />
            <Route
              path="/favorite"
              repla
              element={
                <PageTransitions>
                  <FavoriteMoviePage />
                </PageTransitions>
              }
            />
            <Route
              path="404"
              element={
                <PageTransitions>
                  <NotFoundPage />
                </PageTransitions>
              }
            />
            <Route
              path="*"
              element={
                <PageTransitions>
                  <NotFoundPage />
                </PageTransitions>
              }
            />
          </Routes>
        </AnimatePresence>
      </MainLayout>
      <Footer />
    </>
  );
}

export default App;
