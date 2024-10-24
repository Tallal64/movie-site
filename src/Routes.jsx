import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./Layout";

const RoutesConf = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          {/* <Route path="/" element={Home} />
            <Route path="/tv-shows" element={TvShows} />
            <Route path="/movies" element={Movies} />
            <Route path="/new-and-popular" element={NewAndPopular} />
            <Route path="/my-list" element={MyList} /> */}
          {/* </Route> */}
        </Routes>
      </Router>
    </>
  );
};

export default RoutesConf;
