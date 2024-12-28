import React from "react";

const TrendingMovies = ({ movies }) => {
  return (
    <div className="p-6 font-sans">
      <h2 className="text-2xl font-bold mb-4">Trending Movies</h2>
      <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        {movies.map((movie, index) => (
          <div
            className="flex-shrink-0 w-40 rounded-lg shadow-md bg-white"
            key={index}
          >
            <img
              src={movie.poster}
              alt={movie.title}
              className="w-full h-auto rounded-t-lg"
            />
            <p className="text-center font-semibold text-sm py-2">
              {movie.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingMovies;
