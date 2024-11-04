import DetailComp from "@/components/custom/DetailComp";
import { useGetMovieByIdQuery } from "@/redux/services/movies";
import { useGetTvSeriesByIdQuery } from "@/redux/services/tvSeriesApis";
import { skipToken } from "@reduxjs/toolkit/query/react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  let { Id, media_type } = useParams();

  const {
    data: MovieData,
    error: MovieError,
    isLoading: MovieLoading,
  } = useGetMovieByIdQuery(media_type === "movie" ? Id : skipToken);

  const {
    data: seriesData,
    error: seriesError,
    isLoading: seriesLoading,
  } = useGetTvSeriesByIdQuery(media_type === "tv" ? Id : skipToken);

  useEffect(() => {
    console.log("seriesData", seriesData);
    console.log("MovieData", MovieData);
    // console.log("media_type", media_type);
  });

  return (
    <div className="px-5 lg:px-12">
      {MovieError || seriesError ? (
        <div>error while fetching</div>
      ) : MovieLoading || seriesLoading ? (
        <div>loading....</div>
      ) : MovieData || seriesData ? (
        <div className="flex gap-x-10 py-14 px-44">
          <DetailComp
            poster={MovieData?.poster_path || seriesData?.poster_path}
            title={MovieData?.title || seriesData?.name}
            overview={MovieData?.overview || seriesData?.overview}
            backDrop={MovieData?.backdrop_path || seriesData?.backdrop_path}
            genre={MovieData?.genres || seriesData?.genres}
          />
        </div>
      ) : null}
    </div>
  );
};

export default Detail;
