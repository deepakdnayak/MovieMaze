import React from "react";

const MovieItem = ({ title, poster, genres }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-4 hover:scale-105 transition-transform">
      <img
        src={poster}
        alt={title}
        className="rounded-lg mb-4 object-cover w-full h-96"
      />
      <h3 className="text-4xl font-bold truncate mb-2">{title}</h3>
      <p className="text-lg">
      {genres.map((genre, index) => (
        <span key={index} className="px-2 py-1 text-sm bg-gray-500 rounded-full me-2">
            {genre}
        </span>
      ))}
        </p>
    </div>
  );
};

export default MovieItem;
