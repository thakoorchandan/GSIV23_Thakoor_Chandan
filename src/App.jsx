import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Components
import NavBar from "./components/layout/NavBar";

//Pages
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Search from "./pages/Search";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/movie/:name/:id" element={<Movie />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;
