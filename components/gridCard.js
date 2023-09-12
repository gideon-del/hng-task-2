import React from "react";
import Card from "./card";

const GridCard = ({ movies }) => {
  return (
    <div className="flexible-grid lg:gap-y-9 gap-10 md:gap-5  items-center ">
      {movies.map((movie) => (
        <Card key={movie.id} {...movie} />
      ))}
    </div>
  );
};

export default GridCard;
