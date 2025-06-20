import { Route, Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import MovieDetails from "./pages/MovieDetails";
import SmoothFollower from "./components/utilities/CursorAnimation";

function App() {
  return (
    <>
      <Navbar />
      <SmoothFollower />

      {/* <Router> */}
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </MainLayout>
      {/* </Router> */}
    </>
  );
}

export default App;
