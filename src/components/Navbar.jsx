import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ setSearchQuery }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [input, setInput] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = () => {
    setSearchQuery(input);
    navigate('/searchResults');
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-10 transition-colors duration-300 ${
        isScrolled ? "bg-white/20 backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center space-x-10">
            <Link to="/" className="text-3xl font-bold text-white">
              MovieMaze
            </Link>
            <div className="hidden md:flex md:items-center md:space-x-4">
              <Link
                to="/"
                className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-lg font-medium"
              >
                Home
              </Link>
              <Link
                to="/movies"
                className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-lg font-medium"
              >
                Movies
              </Link>
              <Link
                to="/series"
                className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-lg font-medium"
              >
                Series
              </Link>
              <Link
                to="/kids"
                className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-lg font-medium"
              >
                Kids
              </Link>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-white hover:text-gray-300 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          {/* Search Section */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Search movies..."
              className="px-3 py-2 rounded-md bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
            <button
              type="button"
              onClick={handleSearch}
              className="text-white hover:text-gray-300 p-2 rounded-md focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M16 10.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/30 backdrop-blur-lg p-4 rounded-lg shadow-lg">
            <div className="flex flex-col space-y-2 mt-2">
              <Link
                to="/"
                className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-lg font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/movies"
                className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-lg font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Movies
              </Link>
              <Link
                to="/series"
                className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-lg font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Series
              </Link>
              <Link
                to="/kids"
                className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-lg font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Kids
              </Link>
              <div className="flex items-center mt-4 space-x-2 px-3">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Search movies..."
                  className="px-3 py-2 rounded-md bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600 w-full"
                />
                <button
                  type="button"
                  onClick={() => {
                    handleSearch();
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-white hover:text-gray-300 p-2 rounded-md focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-4.35-4.35M16 10.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
