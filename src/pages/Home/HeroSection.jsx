import Banner from "@/components/custom/Banner";
import { useGetAllQuery } from "@/redux/services/movies";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [movies, SetMovies] = useState("");
  const { data, error, isLoading } = useGetAllQuery();

  // random selection
  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    if (error) {
      console.log(error);
    } else if (isLoading) {
      console.log(isLoading);
    } else if (data) {
      SetMovies(data.results);
      // console.log("hersocljasdfl", data.results);
      // console.log("random", movie);
    } else {
      console.log("cheen tapak dam dam");
    }
  }, [error, isLoading, data, movie]);

  return (
    <div className="">
      {/* bottom strip to blur the showCase img from it's bottom */}
      <div className="absolute bottom-[-5%] w-full h-28 bg-background blur-xl border" />

      {error ? (
        <div className="text-xl text-primary capitalize">
          there was an error while fetching the API
        </div>
      ) : isLoading ? (
        <div className="text-secondary-foreground">Loading...</div>
      ) : data ? (
        <Banner media_type={movie} />
      ) : (
        <p>error hai pai</p>
      )}
    </div>
  );
};

export default HeroSection;
