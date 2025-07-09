import { useEffect, useState } from "react";
import { getAllMovies } from "../data/movies";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const movies = getAllMovies();
    setMovies(movies);
    setLoading(false);
  }, []);

  return (
    <div className="content">
      {loading ? (
        <div className="text-center py-10 text-lg font-semibold">
          Loading movies...
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieList;
