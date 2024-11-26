/* eslint-disable react/prop-types */
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Heart, Plus } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";

const Row = ({ title, data, media_type, ...restProps }) => {
  return (
    <div className="-mt-4 px-10 mb-10">
      <h3 className="text-2xl font-body capitalize font-semibold mb-4">
        {title}
      </h3>
      <Carousel {...restProps}>
        <div className="rounded-lg overflow-hidden">
          <CarouselContent>
            {data?.map((item) => (
              <CarouselItem
                key={item?.id}
                className="max-w-max overflow-hidden"
              >
                <NavLink
                  to={`/details/${media_type || item?.media_type || "person"}/${
                    item.id
                  }`}
                >
                  <Card className="relative overflow-hidden group">
                    {item?.profile_path || item?.poster_path ? (
                      item?.profile_path ? (
                        <div className="w-[100px] h-[150px]">
                          <img
                            src={`https://image.tmdb.org/t/p/w138_and_h175_face/${item?.profile_path}`}
                            className="transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                      ) : (
                        <img
                          src={`https://image.tmdb.org/t/p/w220_and_h330_face/${item?.poster_path}`}
                          className="transition-transform duration-300 group-hover:scale-110"
                        />
                      )
                    ) : null}

                    <div
                      className={`${
                        item?.profile_path
                          ? "hidden"
                          : "absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-end p-5"
                      } `}
                    >
                      <div className="flex flex-col gap-4">
                        <Button
                          size="icon"
                          className="bg-foreground rounded-full text-muted-foreground hover:bg-gray-200 transition-colors duration-200"
                        >
                          <Plus className="w-6 h-6" />
                        </Button>
                        <Button
                          size="icon"
                          className="bg-foreground rounded-full text-muted-foreground hover:bg-gray-200 transition-colors duration-200"
                        >
                          <Heart className="w-6 h-6" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                </NavLink>
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Row;
