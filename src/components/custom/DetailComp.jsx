/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  useGetCreditsQuery,
  useGetCreditsTvQuery,
} from "@/redux/services/person";
import { useGetTvShowVideosQuery } from "@/redux/services/tvSeriesApis";
import { skipToken } from "@reduxjs/toolkit/query/react";
import { CirclePlay } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "../ui/button";
import Row from "./Row";

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
  const [clicked, setClicked] = useState(false);
  const { Id, media_type: mediaType } = useParams();
  const { data, error, isLoading } = useGetTvShowVideosQuery();

  const {
    data: movieCastData,
    error: movieCastError,
    isLoading: movieCastLoading,
  } = useGetCreditsQuery(Id);
  const {
    data: tvCastData,
    error: tvCastError,
    isLoading: tvCastLoading,
  } = useGetCreditsTvQuery(Id);

  const videos = data?.results;

  const handleClick = () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    // console.log("video data",data?.results);
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
                onClick={handleClick}
              >
                <CirclePlay className="!w-6 !h-6" />
                <p className="capitalize">watch Trailer</p>
              </Button>

              {/* cast */}
              <div className="">
                {movieCastData?.cast || tvCastData?.cast ? (
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

          {/* videos */}
          <div className="m-16">
            {clicked && videos && videos.length > 0 ? (
              <div>
                {videos
                  .filter(
                    (video) =>
                      video.site === "YouTube" && video.type === "Trailer"
                  ) // Filtering by site and type
                  .map((video) => (
                    <div key={video.id}>
                      <iframe
                        width="560"
                        height="315"
                        src={`https://www.youtube.com/embed/${video.key}`}
                        title={video.name}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  ))}
              </div>
            ) : null}
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
