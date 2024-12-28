import React, { useRef } from "react";

const TrendingMovies = ({ movies }) => {
  const scrollContainer = useRef(null);

  // Function to handle scrolling left
  const scrollLeft = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({
        left: -300, // Adjust the scroll distance as needed
        behavior: "smooth",
      });
    }
  };

  // Function to handle scrolling right
  const scrollRight = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({
        left: 300, // Adjust the scroll distance as needed
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="p-6 font-sans bg-black relative">
      <h2 className="text-5xl font-extrabold text-white my-10">Trending Movies</h2>
      <div className="relative flex items-center">
        {/* Scroll Left Button */}
        <button
          onClick={scrollLeft}
          className="absolute z-10 bg-gray-800 text-white rounded-md w-10 h-full flex items-center justify-center left-2 transform -translate-x-1/2 hover:bg-gray-300 hover:text-black transition-colors duration-300"
        >
          <span className="text-lg">
            <i className="fas fa-angle-left"></i>
          </span>
        </button>

        {/* Scrollable Movies */}
        <div
          ref={scrollContainer}
          className="flex overflow-x-scroll gap-6 pb-4 no-scrollbar mx-12"
        >
          {movies.map((movie, index) => (
            <div
              className="flex-shrink-0 w-56 rounded-xl shadow-lg bg-white"
              key={index}
            >
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full h-auto rounded-t-xl"
              />
              <p className="text-center font-semibold text-base py-4 flex items-center justify-center h-16">
                {movie.title}
              </p>
            </div>
          ))}
        </div>

        {/* Scroll Right Button */}
        <button
          onClick={scrollRight}
          className="absolute z-10 bg-gray-800 text-white rounded-md w-10 h-full flex items-center justify-center right-2 transform translate-x-1/2 hover:bg-gray-300 hover:text-black transition-colors duration-300"
        >
          <span className="text-lg">
            <i className="fas fa-angle-right"></i>
          </span>
        </button>
      </div>
    </div>
  );
};

export default TrendingMovies;
