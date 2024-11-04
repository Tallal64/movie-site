import Row from "@/components/custom/Row";
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
  const { data: PopularMoviesData } = useGetPopularMoviesQuery();
  const { data: TopRatedMoviesData } = useGetTopRatedMoviesQuery();
  const { data: TrendingMoviesData } = useGetTrendingMoviesQuery();
  const { data: UpcomingMoviesData } = useGetUpcomingMoviesQuery();

  return (
    <div className="px-5 lg:px-12 flex flex-col gap-y-4">
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
    </div>
  );
};

export default MovieRows;
