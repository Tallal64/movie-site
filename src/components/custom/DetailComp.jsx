import React from "react";

const DetailComp = ({ poster, title, overview, genre, backDrop }) => {
  return (
    <>
      {/* right side  */}
      <div className="rounded-lg overflow-hidden shadow-2xl">
        <img
          src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${poster}`}
          alt="img"
        />
      </div>
      {/* left side  */}
      <div className="flex flex-col gap-y-5 flex-1">
        <h2 className="text-7xl font-medium">{title}</h2>
        <p className="text-xl text-white/75 pr-12">{overview}</p>
        <div className="flex gap-x-2">
          <span className="capitalize text-white/65">genres:</span>
          <p className="space-x-1">
            {genre.map((item) => item.name).join(", ")}
          </p>
        </div>
      </div>
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
