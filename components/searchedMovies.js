import React from "react";
import Card from "./card";
import GridCard from "./gridCard";

const SearchedMovies = ({ movies }) => {
  return (
    <section className="max-w-[1308px] mx-auto lg:px-16">
      <h2 className="font-bold text-black lg:text-4xl mb-12">Search Result</h2>

      <GridCard movies={movies} />
    </section>
  );
};

export default SearchedMovies;
