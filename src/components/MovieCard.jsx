import { Link } from "react-router-dom";

function MovieCard({ id, title, poster, rating }) {
  return (
    <Link to={`/movie/${id}`}>
      <div className="movie-card">
        <img
          src={`https://image.tmdb.org/t/p/w500${poster}`}
          alt={title}
        />
        <h3>{title}</h3>
        <p>⭐ {rating}</p>
      </div>
    </Link>
  );
}

export default MovieCard;
