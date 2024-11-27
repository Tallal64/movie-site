import Row from "@/components/custom/Row";
import { useGetTrendingMoviesQuery } from "@/redux/services/movies";
import { useGetTrendingTvSeriesQuery } from "@/redux/services/tvSeriesApis";
import { useEffect } from "react";

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

  useEffect(() => {
    console.log("trendingSeriesData", trendingSeriesData?.results);
  });

  return (
    <div className="px-5 lg:px-12 flex flex-col gap-y-4">
      <Row
        title="movies trending nowadays"
        data={trendingMoviesData?.results}
      />
      <Row title="trending series" data={trendingSeriesData?.results} />
    </div>
  );
};

export default Rows;
