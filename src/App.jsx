import Navbar from "./components/Navbar/Navbar";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Navbar />
      <MainLayout>
        <HomePage />
      </MainLayout>
    </>
  );
}

export default App;
