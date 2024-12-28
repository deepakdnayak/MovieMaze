import React from "react";
import Video from "../assets/Frozen2.mp4";
import Video2 from "../assets/Video.mp4";
import RecomendedMovieCard from "./RecomendedMovieCard";

const VideoPlayer = ({ recomendedMovies }) => {
    return (
    <div className="bg-gray-900 text-white h-full flex flex-col">
      {/* Navbar Placeholder */}
      <div className="h-16 bg-gray-800 w-full flex items-center px-6">
       
      </div>

      {/* Main Content */}
      <div className="flex flex-grow">
        {/* Video Player Section */}
        <div className="w-9/12 flex items-center justify-center p-4 h-full mt-8">
          <div className="bg-gray-800 p-4 rounded-lg">
            <video className="w-full h-full" controls>
              <source src={Video2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Info Section */}
        <div className="w-3/12 flex flex-col p-6 bg-gray-900 pt-10">
          <h1 className="text-5xl font-bold mb-4">Demon Slayer : Sword Smith Village Arc</h1>
          <div className="flex items-center space-x-4 text-sm mb-4">
            <span className="bg-yellow-500 text-black px-2 py-1 rounded">PG-13</span>
            <span className="text-gray-400">Fantasy, Action, Adventure</span>
            <span className="text-gray-400">24m</span>
          </div>
          <p className="text-gray-300 mb-6">
            Tanjiro travels to the Swordsmith Village to repair his damaged Nichirin Sword. 
            There, he meets the Hashiras, the Demon Slayer Corps' strongest swordsmen, 
            including Muichiro Tokito and Mitsuri Kanroji. Tanjiro and his friends must 
            fight demons in a new battle.
          </p>
          <h2 className="text-2xl font-bold mb-2">Recomended Movies</h2>
          <ul className="text-gray-400 space-y-2">
            {recomendedMovies.map((movie, index) => (
              <li key={index}>
                <RecomendedMovieCard title={movie.title} poster={movie.poster} genres={movie.genres}  />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
