import React from "react";
import MovieItem from "./MovieItem";
import { useNavigate } from "react-router-dom";

const SearchResults = ({ searchQuery }) => {

  const navigate = useNavigate(); // Import the useNavigate hook from react-router-dom

  // Create a dummy searchedMovies array to simulate the search results from the API
  const searchedMovies = [
    {
      title: "Frozen",
      poster: "https://m.media-amazon.com/images/I/819lixgNvOL._AC_UF1000,1000_QL80_.jpg",
      genres: ["Animation", "Kids", "Musical", "Adventure"],
      desc: "Fearless optimist Anna teams up with rugged mountain man Kristoff and his loyal reindeer Sven in an epic journey to find Anna's sister Elsa, whose icy powers have trapped the kingdom of Arendelle in eternal winter.",
      videoUrl: "https://mybackend.com/videos/frozen.mp4", // dummy url
    },
    {
      title: "Frozen 2",
      poster: "https://i.etsystatic.com/18242346/r/il/47f8d2/2144427125/il_570xN.2144427125_t7fz.jpg",
      genres: ["Animation", "Kids", "Musical", "Adventure"],
      desc: "Anna, Elsa, Kristoff, Olaf and Sven leave Arendelle to travel to an ancient, autumn-bound forest of an enchanted land. They set out to find the origin of Elsa's powers in order to save their kingdom.",
      videoUrl: "https://mybackend.com/videos/frozen2.mp4", // dummy url
    },
  ];

  const handleMovieClick = (movie)=> {
    navigate('/video', { state: { movie } }); // Navigate to the video page with the videoUrl as state
  }

  return (
    <>
      {/* Navbar Placeholder */}
      <div className="h-16 bg-gray-800 w-full flex items-center px-6"></div>

      <div className="bg-gray-900 text-white min-h-screen p-6">
        <h2 className="text-5xl font-bold mb-4 text-pink-300">Search Results for "{searchQuery}"</h2>
        <p className="text-gray-400 text-lg mb-6">{searchedMovies.length} results</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {searchedMovies.map((movie, index) => (
            <MovieItem
              key={index}
              title={movie.title}
              poster={movie.poster}
              genres={movie.genres}
              onClick={()=> handleMovieClick(movie)} // Pass the handleMovieClick function as onClick prop
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchResults;
