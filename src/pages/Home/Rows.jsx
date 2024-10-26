import Row from "@/components/custom/Row";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  useGetCurrentlyPlayingMoviesInTheatresQuery,
  useGetPopularMoviesQuery,
  useGetTopRatedMoviesQuery,
  useGetUpcomingMoviesQuery,
} from "@/redux/services/services";
import { useEffect, useState } from "react";

const Rows = () => {
  const [movies, setMovies] = useState([]);
  //   const { data, error, isLoading } = useGetPopularMoviesQuery();
  const { data, error, isLoading } = useGetTopRatedMoviesQuery();
  //   const { data, error, isLoading } = useGetUpcomingMoviesQuery();

  useEffect(() => {
    setMovies(data?.results);
  });

  return (
    <div className="px-5 lg:px-12">
      {error ? (
        <div className="text-xl text-primary capitalize">
          there was an error while fetching the API
        </div>
      ) : isLoading ? (
        <div className="text-secondary-foreground">Loading...</div>
      ) : data ? (
        <div className="-mt-4 px-10">
          <h3 className="text-3xl font-body capitalize font-semibold mb-4">
            top rated movies
          </h3>

          <Carousel>
            <div className="rounded-lg overflow-hidden">
              <CarouselContent>
                {movies?.map((movie) => (
                  <Row key={movie?.id} img={movie?.backdrop_path} />
                ))}
              </CarouselContent>
              <CarouselNext />
              <CarouselPrevious />
            </div>
          </Carousel>
        </div>
      ) : null}
    </div>
  );
};

export default Rows;
