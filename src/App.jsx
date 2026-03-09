import { useState, useEffect } from "react";
import MovieCard from "./components/MovieCard";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);

  const accessToken = import.meta.env.VITE_TMDB_ACCESS_TOKEN;

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1",
        {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      const data = await response.json();

      // adult false 필터
      const filteredMovies = data.results.filter((movie) => !movie.adult);

      setMovies(filteredMovies);
    };

    fetchMovies();
  }, [accessToken]);

  return (
    <div>
      <h1>인기 영화</h1>

      <div className="movie-list">
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

export default App;
