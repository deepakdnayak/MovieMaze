import React, { useRef, useState } from "react";

const TrendingMovies = ({ movies }) => {
  const scrollContainer = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Function to handle scrolling left
  const handleScrollLeft = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({
        left: -300, // Adjust the scroll distance as needed
        behavior: "smooth",
      });
    }
  };

  // Function to handle scrolling right
  const handleScrollRight = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({
        left: 300, // Adjust the scroll distance as needed
        behavior: "smooth",
      });
    }
  };

  // Mouse Down: Start dragging
  const handleMouseDown = (e) => {
    if (scrollContainer.current) {
      setIsDragging(true);
      setStartX(e.pageX - scrollContainer.current.offsetLeft);
      setScrollLeft(scrollContainer.current.scrollLeft);
    }
  };

  // Mouse Move: Scroll as per drag
  const handleMouseMove = (e) => {
    if (isDragging && scrollContainer.current) {
      e.preventDefault();
      const x = e.pageX - scrollContainer.current.offsetLeft;
      const walk = (x - startX) * 1; // Adjust scrolling speed as needed
      scrollContainer.current.scrollLeft = scrollLeft - walk;
    }
  };

  // Mouse Up: End dragging
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Prevent default drag behavior on images
  const handleImageDragStart = (e) => {
    e.preventDefault();
  };

  return (
    <div className="p-6 font-sans bg-black relative">
      <h2 className="text-5xl font-extrabold text-white my-10">Trending Movies</h2>
      <div className="relative flex items-center">
        {/* Scroll Left Button */}
        <button
          onClick={handleScrollLeft}
          className="absolute z-10 bg-gray-800 text-white rounded-md w-10 h-full flex items-center justify-center left-2 transform -translate-x-1/2 hover:bg-gray-300 hover:text-black transition-colors duration-300"
        >
          <span className="text-lg">
            <i className="fas fa-angle-left"></i>
          </span>
        </button>

        {/* Scrollable Movies */}
        <div
          ref={scrollContainer}
          className="flex overflow-x-scroll gap-6 pb-4 mx-12 relative no-scrollbar" // Added the 'no-scrollbar' class here
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          style={{ cursor: isDragging ? "grabbing" : "grab" }}
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
                onDragStart={handleImageDragStart} // Prevent image drag
              />
              <p className="text-center font-semibold text-base py-4 flex items-center justify-center h-16">
                {movie.title}
              </p>
            </div>
          ))}
        </div>

        {/* Scroll Right Button */}
        <button
          onClick={handleScrollRight}
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
