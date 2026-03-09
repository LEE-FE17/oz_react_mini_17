import { useState } from "react";
import movieListData from "./data/movieListData.json";
import MovieCard from "./components/MovieCard";
import "./App.css";

function App() {
  const [movies] = useState(movieListData.results);

  return (
    <div>
      <h1>인기순</h1>

      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            rating={movie.vote_average}
          />
        ))}
      </div>
    </div>
  );
}

export default App;