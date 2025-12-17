import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import MovieDetails from "./pages/MovieDetails";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/explore" element={<Explore />}></Route>
      <Route path="/details" element={<MovieDetails />}></Route>
    </Routes>
  );
}

export default App;
