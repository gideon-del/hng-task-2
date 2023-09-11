import Image from "next/image";

import { useCallback, useEffect, useState } from "react";
import { AiFillHeart } from "react-icons/ai";

import Link from "next/link";
import { useFav } from "@/context/context";

const Card = ({ title, poster_path, release_date, id }) => {
  const [imdbId, setImdbId] = useState("");
  const { addMovie, removeMovie, movies } = useFav();
  let isFav = useCallback(() => {
    let isInMovie = Array.isArray(movies)
      ? movies.filter((movie) => movie.id === id)
      : [];
    return isInMovie.length > 0 ? true : false;
  }, [id, movies]);
  const toggleFav = () => {
    if (isFav()) {
      removeMovie(id);
    } else {
      addMovie({ title, poster_path, release_date, id });
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const getImdbId = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
        { signal }
      );
      const data = await res.json();
      setImdbId(data.imdb_id);
    };
    getImdbId();
    return () => controller.abort();
  }, [id]);
  return (
    <>
      <article
        data-testid="movie-card"
        className={`flex flex-col gap-3 w-fit mx-auto`}
      >
        <figure className="grid-stack w-fit">
          <Image
            src={`https://image.tmdb.org/t/p/original${poster_path}`}
            width={250}
            height={370}
            alt="poster"
            data-testid="movie-poster"
            className="w-auto h-auto"
            priority={true}
          />
          <div
            className={`bg-grey30 p-2 hover:text-red-400 transition cursor-pointer ${
              isFav() ? "text-rose/700" : "text-gray-300"
            } rounded-full ml-auto mr-3 my-4 flex justify-end w-fit h-fit text-xl `}
            onClick={toggleFav}
          >
            <AiFillHeart />
          </div>
        </figure>
        <p className="text-gray40 font-bold text-xs">
          <span data-testid="movie-release-date">{release_date}</span>{" "}
        </p>
        <h3
          className="font-bold text-gray90 max-w-[250px]"
          data-testid="movie-title"
        >
          {title}
        </h3>
        {imdbId && (
          <Link
            className="text-rose/700 underline font-bold"
            href={`/movies/${imdbId}`}
          >
            View Detail
          </Link>
        )}
      </article>
    </>
  );
};

export default Card;
