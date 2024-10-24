import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import RoutesConf from "./Routes";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RoutesConf />
  </StrictMode>
);
