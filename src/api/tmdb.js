const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const TMDB_ACCESS_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN;
// console.log(import.meta.env.VITE_TMDB_API_KEY);

// End Points
// https://image.tmdb.org/t/p/original/cij4dd21v2Rk2YtUQbV5kW69WB2.jpg
// https://image.tmdb.org/t/p/original/6dWQNJaR50l4EBtcuUHmBuvWedr.jpg

async function searchAll(query, setLoading, setResponceError) {
  setLoading(true);
  setResponceError("");
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/multi?query=${encodeURIComponent(
        query
      )}`,
      {
        headers: {
          Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    return data.results || [];
  } catch (err) {
    setResponceError(err.message);
  } finally {
    setLoading(false);
  }
}

export { searchAll };
