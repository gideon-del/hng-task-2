import Image from "next/image";
import { Inter } from "next/font/google";
import Card from "@/components/card";
import HomeHeader from "@/components/homeHeader";
import { useCallback, useEffect, useMemo, useState } from "react";
import FeaturedMovies from "@/components/featuredMovies";
import SearchedMovies from "@/components/searchedMovies";
import Loader from "@/components/loader";

export default function Home(props) {
  const [result, setResult] = useState({
    isError: false,
    searchResult: [],
    error: "",
  });
  const [loading, setLoading] = useState(false);
  const [serachQuery, setSearchQuery] = useState("");
  const updateQuery = (val) => {
    setSearchQuery(val);
  };

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const searchMovies = async () => {
      try {
        setLoading(true);

        if (!serachQuery) {
          setResult({
            error: "",
            isError: false,
            searchResult: [],
          });
          return;
        }
        console.log("searching");
        const res = await fetch(
          `https://api.themoviedb.org/3/search/movie?query=${serachQuery}&include_adult=false&language=en-US&api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
          { signal }
        );
        console.log(serachQuery);
        const data = await res.json();

        setResult({
          isError: false,
          searchResult: data?.results,
          error: "",
        });
      } catch (error) {
        setResult({
          isError: true,
          searchResult: [],
          error: error.message,
        });
      } finally {
        setLoading(false);
      }
    };
    searchMovies();
    return () => controller.abort();
  }, [serachQuery]);
  if (props?.success === false) {
    return (
      <main>
        Seems we&apos;re having issues with the api. <br /> Refresh your browser
        to remove the problem
      </main>
    );
  }
  return (
    <>
      <HomeHeader onChange={updateQuery} movie={props.results[0]} />
      <main className="font-dmSans relative">
        {loading && <Loader />}
        {result.searchResult.length === 0 ? (
          <FeaturedMovies movies={props.results.slice(0, 10)} />
        ) : (
          <SearchedMovies movies={result.searchResult} />
        )}
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?language=en-US&api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    {
      headers: {
        accept: "application/json",
        Authorization: `Bearer 0d993324e1f0ebbd848f1f4b2b9afe11`,
      },
    }
  );

  const data = await res.json();

  return {
    props: data,
    revalidate: 60,
  };
};
