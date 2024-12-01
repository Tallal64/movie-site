/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";
import { CirclePlay, Info } from "lucide-react";

const Banner = ({ media_type }) => {
  function truncateString(str, num) {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }

  return (
    <div className="h-[80vh] px-5 lg:px-12 pb-32 flex flex-col items-start justify-end gap-y-7">
      <h3 className="text-3xl md:text-5xl font-bold max-w-screen-lg">
        {media_type?.title || media_type?.name}
      </h3>
      <p className="max-w-screen-lg text-white/80 w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%]">
        {truncateString(media_type?.overview, 150)}
      </p>
      <div className="space-x-6">
        <Button size="lg" className="py-2 px-5 shadow-lg shadow-[#D32F2F]/75">
          <CirclePlay className="!w-6 !h-6" />
          <p className="capitalize text-base">watch now</p>
        </Button>
        <Button variant="outline" size="lg" className="py-2 px-5">
          <Info className="!w-6 !h-6" />
          <p className="capitalize text-base">more info</p>
        </Button>
      </div>

      {/* background image */}
      <div className="absolute right-0 top-0 h-full w-full -z-20 ">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-tr from-black" />
        <img
          alt="img"
          src={`https://image.tmdb.org/t/p/original/${media_type?.backdrop_path}`}
          className="w-full h-full object-cover "
        />
      </div>
    </div>
  );
};

export default Banner;
