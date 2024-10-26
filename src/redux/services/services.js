import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const TMDB_API = createApi({
  reducerPath: "TMDB_API",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/",
    prepareHeaders: (headers) => {
      const token = import.meta.env.VITE_TMDB_API_ACCESS_TOKEN;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getCurrentlyPlayingMoviesInTheatres: builder.query({
      query: () => 'movie/now_playing?language=en-US&page=1',

    }),
  }),
});

export const { useGetCurrentlyPlayingMoviesInTheatresQuery } = TMDB_API;
