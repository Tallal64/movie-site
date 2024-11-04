import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const TvSeriesApis = createApi({
  reducerPath: "TvSeriesApis",
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
    getTvShowVideos: builder.query({
      query: (tv_id) => `tv/${tv_id}/videos`,
    }),

    // popular people
    getPopularPeople: builder.query({
      query: () => "person/popular",
    }),

    // TV SERIES LISTS
    getTvSeriesById: builder.query({
      query: (series_id) => `tv/${series_id}`,
    }),
    getTrendingTvSeries: builder.query({
      query: () => "trending/tv/day",
    }),
    getTvSeriesAiringToday: builder.query({
      query: () => "tv/airing_today",
    }),
    getOnAirTvSeries: builder.query({
      query: () => "tv/on_the_air",
    }),
    getPopularTvSeries: builder.query({
      query: () => "tv/popular",
    }),
    getTopRatedTvSeries: builder.query({
      query: () => "tv/top_rated",
    }),
  }),
});

export const {
  useGetTvShowVideosQuery,
  useGetPopularPeopleQuery,
  useGetTvSeriesByIdQuery,
  useGetTrendingTvSeriesQuery,
  useGetTvSeriesAiringTodayQuery,
  useGetOnAirTvSeriesQuery,
  useGetPopularTvSeriesQuery,
  useGetTopRatedTvSeriesQuery,
} = TvSeriesApis;
