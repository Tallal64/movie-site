import { configureStore } from "@reduxjs/toolkit";
import { MovieApis } from "./services/movies";
import { PersonApis } from "./services/person";
import { TvSeriesApis } from "./services/tvSeriesApis";

export const store = configureStore({
  reducer: {
    [MovieApis.reducerPath]: MovieApis.reducer,
    [TvSeriesApis.reducerPath]: TvSeriesApis.reducer,
    [PersonApis.reducerPath]: PersonApis.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(MovieApis.middleware)
      .concat(TvSeriesApis.middleware)
      .concat(PersonApis.middleware),
});
