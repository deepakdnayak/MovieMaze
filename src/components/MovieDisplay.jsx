import React, { useState, useEffect, useRef } from "react";

const MovieDisplay = ({ slides, slidesForMobile, handleMovieClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [currentSlides, setCurrentSlides] = useState(slides);
  const slideInterval = useRef(null);

  // Function to determine the set of slides based on screen size
  const updateSlidesBasedOnScreen = () => {
    if (window.innerWidth < 768) {
      setCurrentSlides(slidesForMobile); // Mobile images for small screens
    } else {
      setCurrentSlides(slides); // Default images for medium and large screens
    }
  };

  // Detect screen size on mount and on resize
  useEffect(() => {
    updateSlidesBasedOnScreen();
    window.addEventListener("resize", updateSlidesBasedOnScreen);

    return () => {
      window.removeEventListener("resize", updateSlidesBasedOnScreen);
    };
  }, []);

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % currentSlides.length);
  };

  // Function to move to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? currentSlides.length - 1 : prevIndex - 1
    );
  };

  // Function to set up the automatic slide transition
  useEffect(() => {
    const startAutoSlide = () => {
      slideInterval.current = setInterval(nextSlide, 5000); // 5 seconds delay
    };

    startAutoSlide();

    return () => clearInterval(slideInterval.current); // Cleanup on unmount
  }, [currentSlides]);

  // Restart auto slide when user stops dragging
  const resumeAutoSlide = () => {
    clearInterval(slideInterval.current);
    slideInterval.current = setInterval(nextSlide, 5000);
  };

  // Handle mouse or touch start (begin drag)
  const handleStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches ? e.touches[0].clientX : e.clientX);
    clearInterval(slideInterval.current); // Pause automatic slide transition during drag
  };

  // Handle mouse or touch move
  const handleMove = (e) => {
    if (!isDragging) return;

    const currentX = e.touches ? e.touches[0].clientX : e.clientX;
    const diff = currentX - startX;

    if (diff > 100) {
      prevSlide(); // Dragging right
      setIsDragging(false);
    } else if (diff < -100) {
      nextSlide(); // Dragging left
      setIsDragging(false);
    }
  };

  // Handle mouse or touch end (stop drag)
  const handleEnd = () => {
    setIsDragging(false);
    resumeAutoSlide(); // Resume automatic slide transition
  };

  return (
    <div
      className="relative w-full h-screen overflow-hidden"
      onMouseDown={handleStart}
      onMouseMove={handleMove}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd} // Handle drag ending when mouse leaves the slide area
      onTouchStart={handleStart}
      onTouchMove={handleMove}
      onTouchEnd={handleEnd}
    >
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {currentSlides.map((slide, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 h-screen bg-cover bg-center relative"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            {/* Gradient overlay to blend bottom edge */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black"></div>

            {/* Content */}
            <div className="relative max-w-4xl text-white text-left px-6 md:px-10 h-full flex flex-col justify-center z-10">
              <h1 className="text-4xl md:text-8xl font-bold mb-4">{slide.title}</h1>
              <p className="text-sm md:text-xl mb-6">{slide.description}</p>
              {/* Genres */}
              <div className="mb-6 text-sm md:text-xl flex space-x-2 md:space-x-4">
                {slide.genres.map((genre, genreIndex) => (
                  <span key={genreIndex} className="px-2 py-1 md:px-3 font-bold">
                    {genre}
                  </span>
                ))}
              </div>
              <div className="flex space-x-2 md:space-x-4">
                <button
                  className="px-6 py-2 md:px-10 md:py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-sm md:text-lg font-medium"
                  onClick={handleMovieClick}
                >
                  Watch Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {currentSlides.map((_, index) => (
          <span
            key={index}
            className={`block w-2 h-2 md:w-4 md:h-4 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-gray-500"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default MovieDisplay;
