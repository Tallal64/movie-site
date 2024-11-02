import { configureStore } from "@reduxjs/toolkit";
import movieFeature from "./feature/feature";
import { MovieApis } from "./services/movies";
import { TvSeriesApis } from "./services/tvSeriesApis";

export const store = configureStore({
  reducer: {
    [MovieApis.reducerPath]: MovieApis.reducer,
    [TvSeriesApis.reducerPath]: TvSeriesApis.reducer,
    movie: movieFeature,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(MovieApis.middleware)
      .concat(TvSeriesApis.middleware),
});
