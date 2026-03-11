import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MovieDetail() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const accessToken = import.meta.env.VITE_TMDB_ACCESS_TOKEN;

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?language=ko-KR`,
          {
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("영화 정보를 불러오지 못했습니다.");
        }

        const data = await response.json();
        setMovie(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetail();
  }, [id, accessToken]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">

  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
    <h1 className="text-3xl font-bold">{movie.title}</h1>

    <div className="text-lg font-semibold mt-2 md:mt-0">
      ⭐ {movie.vote_average.toFixed(2)}
    </div>
  </div>

  <img
    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
    alt={movie.title}
    className="rounded-lg shadow-lg mx-auto mb-6"
  />

  <p className="text-lg leading-relaxed">
    {movie.overview}
  </p>

</div>
  );
}

export default MovieDetail;