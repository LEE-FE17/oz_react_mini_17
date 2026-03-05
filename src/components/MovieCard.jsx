import { useNavigate } from "react-router-dom";

function MovieCard({ title, poster, rating }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/details");
  };

  return (
    <div className="movie-card" onClick={handleClick}>
      <img src={poster} alt={title} />
      <h3>{title}</h3>
      <p>⭐ {rating}</p>
    </div>
  );
}

export default MovieCard;