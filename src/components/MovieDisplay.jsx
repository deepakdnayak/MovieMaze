import React, { useState, useEffect, useRef } from "react";

const MovieDisplay = ({ slides, handleMovieClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const slideInterval = useRef(null);

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // Function to move to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  // Function to set up the automatic slide transition
  useEffect(() => {
    const startAutoSlide = () => {
      slideInterval.current = setInterval(nextSlide, 5000); // 5 seconds delay
    };

    startAutoSlide();

    return () => clearInterval(slideInterval.current); // Cleanup on unmount
  }, []);

  // Restart auto slide when user stops dragging
  const resumeAutoSlide = () => {
    clearInterval(slideInterval.current);
    slideInterval.current = setInterval(nextSlide, 5000);
  };

  // Handle mouse down (start drag)
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
    clearInterval(slideInterval.current); // Pause automatic slide transition during drag
  };

  // Handle mouse move
  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const diff = e.clientX - startX;
    if (diff > 100) {
      prevSlide(); // Dragging right
      setIsDragging(false);
    } else if (diff < -100) {
      nextSlide(); // Dragging left
      setIsDragging(false);
    }
  };

  // Handle mouse up (end drag)
  const handleMouseUp = () => {
    setIsDragging(false);
    resumeAutoSlide(); // Resume automatic slide transition
  };

  return (
    <div
      className="relative w-full h-screen overflow-hidden"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp} // Handle drag ending when mouse leaves the slide area
    >
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 h-screen bg-cover bg-center relative"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Content */}
            <div className="relative max-w-4xl text-white text-left px-6 ms-10 h-full flex flex-col justify-center z-10">
              <h1 className="text-8xl font-bold mb-4">{slide.title}</h1>
              <p className="text-xl mb-6">{slide.description}</p>
              {/* Genres */}
              <div className="mb-6 text-xl flex space-x-4">
                {slide.genres.map((genre, genreIndex) => (
                  <span key={genreIndex} className="pe-3 py-1 font-bold">
                    {genre}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <button className="px-10 py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-lg font-medium" onClick={handleMovieClick}>
                  Watch Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`block w-4 h-4 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-gray-500"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default MovieDisplay;
