import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";

const SearchBar = ({ className, initialSearch }) => {
  const [searchInput, setSearchInput] = useState(
    initialSearch ? initialSearch : ""
  );

  const navigate = useNavigate();
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/explore?search=${searchInput}`);
  };

  return (
    <>
      <div
        className={`rounded-4xl px-5 py-3 text-text bg-secondary-bg min-w-[300px] transition-colors overflow-hidden ${
          className ? className : ""
        }`}
      >
        <form onSubmit={handleSubmit} className="flex flex-row gap-2">
          <Search />
          <input
            type="text"
            placeholder="Enter Movie OR TV Name"
            name="search"
            autoComplete="search"
            className="border-0 outline-0 w-full "
            value={searchInput}
            onChange={handleChange}
            required
          />
        </form>
      </div>
    </>
  );
};

export default SearchBar;
