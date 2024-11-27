import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const MovieApis = createApi({
  reducerPath: "MovieApis",
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
    // Use multi search when you want to search for movies, TV shows and people in a single request.
    getSearch: builder.query({
      query: (searchQuery) => `search/multi?query=${searchQuery}`,
    }),
    // Get recommended movies
    getRecommendedMovies: builder.query({
      query: (movie_id) => `movie/${movie_id}/recommendations`,
    }),
    // trending movies, tv shows, people "USED IN HERO_SECTION"
    getAll: builder.query({
      query: () => "trending/all/day",
    }),
    // MOVIE LISTS
    getMovieById: builder.query({
      query: (movie_id) => `movie/${movie_id}`,
    }),
    getTrendingMovies: builder.query({
      query: () => "trending/movie/day",
    }),
    getCurrentlyPlayingMoviesInTheatres: builder.query({
      query: () => "movie/now_playing",
    }),
    getPopularMovies: builder.query({
      query: () => "movie/popular",
    }),
    getTopRatedMovies: builder.query({
      query: () => "movie/top_rated",
    }),
    getUpcomingMovies: builder.query({
      query: () => "movie/upcoming",
    }),
  }),
});

export const {
  useGetSearchQuery,
  useGetRecommendedMoviesQuery,
  useGetAllQuery,
  useGetMovieByIdQuery,
  useGetTrendingMoviesQuery,
  useGetCurrentlyPlayingMoviesInTheatresQuery,
  useGetPopularMoviesQuery,
  useGetTopRatedMoviesQuery,
  useGetUpcomingMoviesQuery,
} = MovieApis;
