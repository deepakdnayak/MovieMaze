import React from "react";
import MovieItem from "./MovieItem";
import { useNavigate } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

const Kids = () => {

    const navigate = useNavigate(); // Import the useNavigate hook from react-router-dom

  // Create a dummy searchedMovies array to simulate the search results from the API
  const kids = [
    {
        title: "Paw Patrol",
        poster: "https://m.media-amazon.com/images/M/MV5BODg0NDY1MjktMzA5MS00OGQ2LTliMWItZTdmZjNlYzQ2MWM1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        genres: ["Animation", "Adventure", "Kids"],
        desc: "A group of heroic puppies led by a tech-savvy boy work together on rescue missions to safeguard their community.",
        videoUrl: "https://mybackend.com/videos/pawpatrol.mp4" // dummy url
    },
    {
        title: "Bluey",
        poster: "https://m.media-amazon.com/images/M/MV5BYWU1YmQzMjEtMDNjOS00MGIyLWExY2ItZDAzNmU5NWViMGZmXkEyXkFqcGc@._V1_.jpg",
        genres: ["Animation", "Kids", "Family"],
        desc: "Bluey, a lovable and energetic Blue Heeler puppy, lives with her family and turns ordinary moments into extraordinary adventures.",
        videoUrl: "https://mybackend.com/videos/bluey.mp4" // dummy url
    },
    {
        title: "Dora the Explorer",
        poster: "https://m.media-amazon.com/images/M/MV5BMDgxYjBhM2UtOTQzYy00NTc3LWIwMzktZWVmMDFhOGE0YTI2XkEyXkFqcGc@._V1_.jpg",
        genres: ["Animation", "Adventure", "Kids"],
        desc: "Dora, a young girl, embarks on quests with her talking backpack and monkey friend Boots, solving puzzles and overcoming obstacles.",
        videoUrl: "https://mybackend.com/videos/dora.mp4" // dummy url
    },
    {
        title: "Curious George",
        poster: "https://m.media-amazon.com/images/M/MV5BNTJjNDNlMmUtNzkxNi00ZDMwLThlMjItNDIyZGY5Y2U4MTk3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        genres: ["Animation", "Kids", "Educational"],
        desc: "Follow the adventures of Curious George, a lovable monkey, and the Man in the Yellow Hat as they explore the world and learn valuable lessons.",
        videoUrl: "https://mybackend.com/videos/curiousgeorge.mp4" // dummy url
    },
    {
        title: "Sesame Street",
        poster: "https://m.media-amazon.com/images/M/MV5BODM4NDI3OTcxN15BMl5BanBnXkFtZTgwNjc3MjIwMTI@._V1_.jpg",
        genres: ["Educational", "Kids", "Family"],
        desc: "This long-running children's series features puppets, animation, and live-action to teach kids about numbers, letters, and social skills.",
        videoUrl: "https://mybackend.com/videos/sesamestreet.mp4" // dummy url
    },
    {
        title: "Mickey Mouse Clubhouse",
        poster: "https://m.media-amazon.com/images/M/MV5BNzQwMGRlNzQtYWI1Yi00NGI0LWI0MDItY2E2ZTg4NzIzM2Q1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        genres: ["Animation", "Kids", "Educational"],
        desc: "Mickey Mouse and his friends entertain and educate children with engaging problem-solving and fun adventures.",
        videoUrl: "https://mybackend.com/videos/mickeymouseclubhouse.mp4" // dummy url
    },
    {
        title: "Octonauts",
        poster: "https://m.media-amazon.com/images/M/MV5BMTMwYWM1OTQtNzcxNi00MGIwLWI0ZWUtMmJmZWI5ZjU1OTFkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        genres: ["Animation", "Adventure", "Kids"],
        desc: "A team of underwater adventurers explores the ocean, encountering and learning about fascinating marine life.",
        videoUrl: "https://mybackend.com/videos/octonauts.mp4" // dummy url
    },
    {
        title: "Bubble Guppies",
        poster: "https://m.media-amazon.com/images/M/MV5BNWVkM2EwNGMtOWRmNi00Y2IxLThlNDMtZWE4N2YyYmFiMDkzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        genres: ["Animation", "Educational", "Kids"],
        desc: "A group of fish-tailed preschoolers explore their underwater world while teaching basic skills like math, science, and literacy.",
        videoUrl: "https://mybackend.com/videos/bubbleguppies.mp4" // dummy url
    }
];


  const handleMovieClick = (movie)=> {
    navigate('/video', { state: { movie } }); // Navigate to the video page with the videoUrl as state
  }

  return (
    <>
      <ScrollToTop/>
      {/* Navbar Placeholder */}
      <div className="h-16 bg-gray-800 w-full flex items-center px-6"></div>

      <div className="bg-gray-900 text-white min-h-screen p-6">
        <h2 className="text-7xl font-bold text-pink-300 my-5">Kids</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {kids.map((movie, index) => (
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
  )
}

export default Kids