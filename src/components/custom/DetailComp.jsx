import { useGetTvShowVideosQuery } from "@/redux/services/tvSeriesApis";
import { skipToken } from "@reduxjs/toolkit/query/react";
import { CirclePlay } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "../ui/button";

const DetailComp = ({ poster, title, overview, genre, backDrop }) => {
  // https://api.themoviedb.org/3/tv/194764/videos?api_key=699eb2d0992b7bdf003eb03f35cb3eb1
  const [clicked, setClicked] = useState(false);
  const { Id: tv_id } = useParams();
  const { data, error, isLoading } = useGetTvShowVideosQuery(
    clicked ? tv_id : skipToken
  );

  const videos = data?.results;

  const handleClick = () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    console.table(data?.results);
  });

  return (
    <>
      {/* right side  */}
      <div className="">
        <div className="flex gap-x-10">
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <img
              src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${poster}`}
              alt="img"
            />
          </div>
          {/* left side  */}
          <div className="flex flex-col items-start gap-y-5 flex-1">
            <h2 className="text-7xl font-medium">{title}</h2>
            <p className="text-xl text-white/75 max-w-screen-md">{overview}</p>
            <div className="flex gap-x-2">
              <span className="capitalize text-white/65">genres:</span>
              <p className="space-x-1">
                {genre.map((item) => item.name).join(", ")}
              </p>
            </div>
            <Button
              size="xl"
              className="mt-5 text-lg shadow-lg shadow-[#D32F2F]/75"
              onClick={handleClick}
            >
              <CirclePlay className="!w-6 !h-6" />
              <p className="capitalize">watch Trailer</p>
            </Button>
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
      <div className="absolute right-0 top-0 h-[80vh] w-full -z-10">
        <div className="absolute top-0 right-0 w-full h-full bg-black/75" />
        <img
          alt="img"
          src={`https://image.tmdb.org/t/p/original/${backDrop}`}
          className="w-full h-full object-cover "
        />
      </div>
    </>
  );
};

export default DetailComp;
