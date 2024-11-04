import Row from "@/components/custom/Row";
import {
  useGetOnAirTvSeriesQuery,
  useGetPopularTvSeriesQuery,
  useGetTopRatedTvSeriesQuery,
  useGetTrendingTvSeriesQuery,
  useGetTvSeriesAiringTodayQuery,
} from "@/redux/services/tvSeriesApis";
import { useEffect } from "react";

const TvRows = () => {
  const { data: OnAirTvSeriesData } = useGetOnAirTvSeriesQuery();
  const { data: TopRatedTvSeriesData } = useGetTopRatedTvSeriesQuery();
  const { data: PopularTvSeriesData } = useGetPopularTvSeriesQuery();
  const { data: TrendingTvSeriesData } = useGetTrendingTvSeriesQuery();
  const { data: AiringTodayData } = useGetTvSeriesAiringTodayQuery();

  useEffect(() => {
    console.log("OnAirTvSeriesData", OnAirTvSeriesData?.results);
    console.log("TopRatedTvSeriesData", TopRatedTvSeriesData?.results);
    console.log("PopularTvSeriesData", PopularTvSeriesData?.results);
    console.log("TrendingTvSeriesData", TrendingTvSeriesData?.results);
  });

  return (
    <div className="px-5 lg:px-12 flex flex-col gap-y-4">
      <Row title="on air" media_type={"tv"} item={OnAirTvSeriesData?.results} />
      <Row
        title="top rated shows"
        media_type={"tv"}
        data={TopRatedTvSeriesData?.results}
      />
      <Row
        title="Popular series"
        media_type={"tv"}
        data={PopularTvSeriesData?.results}
      />
      <Row
        title="trending"
        media_type={"tv"}
        data={TrendingTvSeriesData?.results}
      />
      <Row
        title="airing today"
        media_type={"tv"}
        data={AiringTodayData?.results}
      />
    </div>
  );
};

export default TvRows;
