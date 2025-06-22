import { Route, useLocation, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import MovieDetails from "./pages/MovieDetails";
import SmoothFollower from "./components/utilities/CursorAnimation";
import PageTransitions from "./components/utilities/transitions/PageTransitions";
import { AnimatePresence } from "framer-motion";
import AudioPlay from "./components/Button/AudioPlay";
import MovieByGenres from "./pages/MovieByGenres";

function App() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <SmoothFollower />
      <AudioPlay />

      {/* <Router> */}
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
          </Routes>
        </AnimatePresence>
      </MainLayout>
      {/* </Router> */}
    </>
  );
}

export default App;
