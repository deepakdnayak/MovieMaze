import React from "react";
import Video2 from "../assets/Tangled.mp4";
import RecomendedMovieCard from "./RecomendedMovieCard";
import { useLocation, useNavigate } from "react-router-dom";

const VideoPlayer = () => {
  const location = useLocation();
  const movie = location.state?.movie;
  const navigate = useNavigate();

  const recomendedMovies = [
    {
      title: "Frozen 2",
      poster:
        "https://i.etsystatic.com/18242346/r/il/47f8d2/2144427125/il_570xN.2144427125_t7fz.jpg",
      genres: ["Animation", "Kids", "Musical", "Adventure"],
      desc: "Anna, Elsa, Kristoff, Olaf and Sven leave Arendelle to travel to an ancient, autumn-bound forest of an enchanted land. They set out to find the origin of Elsa's powers in order to save their kingdom.",
      videoUrl: "https://mybackend.com/videos/frozen.mp4",
    },
    {
      title: "Tangled",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTAxNDYxMjg0MjNeQTJeQWpwZ15BbWU3MDcyNTk2OTM@._V1_FMjpg_UX1000_.jpg",
      genres: ["Animation", "Kids", "Fantacy", "Adventure"],
      desc: "The kingdom's most-wanted bandit Flynn Rider is taken hostage by Rapunzel, a teen with 70 feet of hair, and the unlikely duo sets off on a hilarious adventure.",
      videoUrl: "https://mybackend.com/videos/frozen.mp4",
    },
    {
      title: "WALL-E",
      poster:
        "https://c4.wallpaperflare.com/wallpaper/332/787/778/movie-wall%C2%B7e-wallpaper-preview.jpg",
      genres: ["Animation", "Science Fiction", "Nature", "Adventure"],
      desc: "After hundreds of lonely years of doing what he was built for, the robot WALL-E discovers a new purpose in life when he meets a sleek search robot named Eve.",
      videoUrl: "https://mybackend.com/videos/frozen.mp4",
    },
  ];

  const handleRecomendedMovieClick = (selectedMovie) => {
    navigate("/video", { state: { movie: selectedMovie } });
  };

  if (!movie) {
    return <p className="text-center text-gray-400 mt-20">Movie data is missing!</p>;
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      {/* Navbar Placeholder */}
      <div className="h-16 bg-gray-800 w-full flex items-center px-6">
        {/* Add Navbar Content Here */}
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row flex-grow">
        {/* Video Player Section */}
        <div className="lg:w-8/12 flex items-center justify-center p-4 h-full mt-4 lg:mt-8">
          <div className="bg-gray-800 p-4 rounded-lg w-full lg:w-11/12">
            <video className="w-full h-auto" controls>
              <source src={Video2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Info Section */}
        <div className="lg:w-4/12 flex flex-col p-6 bg-gray-900 lg:pt-10">
          <h1 className="text-3xl lg:text-5xl font-bold mb-4">{movie.title}</h1>
          <div className="flex items-center space-x-4 text-sm mb-4">
            <span className="text-gray-400">{movie.genres.join(", ")}</span>
            <span className="text-gray-400">24m</span>
          </div>
          <p className="text-gray-300 mb-6">{movie.desc}</p>

          <h2 className="text-2xl font-bold mb-2">Recommended Movies</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 text-gray-400">
            {recomendedMovies.map((recommendedMovie, index) => (
              <li key={index}>
                <div
                  onClick={() => handleRecomendedMovieClick(recommendedMovie)}
                  className="cursor-pointer"
                >
                  <RecomendedMovieCard
                    title={recommendedMovie.title}
                    poster={recommendedMovie.poster}
                    genres={recommendedMovie.genres}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
