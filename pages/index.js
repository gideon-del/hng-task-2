import Image from "next/image";
import { Inter } from "next/font/google";
import Card from "@/components/card";
import HomeHeader from "@/components/homeHeader";
import { useCallback, useMemo, useState } from "react";
import FeaturedMovies from "@/components/featuredMovies";

export default function Home(props) {
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const debouceInput = useCallback((func, time = 4000) => {
    let timer;

    return function (...args) {
      if (timer) {
        console.log("clearing timer");
        clearTimeout(time);
      }
      timer = setTimeout(() => {
        func.apply(null, args);
      }, time);
    };
  }, []);
  const searchMovies = useCallback(async (value) => {
    try {
      setLoading(true);
      if (value.trim().length === 0) {
        setSearchResult([]);
        return;
      }

      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${value.toLowerCase()}&include_adult=false&language=en-US&api_key=${
          process.env.NEXT_PUBLIC_API_KEY
        }`
      );
      console.log("working");
      const data = await res.json();
      console.log(data);
      setSearchResult(data?.results);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);
  // The function to debounce the user input
  const searchFn = useMemo(
    () => debouceInput(searchMovies),
    [debouceInput, searchMovies]
  );
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
      <HomeHeader onChange={searchFn} />
      <main className="font-dmSans">
        <FeaturedMovies movies={props.results.slice(0, 10)} />
      </main>
    </>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?language=en-US&api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
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
  };
};
