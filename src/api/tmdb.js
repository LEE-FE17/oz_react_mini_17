const accessToken = import.meta.env.VITE_TMDB_ACCESS_TOKEN;

export const fetchMovies = async (query) => {
  if (!query) return [];

  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    const data = await res.json();
    return data.results || [];
  } catch (error) {
    console.error("영화 검색 실패:", error);
    return [];
  }
};