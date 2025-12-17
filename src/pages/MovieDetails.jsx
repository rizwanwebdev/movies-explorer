import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ImageWithFallback from "../components/ImageWithFallback";
import { fetchMovieDetails, fetchRelatedPosts } from "../api/tmdb";
import Header from "../components/Header";
import ShowErrors from "../components/ShowErrors";
import { Calendar, Clock, Play, Plus, Star } from "lucide-react";
import RelatedPostCarousel from "../components/RelatedPostCarousel";
const MovieDetails = () => {
  const [getMovieDetails, setGetMovieDetails] = useState(null);
  const [getRelatedPosts, setGetRelatedPosts] = useState([]);
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [responceError, setResponceError] = useState("");

  // get type and id from url
  const media_type = searchParams.get("type") || "";
  const movieId = searchParams.get("id") || "";

  useEffect(() => {
    let mounted = true;

    if (!movieId || !media_type) return;

    fetchMovieDetails(movieId, media_type, setLoading, setResponceError).then(
      (data) => {
        if (!mounted || !data) return;

        // guard: only save if poster_path exists
        if (data.poster_path) {
          setGetMovieDetails(data);
        }
      }
    );
    return () => {
      mounted = false;
    };
  }, [movieId, media_type]);

  useEffect(() => {
    console.log("real");

    let mounted = true;
    if (!movieId || !media_type) return;

    fetchRelatedPosts(media_type, movieId, setLoading, setResponceError).then(
      (results) => {
        if (!mounted || !results) return;

        // guard: only save if poster_path exists
        const filtered = results.filter((item) => item.poster_path);

        setGetRelatedPosts(filtered);
      }
    );
    return () => {
      mounted = false;
    };
  }, [movieId, media_type]);

  let displayText = "";
  if (loading) {
    displayText = "Loading...";
  } else if (responceError) {
    displayText = responceError;
  } else if (!getMovieDetails) {
    displayText = "No result found.";
  }

  let year, month, day;
  if (getMovieDetails) {
    const releaseDate =
      media_type === "movie"
        ? getMovieDetails.release_date
        : getMovieDetails.first_air_date;

    if (releaseDate) {
      [year, month, day] = releaseDate.split("-");
    }
  }

  return (
    <>
      <Header />
      {/* Backdrop */}
      {/* {getMovieDetails.backdrop_path !== "" && (
        <section className="w-full min-h-fit">
          <div className="container mx-auto">
            <img
              src={`https://image.tmdb.org/t/p/original/${getMovieDetails.backdrop_path}`}
              alt={getMovieDetails.title}
            />
          </div>
        </section>
      )} */}
      {/* Details */}

      {getMovieDetails === null ? (
        <ShowErrors message={displayText} />
      ) : (
        <>
          <section className="py-12 px-6">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-[minmax(350px,auto)_1fr] gap-5">
              <div className="overflow-hidden rounded-2xl max-w-[350px] border-2 border-accent/20 ">
                <ImageWithFallback
                  poster={`https://image.tmdb.org/t/p/w500${getMovieDetails.poster_path}`}
                  alt={getMovieDetails.title || getMovieDetails.name}
                />
              </div>
              <div className="flex flex-col gap-3">
                <h2 className="font-bold text-4xl md:text-5xl text-text">
                  {getMovieDetails.title
                    ? getMovieDetails.title
                    : getMovieDetails.name}
                </h2>
                <div className="flex flex-row  items-center gap-6">
                  <div className="bg-secondary-bg max-w-fit flex flex-row justify-center items-center text-text/40 py-2 px-3 rounded-2xl">
                    <span className="flex text-text gap-2 text-[18px] font-semibold">
                      <Star fill="#ffbe0b" stroke="#ffbe0b" /> 5
                    </span>
                    /10
                  </div>
                  <div className="text-text/50 ml-2 flex gap-1.5">
                    <Calendar />
                    {year}
                  </div>
                  {media_type === "movie" && (
                    <div className="text-text/50 ml-2 flex gap-1.5">
                      <Clock /> {getMovieDetails.runtime}
                    </div>
                  )}
                </div>
                <div className="flex flex-wrap gap-4 items-center">
                  <span className="rounded-full py-2 px-4 border-primary/50  bg-secondary-bg border text-primary font-semibold capitalize">
                    {media_type}
                  </span>
                  {getMovieDetails.genres.map((genre) => (
                    <span
                      key={genre.id}
                      className="rounded-full py-2 px-4 border-primary/50  bg-secondary-bg border text-primary font-semibold"
                    >
                      {genre.name}
                    </span>
                  ))}
                </div>
                <div>
                  <h2 className="text-4xl font-semibold mt-3">Overview</h2>
                  <p className="text-text/80">{getMovieDetails.overview}</p>
                </div>
                <div className="flex gap-3 mt-2 *:cursor-pointer">
                  <button className="px-4 py-3 border border-primary rounded-full flex items-center gap-2 bg-primary text-secondary-bg font-semibold">
                    <Plus />
                    Add to Watchlist
                  </button>
                  <button className="px-4 py-3 rounded-full flex gap-2 items-center bg-secondary-bg border border-text/70">
                    <Play />
                    Watch Trailer
                  </button>
                </div>
              </div>
            </div>
          </section>
          <RelatedPostCarousel getRelatedPosts={getRelatedPosts} />
        </>
      )}
    </>
  );
};

export default MovieDetails;
