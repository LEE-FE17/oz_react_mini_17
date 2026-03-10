import { Link } from "react-router-dom";

function MovieCard({ id, title, poster, rating }) {
  return (
    <Link to={`/movie/${id}`}>
      <div className="w-[180px] transform hover:scale-105 transition duration-300">

        <img
  className="w-full h-[270px] object-cover rounded-lg shadow"
  src={`https://image.tmdb.org/t/p/w500${poster}`}
  alt={title}
/>

      <h3 className="mt-2 text-sm font-semibold text-center">
  {title}
</h3>

<div className="flex justify-center">
  <p className="text-sm text-gray-600">
    ⭐ {rating.toFixed(1)}
  </p>
</div>

      </div>
    </Link>
  );
}

export default MovieCard;