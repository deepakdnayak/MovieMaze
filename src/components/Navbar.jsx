import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-transparent w-full fixed top-0 left-0 z-10">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left Section */}
          <div className="flex items-center">
            <a href="/" className="text-3xl font-bold text-white">
              Stapak
            </a>
            <div className="ml-10 flex space-x-4">
              <a
                href="#"
                className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-lg font-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-lg font-medium"
              >
                Movies
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-lg font-medium"
              >
                Series
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-lg font-medium"
              >
                Kids
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search movies..."
              className="px-3 py-2 rounded-md bg-white text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
            <button
              type="button"
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
    </nav>
  );
};

export default Navbar;
