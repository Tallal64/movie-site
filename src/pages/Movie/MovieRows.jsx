import Row from "@/components/custom/Row";
import RowSkeleton from "@/components/custom/Skeletons/RowSkeleton";
import {
  useGetCurrentlyPlayingMoviesInTheatresQuery,
  useGetPopularMoviesQuery,
  useGetTopRatedMoviesQuery,
  useGetTrendingMoviesQuery,
  useGetUpcomingMoviesQuery,
} from "@/redux/services/movies";

const MovieRows = () => {
  const { data: MoviesInTheatresData } =
    useGetCurrentlyPlayingMoviesInTheatresQuery();
  const { data: PopularMoviesData, isLoading: PopularMoviesLoading } =
    useGetPopularMoviesQuery();
  const { data: TopRatedMoviesData, isLoading: TopRatedMoviesLoading } =
    useGetTopRatedMoviesQuery();
  const { data: TrendingMoviesData, isLoading: TrendingMoviesLoading } =
    useGetTrendingMoviesQuery();
  const { data: UpcomingMoviesData, isLoading: UpcomingMoviesLoading } =
    useGetUpcomingMoviesQuery();

  return (
    <div className="px-5 lg:px-12 flex flex-col gap-y-4">
      {PopularMoviesLoading ||
      TopRatedMoviesLoading ||
      TrendingMoviesLoading ||
      UpcomingMoviesLoading ? (
        <>
          <RowSkeleton count={4} />
        </>
      ) : PopularMoviesData ||
        TopRatedMoviesData ||
        TrendingMoviesData ||
        UpcomingMoviesData ? (
        <>
          <Row
            title="in theatres"
            media_type={"movie"}
            data={MoviesInTheatresData?.results}
          />
          <Row
            title="popular"
            media_type={"movie"}
            data={PopularMoviesData?.results}
          />
          <Row
            title="top rated"
            media_type={"movie"}
            data={TopRatedMoviesData?.results}
          />
          <Row
            title="trending"
            media_type={"movie"}
            data={TrendingMoviesData?.results}
          />
          <Row
            title="Up coming"
            media_type={"movie"}
            data={UpcomingMoviesData?.results}
          />
        </>
      ) : null}
    </div>
  );
};

export default MovieRows;
