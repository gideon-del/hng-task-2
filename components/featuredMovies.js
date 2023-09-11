import React from "react";
import Card from "./card";

const FeaturedMovies = ({ movies }) => {
  return (
    <section className="max-w-[1308px] mx-auto lg:px-16 px-8">
      <h2 className="font-bold text-black lg:text-4xl mb-12 text-2xl text-center md:text-start">
        Featured Movie
      </h2>

      <div className="flexible-grid lg:gap-y-9 gap-10 md:gap-5  items-center ">
        {movies.map((movie) => (
          <Card key={movie.id} {...movie} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedMovies;
