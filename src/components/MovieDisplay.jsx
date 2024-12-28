import React from "react";

const MovieDisplay = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex items-center"
      style={{
        backgroundImage:
          "url('https://c4.wallpaperflare.com/wallpaper/557/321/173/movie-frozen-2-anna-frozen-elsa-frozen-kristoff-frozen-hd-wallpaper-preview.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Bottom Gradient Effect */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-black"></div>

      {/* Content */}
      <div className="relative max-w-4xl text-white text-left px-6 ms-10">
        <h1 className="text-8xl font-bold mb-4">Frozen</h1>
        <p className="text-xl mb-6">
          Fearless Anna teams up with Kristoff and a snowman named Olaf to find her 
          sister Elsa, whose icy powers have trapped the kingdom in eternal winter.
        </p>
        {/* Genres */}
        <div className="mb-6 text-xl flex space-x-4">
          <span className="pe-3 py-1 font-bold">Animation</span>
          <span className="pe-3 py-1 font-bold">Kids</span>
          <span className="pe-3 py-1 font-bold">Musical</span>
          <span className="pe-3 py-1 font-bold">Adventure</span>
        </div>
        <div className="flex space-x-4">
          <button className="px-10 py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-lg font-medium">
            Watch Now
          </button>
          {/* <button className="px-6 py-3 bg-gray-700 hover:bg-gray-800 rounded-md text-lg font-medium">
            Details
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default MovieDisplay;
