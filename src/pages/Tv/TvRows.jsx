import Row from "@/components/custom/Row";
import RowSkeleton from "@/components/custom/Skeletons/RowSkeleton";
import {
  useGetOnAirTvSeriesQuery,
  useGetPopularTvSeriesQuery,
  useGetTopRatedTvSeriesQuery,
  useGetTrendingTvSeriesQuery,
  useGetTvSeriesAiringTodayQuery,
} from "@/redux/services/tvSeriesApis";
import { useEffect } from "react";

const TvRows = () => {
  const { data: OnAirTvSeriesData, isLoading: OnAirTvSeriesLoading } =
    useGetOnAirTvSeriesQuery();
  const { data: TopRatedTvSeriesData, isLoading: TopRatedTvSeriesLoading } =
    useGetTopRatedTvSeriesQuery();
  const { data: PopularTvSeriesData, isLoading: PopularTvSeriesLoading } =
    useGetPopularTvSeriesQuery();
  const { data: TrendingTvSeriesData, isLoading: TrendingTvSeriesLoading } =
    useGetTrendingTvSeriesQuery();
  const { data: AiringTodayData, isLoading: AiringTodayLoading } =
    useGetTvSeriesAiringTodayQuery();

  useEffect(() => {
    console.log("on air", OnAirTvSeriesData?.results);
    console.log("top rated shows", TopRatedTvSeriesData?.results);
    console.log("Popular series", PopularTvSeriesData?.results);
    console.log("trending", TrendingTvSeriesData?.results);
    console.log("airing today", AiringTodayData?.results);
  });

  return (
    <div className="px-5 lg:px-12 flex flex-col gap-y-4">
      {OnAirTvSeriesLoading ||
      TopRatedTvSeriesLoading ||
      PopularTvSeriesLoading ||
      TrendingTvSeriesLoading ||
      AiringTodayLoading ? (
        <RowSkeleton count={5} />
      ) : OnAirTvSeriesData ||
        TopRatedTvSeriesData ||
        PopularTvSeriesData ||
        TrendingTvSeriesData ||
        AiringTodayData ? (
        <>
          <Row
            title="airing nowadays"
            media_type={"tv"}
            data={OnAirTvSeriesData?.results}
          />
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
        </>
      ) : null}
    </div>
  );
};

export default TvRows;
