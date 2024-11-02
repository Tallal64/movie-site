import Row from "@/components/custom/Row";
import { useGetTrendingMoviesQuery } from "@/redux/services/movies";
import {
  useGetPopularPeopleQuery,
  useGetTrendingTvSeriesQuery,
} from "@/redux/services/tvSeriesApis";

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
  const {
    data: peopleData,
    error: peopleError,
    isLoading: peopleLoading,
  } = useGetPopularPeopleQuery();

  return (
    <div className="px-5 lg:px-12 flex flex-col gap-y-4">
      <Row
        title="movies trending nowadays"
        movies={trendingMoviesData?.results}
      />
      <Row title="trending series" movies={trendingSeriesData?.results} />
      <Row title="Popular actors" movies={peopleData?.results} />
    </div>
  );
};

export default Rows;
