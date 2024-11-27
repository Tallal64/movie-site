import Row from "@/components/custom/Row";
import RowSkeleton from "@/components/custom/Skeletons/RowSkeleton";
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
    error: trendingSeriesError,
    isLoading: trendingSeriesIsloading,
  } = useGetTrendingTvSeriesQuery();

  useEffect(() => {
    console.log("trendingSeriesData", trendingSeriesData?.results);
  });

  return (
    <div className="px-5 lg:px-12 flex flex-col gap-y-4">
      {trendingMoviesError || trendingSeriesError ? (
        <>There was an error</>
      ) : trendingMoviesLoading || trendingSeriesIsloading ? (
        <RowSkeleton count={2} />
      ) : trendingMoviesData || trendingSeriesData ? (
        <>
          <Row
            title="movies trending nowadays"
            data={trendingMoviesData?.results}
          />
          <Row title="trending series" data={trendingSeriesData?.results} />
        </>
      ) : null}
    </div>
  );
};

export default Rows;
