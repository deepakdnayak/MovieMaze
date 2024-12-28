import React from "react";
import MovieItem from "./MovieItem";

const SearchResults = ({ searchedMovies }) => {
  return (
    <>
      {/* Navbar Placeholder */}
      <div className="h-16 bg-gray-800 w-full flex items-center px-6"></div>

      <div className="bg-gray-900 text-white min-h-screen p-6">
        <h2 className="text-5xl font-bold mb-4 text-pink-300">Search Results for "Frozen"</h2>
        <p className="text-gray-400 text-lg mb-6">{searchedMovies.length} results</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {searchedMovies.map((movie, index) => (
            <MovieItem
              key={index}
              title={movie.title}
              poster={movie.poster}
              genres={movie.genres}
              runtime={movie.runtime}
              cc={movie.cc}
              audio={movie.audio}
              type={movie.type}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchResults;
