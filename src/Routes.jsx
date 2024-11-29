import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import App from "./Layout";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Movies from "./pages/Movie";
import Search from "./pages/Search";
import TvShows from "./pages/Tv";

const RoutesConf = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<App />}>
            <Route path="/" element={<Home />} />
            <Route path="tv" element={<TvShows />} />
            <Route path="movies" element={<Movies />} />
            <Route path="search" element={<Search />} />
            <Route path="details/:media_type/:Id" element={<Detail />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default RoutesConf;
