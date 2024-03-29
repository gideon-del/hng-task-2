import MovieHeader from "@/components/movieHeader";
import Image from "next/image";
import React from "react";
import vid from "@/public/video.png";
import { useRouter } from "next/router";
import Link from "next/link";

const MovieDetail = ({ movie }) => {
  const {
    query: { movieId },
  } = useRouter();

  const date = new Date(movie?.release_date || Date.now());
  const utcDate = Date.UTC(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDay(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds(),
    date.getUTCMilliseconds()
  );
  return (
    <div className="flex flex-col md:flex-row gap-9">
      <MovieHeader />
      <main className="py-5 font-poppins font-medium basis-3/4 px-5 ">
        {!movie.hasOwnProperty("success") ? (
          <>
            <figure className="mb-9">
              <Image
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={"poster"}
                width={500}
                height={600}
                className="max-h-[500px] w-full object-contain object-center mx-auto"
              />
            </figure>
            <section>
              <div className="flex items-center gap-4 flex-wrap mb-6">
                <h2 className="text-[#404040] lg:text-2xl">
                  <span data-testid="movie-title">{movie.title}</span> .{" "}
                  <span data-testid="movie-release-date">
                    {new Date(utcDate).toISOString()}
                  </span>{" "}
                  . <span data-testid="movie-runtime">{movie.runtime}</span>{" "}
                </h2>
                {movie.genres.map((genre) => (
                  <button
                    className="text-rose/700 font-medium text-base px-4 py-1 border border-[#F8E7EB] rounded-full"
                    key={genre.id}
                  >
                    {genre.name}
                  </button>
                ))}
              </div>
              <p
                className="font-normal text-[#333] md:text-xl  text-base max-w-3xl mb-9"
                data-testid="movie-overview"
              >
                {movie.overview}
              </p>
            </section>
          </>
        ) : (
          <p className="w-full h-full grid place-content-center text-rose/700 font-bold text-center">
            Can&apos;t find the movie with id {movieId}
            <br />
            <Link href={"/"} className="text-blue-800 my-3">
              Go back home
            </Link>
          </p>
        )}
      </main>
    </div>
  );
};

export default MovieDetail;
// Fetching the movie with imdb_id
export async function getServerSideProps({ query }) {
  const res_2 = await fetch(
    `https://api.themoviedb.org/3/movie/${query.movieId}?language=en-US&api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  const mainMovie = await res_2.json();
  return {
    props: {
      movie: mainMovie,
    },
  };
}
