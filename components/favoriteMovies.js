import React from "react";
import GridCard from "./gridCard";
import { useFav } from "@/context/context";

const FavoriteMovies = () => {
  const { movies } = useFav();
  return (
    <section className="max-w-[1308px] mx-auto lg:px-16 px-8 mt-20">
      <h2 className="font-bold text-black lg:text-4xl mb-12 text-2xl text-center md:text-start">
        Bookmarked movies
      </h2>

      {movies.length > 0 ? (
        <GridCard movies={movies} />
      ) : (
        <p className="text-lg text-center font-semibold">
          No movie has been bookmarked{" "}
        </p>
      )}
    </section>
  );
};

export default FavoriteMovies;
