import React from "react";

import GridCard from "./gridCard";

const FeaturedMovies = ({ movies }) => {
  return (
    <section className="max-w-[1308px] mx-auto lg:px-16 px-8">
      <h2 className="font-bold text-black lg:text-4xl mb-12 text-2xl text-center md:text-start">
        Featured Movie
      </h2>

      <GridCard movies={movies} />
    </section>
  );
};

export default FeaturedMovies;
