import Image from "next/image";
import React from "react";

const Card = ({ title, poster_path, release_date }) => {
  return (
    <article
      data-testid="movie-card"
      className="cursor-pointer flex flex-col gap-3"
    >
      <figure>
        <Image
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          width={250}
          height={370}
          alt="poster"
          data-testid="movie-poster"
          className="w-auto h-auto"
        />
      </figure>
      <p className="text-gray40 font-bold text-xs">
        USA,<span data-testid="movie-release-date">{release_date}</span>{" "}
      </p>
      <h3 className="font-bold text-gray90" data-testid="movie-title">
        {title}
      </h3>
    </article>
  );
};

export default Card;
