import { createContext, useContext, useEffect, useState } from "react";

const FavouriteMovieCtx = createContext({
  movies: [],
  addMovie: () => {},
  removeMovie: () => {},
  checkFav: () => {},
});

const FavouriteMovie = ({ children }) => {
  const [favourite, setFavourite] = useState([]);
  const addMovie = (movie) => {
    setFavourite((prev) => {
      const newFav = [...prev];
      newFav.push(movie);
      localStorage.setItem("favouriteMovie", JSON.stringify(newFav));
      return newFav;
    });
  };
  const removeMovie = (id) => {
    setFavourite((prev) => {
      const newFav = prev.filter((movie) => movie.id !== id);
      localStorage.setItem("favouriteMovie", JSON.stringify(newFav));
      return newFav;
    });
  };

  useEffect(() => {
    const movies = JSON.parse(localStorage.getItem("favouriteMovie")) || [];
    setFavourite(movies);
  }, []);
  return (
    <FavouriteMovieCtx.Provider
      value={{
        movies: favourite,
        addMovie,
        removeMovie,
      }}
    >
      {children}
    </FavouriteMovieCtx.Provider>
  );
};

export default FavouriteMovie;
export const useFav = () => useContext(FavouriteMovieCtx);
