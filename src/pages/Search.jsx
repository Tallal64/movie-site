import RowSkeleton from "@/components/custom/Skeletons/RowSkeleton";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useGetSearchQuery } from "@/redux/services/movies";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchData, setSearchData] = useState(undefined);
  const { data, isLoading, error } = useGetSearchQuery(searchQuery);
  let { media_type } = useParams();

  useEffect(() => {
    function handleEnterKey(e) {
      if (e.key === "Enter" && searchData) {
        e.preventDefault();
        console.log("enter key is pressed");
        console.log("search data : ", searchData);
      }
    }
    window.addEventListener("keydown", handleEnterKey);

    return () => {
      window.removeEventListener("keydown", handleEnterKey);
    };
  });

  useEffect(() => {
    if (error) {
      console.log(error);
    } else if (isLoading) {
      console.log(isLoading);
    } else if (data) {
      setSearchData(data.results);
    }
  }, [data, error, isLoading]);

  return (
    <div className="px-12 flex flex-col items-center mb-10">
      <Input
        type="search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for a movie, tv show or actor..."
        className="flex items-center justify-between bg-[#18181a] text-input w-3/4 py-4 rounded-lg border border-white/25"
      />

      {error ? (
        <>error here...</>
      ) : isLoading ? (
        <RowSkeleton />
      ) : data ? (
        <div className="grid grid-cols-5 gap-5 mt-10">
          {searchData?.map((item) => (
            <NavLink
              key={item.id}
              to={`/details/${
                media_type || item?.media_type || "actorDetail"
              }/${item.id}`}
            >
              <Card className="group cursor-pointer border-input">
                {item.poster_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/original/${item?.poster_path}`}
                    // alt={item.title || item.name}
                  />
                ) : (
                  <div className="bg-white/25 h-[408px] text-xl flex items-center justify-center text-white/30">
                    <span className="border">{item.title || item.name}</span>
                  </div>
                )}
              </Card>
            </NavLink>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Search;
