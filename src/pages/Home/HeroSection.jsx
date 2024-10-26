import { Button } from "@/components/ui/button";
import { useGetCurrentlyPlayingMoviesInTheatresQuery } from "@/redux/services/services";
import { Play, Info, CirclePlay } from "lucide-react";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [movies, SetMovies] = useState("");
  const { data, error, isLoading } =
    useGetCurrentlyPlayingMoviesInTheatresQuery();

  // random selection
  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    if (error) {
      console.log(error);
    } else if (isLoading) {
      console.log(isLoading);
    } else if (data) {
      SetMovies(data.results);
      console.log(data.results);
      console.log("random", movie);
    } else {
      console.log("cheen tapak dam dam");
    }
  }, [error, isLoading, data, movie]);

  return (
    <div className="px-5 lg:px-12">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <div className="h-[750px] pb-32 flex flex-col items-start justify-end gap-y-7">
          <h3 className="text-8xl font-semibold max-w-screen-lg">
            {movie?.title}
          </h3>
          <p className="text-xl max-w-screen-lg font-medium text-white/65">
            {movie?.overview}
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
          <div className="absolute right-0 top-0 h-[850px] w-full -z-10 ">
            <div className="absolute top-0 right-0 w-full h-full bg-black/65" />
            <img
              alt="img"
              src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      ) : (
        <p>error hai pai</p>
      )}
    </div>
  );
};

export default HeroSection;
