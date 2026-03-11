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

// ⭐ 인기 영화 가져오는 함수 추가
export const fetchPopularMovies = async () => {
  try {
    const res = await fetch(
      "https://api.themoviedb.org/3/discover/movie?language=ko-KR&page=1",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    const data = await res.json();
    return data.results.filter((movie) => !movie.adult);
  } catch (error) {
    console.error("인기 영화 불러오기 실패:", error);
    return [];
  }
};