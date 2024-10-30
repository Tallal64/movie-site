import Row from "@/components/custom/Row";
import { useGetTrendingMoviesQuery } from "@/redux/services/movies";
import { useGetTrendingTvSeriesQuery } from "@/redux/services/tvSeriesApis";

const Rows = () => {
  const {
    data: trendingMoviesData,
    error: trendingMoviesError,
    isLoading: trendingMoviesLoading,
  } = useGetTrendingMoviesQuery();
  const {
    data: trendingSeriesData,
    error: seriesError,
    isLoading: seriesIsloading,
  } = useGetTrendingTvSeriesQuery();

  return (
    <div className="px-5 lg:px-12">
      <Row title="movies trending nowadays" movies={trendingMoviesData?.results} />
      <Row title="trending series" movies={trendingSeriesData?.results} />
    </div>
  );
};

export default Rows;
