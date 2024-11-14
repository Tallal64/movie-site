/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";
import { CirclePlay, Info } from "lucide-react";

const Banner = ({ media_type }) => {
  return (
    <div className="h-[80vh] px-5 lg:px-12 pb-32 flex flex-col items-start justify-end gap-y-7">
      <h3 className="text-7xl font-semibold max-w-screen-lg">
        {media_type?.title || media_type?.name}
      </h3>
      <p className="text-xl max-w-screen-lg font-medium text-white/65">
        {media_type?.overview}
      </p>
      <div className="space-x-6">
        <Button size="xl" className="text-lg shadow-lg shadow-[#D32F2F]/75">
          <CirclePlay className="!w-6 !h-6" />
          <p className="capitalize">watch now</p>
        </Button>
        <Button variant="outline" size="xl" className="text-lg">
          <Info className="!w-6 !h-6" />
          <p className="capitalize">more info</p>
        </Button>
      </div>

      {/* background image */}
      <div className="absolute right-0 top-0 h-full w-full -z-20 ">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-r from-black/90" />
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
