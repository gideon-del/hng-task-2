import HomeHeader from "@/components/homeHeader";
import { useCallback, useEffect, useMemo, useState } from "react";
import FeaturedMovies from "@/components/featuredMovies";
import SearchedMovies from "@/components/searchedMovies";
import Loader from "@/components/loader";
import { AiFillFacebook } from "react-icons/ai";
import { BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
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
      <main className="font-dmSans relative md:mb-28">
        {loading && <Loader />}
        {result.searchResult.length === 0 ? (
          <FeaturedMovies movies={props.results.slice(0, 10)} />
        ) : (
          <SearchedMovies movies={result.searchResult} />
        )}
      </main>
      <footer className="md:px-6 px-2 py-20 font-bold text-gray90 flex flex-col gap-11">
        <div className="md:text-3xl text-xl flex justify-center items-center gap-12">
          <AiFillFacebook />
          <BsInstagram />
          <BsTwitter />
          <BsYoutube />
        </div>
        <ul className="flex justify-center md:text-lg text-base flex-col md:flex-row items-center md:gap-12 gap-6">
          <li>Conditions of Use</li>
          <li>Privacy & Policy</li>
          <li>Press Room</li>
        </ul>
        <p className="text-gray50 text-center">
          &copy; 2023 MovieBox by Adriana Eka Prayudha
        </p>
      </footer>
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
