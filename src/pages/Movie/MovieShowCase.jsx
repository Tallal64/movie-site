import Banner from "@/components/custom/Banner";
import BannerSkeleton from "@/components/custom/Skeletons/BannerSkeleton";
import { useGetTrendingMoviesQuery } from "@/redux/services/movies";
import { useEffect, useState } from "react";

const MovieShowCase = () => {
  const [movies, setMovies] = useState("");
  const { data, error, isLoading } = useGetTrendingMoviesQuery();
  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    if (error) {
      console.log(error);
    } else if (isLoading) {
      console.log(isLoading);
    } else if (data) {
      setMovies(data.results);
      // console.log(data.results);
      // console.log("random", TvShow);
    } else {
      console.log("cheen tapak dam dam");
    }
  }, [error, isLoading, data, movie]);

  return (
    <div className="">
      {/* bottom strip to blur the showCase img from it's bottom */}
      <div className="absolute -z-10 bottom-[-5%] w-full h-28 bg-background blur-xl border" />

      {error ? (
        <div className="text-xl text-primary capitalize">
          there was an error while fetching the API
        </div>
      ) : isLoading ? (
        <div className="text-secondary-foreground">
          <BannerSkeleton />
        </div>
      ) : data ? (
        <Banner media_type={movie} />
      ) : (
        <p>error hai pai</p>
      )}
    </div>
  );
};

export default MovieShowCase;
