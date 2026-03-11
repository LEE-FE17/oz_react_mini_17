import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { fetchPopularMovies } from "../api/tmdb";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const data = await fetchPopularMovies();
      setMovies(data);
    };

    getMovies();
  }, []);

  return (
    <div className="px-10 py-6">
      <h1 className="text-3xl font-bold mb-6">인기 영화</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster={movie.poster_path}
            rating={movie.vote_average}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;