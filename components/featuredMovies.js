import React from "react";
import Card from "./card";

const FeaturedMovies = ({ movies }) => {
  return (
    <section className="max-w-[1308px] mx-auto lg:px-16">
      <h2 className="font-bold text-black lg:text-4xl mb-12">Featured Movie</h2>

      <div className="grid grid-cols-3 gap-y-9">
        {movies.map((movie) => (
          <Card key={movie.id} {...movie} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedMovies;
