import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import RoutesConf from "./Routes";
import "./index.css";
import { store } from "./redux/store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RoutesConf />
    </Provider>
  </StrictMode>
);
