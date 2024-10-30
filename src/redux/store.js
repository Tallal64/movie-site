import { configureStore } from "@reduxjs/toolkit";
import { MovieApis } from "./services/movies";
import { TvSeriesApis } from "./services/tvSeriesApis";

export const store = configureStore({
  reducer: {
    [MovieApis.reducerPath]: MovieApis.reducer,
    [TvSeriesApis.reducerPath]: TvSeriesApis.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(MovieApis.middleware)
      .concat(TvSeriesApis.middleware),
});
