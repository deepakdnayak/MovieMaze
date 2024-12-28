import React from "react";
import SampleVideo from "../assets/Frozen2.mp4";

const WatchMovie = () => {
  return (
    <div className="w-full h-screen bg-black text-white">
      {/* Video Player Section */}
      <div className="relative w-full h-2/3 bg-black">
        {/* Video Player */}
        <video
          className="w-full h-full object-cover"
          controls
          src={SampleVideo}
          poster="movie-thumbnail.jpg"
        >
          Your browser does not support the video tag.
        </video>

        
      </div>

      {/* Description Section */}
      <div className="p-6 bg-gray-900">
        <h2 className="text-3xl font-bold mb-4">Description</h2>
        <p className="text-gray-300 mb-6">
          Monsters, Inc. is a 2001 animated comedy film produced by Pixar
          Animation Studios and distributed by Walt Disney Pictures. The film
          is set in a world where monsters live and work in a city powered by
          the screams of human children.
        </p>

        {/* Movie Details */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <h3 className="text-lg font-semibold text-gray-400">Duration</h3>
            <p>01:49:00</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-400">Release Date</h3>
            <p>02 Nov 2001</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-400">Genre</h3>
            <p>Animated</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-400">Rating</h3>
            <p>5+</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchMovie;
