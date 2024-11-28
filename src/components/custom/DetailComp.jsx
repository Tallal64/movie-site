/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  useGetCreditsQuery,
  useGetCreditsTvQuery,
} from "@/redux/services/person";
import { CirclePlay } from "lucide-react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button } from "../ui/button";
import Row from "./Row";
import { skipToken } from "@reduxjs/toolkit/query";
import RowSkeleton from "./Skeletons/RowSkeleton";
import { Skeleton } from "../ui/skeleton";
import BillCastSkeleton from "./Skeletons/BillCastSkeleton";

const DetailComp = ({
  poster,
  title,
  tagline,
  overview,
  runtime,
  numberOfSeasons,
  rating,
  status,
  releasedDate,
  genre,
  backDrop,
}) => {
  const { Id, media_type: mediaType } = useParams();

  const {
    data: movieCastData,
    error: movieCastError,
    isLoading: movieCastLoading,
  } = useGetCreditsQuery(mediaType === "movie" ? Id : skipToken);
  const {
    data: tvCastData,
    error: tvCastError,
    isLoading: tvCastLoading,
  } = useGetCreditsTvQuery(mediaType === "tv" ? Id : skipToken);

  useEffect(() => {
    console.log("bill cast", movieCastData?.cast);
  });

  return (
    <div className="flex justify-center items-center w-full flex-col">
      <div className="flex">
        <div>
          <div className="flex gap-x-10">
            {/* right side  */}
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img
                src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${poster}`}
                alt="img"
              />
            </div>
            {/* left side  */}
            <div className="flex flex-col items-start gap-y-2.5 flex-1">
              <h2 className="text-5xl font-medium">{title}</h2>
              <h3 className="bg-secondary-foreground text-background italic px-2 text-xl">
                {tagline}
              </h3>
              <p className="text-lg text-white/75 max-w-screen-md">
                {overview}
              </p>
              <div className="text-white/70">
                {numberOfSeasons ? (
                  <p>
                    Total seasons:{" "}
                    <span className="text-white">{numberOfSeasons}</span>
                  </p>
                ) : (
                  <>
                    <p>Runtime {runtime} mins</p>
                    <span>{status}: </span>
                    <span>{releasedDate}</span>
                  </>
                )}
              </div>
              <div className="flex gap-x-2">
                <span className="capitalize text-white/65">genres:</span>
                <p className="space-x-1">
                  {genre.map((item) => item.name).join(", ")}
                </p>
              </div>
              <p className="bg-green-600 text-lg px-2">{rating}</p>

              <Button
                size="xl"
                className="mt-5 text-lg shadow-lg shadow-[#D32F2F]/75"
              >
                <CirclePlay className="!w-6 !h-6" />
                <p className="capitalize">watch Trailer</p>
              </Button>

              {/* cast */}
              <div className="">
                {movieCastLoading || tvCastLoading ? (
                  <BillCastSkeleton />
                ) : movieCastData?.cast || tvCastData?.cast ? (
                  <>
                    <h2 className="text-2xl font-body capitalize my-7">
                      top bill cast
                    </h2>
                    <Row
                      data={movieCastData?.cast || tvCastData?.cast}
                      className="max-w-screen-sm"
                    />
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        {/* backDrop */}
        <div className="absolute right-0 top-0 h-[75vh] w-full -z-10">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-t from-[#121212]" />
          <img
            alt="img"
            src={`https://image.tmdb.org/t/p/original/${backDrop}`}
            className="w-full h-full object-cover "
          />
        </div>
      </div>
    </div>
  );
};

export default DetailComp;
