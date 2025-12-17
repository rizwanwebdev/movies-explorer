const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const TMDB_ACCESS_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN;
// console.log(import.meta.env.VITE_TMDB_API_KEY);

// End Points
// https://image.tmdb.org/t/p/original/cij4dd21v2Rk2YtUQbV5kW69WB2.jpg
// https://image.tmdb.org/t/p/original/zlsaQEE26TS34ziXAiNIAqa0MLX.jpg"

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
  },
};

// async function searchAll(query, setLoading, setResponceError) {
//   setLoading(true);
//   setResponceError("");
//   try {
//     const res = await fetch(
//       `https://api.themoviedb.org/3/search/multi?include_adult=false&query=${encodeURIComponent(
//         query
//       )}&page=3`,
//       options
//     );
//     const data = await res.json();
//     return data.results || [];
//   } catch (err) {
//     setResponceError(err.message);
//   } finally {
//     setLoading(false);
//   }
// }
// const movieId = 268;
// const media_type = "movie";
async function fetchMovieDetails(
  movieId,
  media_type,
  setLoading,
  setResponceError
) {
  setLoading(true);
  setResponceError("");
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/${media_type}/${movieId}`,
      options
    );
    const data = await res.json();
    console.log(data);

    return data;
  } catch (error) {
    setResponceError(error.message);
  } finally {
    setLoading(false);
  }
}

async function searchAll(query, page, setResponceError) {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/multi?include_adult=false&query=${encodeURIComponent(
        query
      )}&page=${page}`,
      options
    );

    const data = await res.json();
    return data;
  } catch (err) {
    setResponceError(err.message);
    return null;
  }
}

async function fetchRelatedPosts(
  media_type,
  movieId,
  setLoading,
  setResponceError
) {
  setLoading(true);
  setResponceError("");
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/${media_type}/${movieId}/recommendations`,
      options
    );
    const data = await res.json();
    console.log("related", data);

    return data.results;
  } catch (error) {
    setResponceError(error.message);
  } finally {
    setLoading(false);
  }
}

export { searchAll, fetchMovieDetails, fetchRelatedPosts };
