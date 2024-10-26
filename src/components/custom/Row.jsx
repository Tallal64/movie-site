import { Card } from "@/components/ui/card";
import { Heart, Plus } from "lucide-react";
import { Button } from "../ui/button";
import { CarouselItem } from "../ui/carousel";

const Row = ({ img }) => {
  return (
    <CarouselItem className="h-[250px] max-w-[450px] overflow-hidden">
      <Card className="relative overflow-hidden group">
        <img
          alt="Card image"
          src={`https://image.tmdb.org/t/p/original/${img}`}
          className="w-full h-full transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex gap-4">
            <Button
              size="icon"
              className="bg-white rounded-full text-gray-800 hover:bg-gray-200 transition-colors duration-200"
            >
              <Plus className="w-6 h-6" />
            </Button>
            <Button
              size="icon"
              className="bg-white rounded-full text-gray-800 hover:bg-gray-200 transition-colors duration-200"
            >
              <Heart className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </Card>
    </CarouselItem>
  );
};

export default Row;
