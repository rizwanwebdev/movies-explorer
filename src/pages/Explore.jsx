import { useState, useEffect } from "react";
import Header from "../components/Header";
import { searchAll } from "../api/tmdb";
import MovieCards from "../components/MovieCards";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import ShowErrors from "../components/ShowErrors";
import Pagination from "../components/Pagination";

const Explore = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [responceError, setResponceError] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();
  const initialSearch = searchParams.get("search") || "";

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (initialSearch) {
      searchAll(initialSearch, setLoading, setResponceError).then((results) => {
        if (results) {
          const filtered = results.filter(
            (item) => item.media_type !== "person"
          );
          setMoviesData(filtered);
          setCurrentPage(1);
        }
      });
    }
  }, [initialSearch]);

  const itemsPerPage = 12;
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentMovies = moviesData.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(moviesData.length / itemsPerPage);

  let displayText = "";
  if (loading) {
    displayText = "Loading...";
  } else if (responceError) {
    displayText = responceError;
  } else if (!initialSearch) {
    displayText = "Search, Explore And Dive Into A Universe Of Films";
  } else if (currentMovies.length === 0) {
    displayText = "No result found.";
  }
  return (
    <>
      <Header initialSearch={initialSearch} />
      {/* Search Section */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className=" flex flex-col justify-center items-center gap-3">
            <h2 className="text-center text-4xl md:text-5xl text-text font-bold">
              Explore Movies
            </h2>
            <p className="text-center text-text">
              Search Thousands Of Movies With TMDB API
            </p>
            <SearchBar
              className={
                "md:min-w-[500px] lg:min-w-[700px] border  py-4 hover:border border-transparent hover:border-primary"
              }
              initialSearch={initialSearch}
            />
          </div>
        </div>
      </section>
      {/* Movie Display Cards */}

      <section className="py-12 px-6">
        <div className="container mx-auto">
          {currentMovies.length > 0 ? (
            <MovieCards currentMovies={currentMovies} />
          ) : (
            <ShowErrors message={displayText} />
          )}
        </div>
      </section>
      {currentMovies.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      )}
    </>
  );
};

export default Explore;
