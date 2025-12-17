import SearchBar from "./SearchBar";
import { Search, Film } from "lucide-react";
import { NavLink } from "react-router-dom";
const Header = ({ initialSearch }) => {
  return (
    <>
      <header className="px-6 sticky">
        <div className="container mx-auto flex justify-between items-center py-2">
          <NavLink to="/">
            <div className="text-2xl font-semibold text-tPrimary cursor-pointer flex flex-row items-center gap-2">
              <Film className="text-primary" /> Movies Explorer
            </div>
          </NavLink>
          <nav className="hidden lg:block">
            <ul className="list-none text-tPrimary flex gap-10 p-4 *:font-semibold *:hover:text-accent *:transition *:cursor-pointer">
              {[
                { to: "/", label: "Home" },
                { to: "/explore", label: "Explore" },
              ].map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `font-semibold ${
                        isActive ? "text-hover-color" : "text-primary-text"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="hidden md:block ">
            <SearchBar initialSearch={initialSearch} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
