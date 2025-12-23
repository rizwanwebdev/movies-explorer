import SearchBar from "./SearchBar";
import { Film } from "lucide-react";
import { NavLink } from "react-router-dom";
import LogoMoviesMesh from "../images/moviesmesh.png";
const Header = ({ initialSearch }) => {
  return (
    <>
      <header className="px-6 sticky">
        <div className="container mx-auto flex justify-between items-center py-2">
          <NavLink to="/">
            <div className="text-2xl font-semibold text-tPrimary cursor-pointer flex flex-row items-center gap-2 max-w-18">
              <img src={LogoMoviesMesh} alt="Movies Mesh Logo" />
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
                      `font-semibold transition-colors ${
                        isActive
                          ? "text-accent"
                          : "text-primary-text hover:text-primary"
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
