import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import App from "./Layout";
import Detail from "./pages/Detail";
import Home from "./pages/Home";

const RoutesConf = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<App />}>
            <Route path="/" element={<Home />} />
            <Route path="details/:media_type/:Id" element={<Detail />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default RoutesConf;
