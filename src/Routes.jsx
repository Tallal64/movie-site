import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import App from "./Layout";
import Home from "./pages/Home";

const RoutesConf = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<App />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default RoutesConf;
