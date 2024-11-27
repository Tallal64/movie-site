import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const PersonApis = createApi({
  reducerPath: "PersonApis",
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
    // Get list of actors of movies
    getCredits: builder.query({
      query: (movie_id) => `movie/${movie_id}/credits`,
    }),
    // get all actors of tv show
    getPopularPeople: builder.query({
      query: () => "person/popular",
    }),
    // popular people
    getCreditsTv: builder.query({
      query: (series_id) => `tv/${series_id}/credits`,
    }),
    // GET PERSON BY ID
    getPersonById: builder.query({
      query: (person_id) => `/person/${person_id}`,
    }),
    // GET PERSON'S Combined Credits
    getPersonCombinedCredit: builder.query({
      query: (person_id) => `person/${person_id}/combined_credits`,
    }),
  }),
});

export const {
  useGetSearchQuery,
  useGetCreditsQuery,
  useGetPersonByIdQuery,
  useGetPopularPeopleQuery,
  useGetCreditsTvQuery,
  useGetPersonCombinedCreditQuery,
} = PersonApis;
