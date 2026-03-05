import { useState } from "react";
import movieDetailData from "../data/movieDetailData.json";

function MovieDetail() {
  const [movie] = useState(movieDetailData);

  return (
    <div>
      <img src={movie.poster_path} alt={movie.title} />
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <p>⭐ {movie.vote_average}</p>
    </div>
  );
}

export default MovieDetail;