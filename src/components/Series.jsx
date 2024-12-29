import React from "react";
import MovieItem from "./MovieItem";
import { useNavigate } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

const Series = () => {

    const navigate = useNavigate(); // Import the useNavigate hook from react-router-dom

  // Create a dummy searchedMovies array to simulate the search results from the API
    const series = [
        {
            title: "Stranger Things",
            poster: "https://images-cdn.ubuy.co.in/6353c321080827123e21066a-24x36-netflix-stranger-things-season-4.jpg",
            genres: ["Sci-Fi", "Thriller", "Adventure", "Drama"],
            desc: "In a small town where everyone knows everyone, a peculiar incident starts a chain of events that leads to a boy's disappearance and a young girl with supernatural powers.",
            videoUrl: "https://mybackend.com/videos/strangerthings.mp4" // dummy url
        },
        {
            title: "The Witcher",
            poster: "https://images-cdn.ubuy.co.in/634fc34f05ee70375a032f7f-poster-stop-online-the-witcher-netflix.jpg",
            genres: ["Fantasy", "Adventure", "Action", "Drama"],
            desc: "Geralt of Rivia, a monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.",
            videoUrl: "https://mybackend.com/videos/thewitcher.mp4" // dummy url
        },
        {
            title: "The Mandalorian",
            poster: "https://m.media-amazon.com/images/I/71FuoaWFGhL.jpg",
            genres: ["Sci-Fi", "Adventure", "Action", "Drama"],
            desc: "A lone bounty hunter travels the galaxy's outer reaches, far from the authority of the New Republic, taking on dangerous missions to survive.",
            videoUrl: "https://mybackend.com/videos/mandalorian.mp4" // dummy url
        },
        {
            title: "Game of Thrones",
            poster: "https://m.media-amazon.com/images/I/51A7EGmxK-L.jpg",
            genres: ["Fantasy", "Drama", "Adventure", "Action"],
            desc: "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
            videoUrl: "https://mybackend.com/videos/gameofthrones.mp4" // dummy url
        },
        {
            title: "Breaking Bad",
            poster: "https://m.media-amazon.com/images/I/91+GrGr5TWL._AC_UF894,1000_QL80_.jpg",
            genres: ["Drama", "Crime", "Thriller"],
            desc: "A high school chemistry teacher turned methamphetamine producer partners with a former student to secure his family's future after a terminal cancer diagnosis.",
            videoUrl: "https://mybackend.com/videos/breakingbad.mp4" // dummy url
        },
        {
            title: "The Crown",
            poster: "https://i.pinimg.com/736x/a7/9e/85/a79e850b234509fbbdbe42beef5d31c9.jpg",
            genres: ["Historical", "Drama", "Biography"],
            desc: "A chronicle of the reign of Queen Elizabeth II, depicting the challenges and triumphs of one of the most famous monarchs in modern history.",
            videoUrl: "https://mybackend.com/videos/thecrown.mp4" // dummy url
        },
        {
            title: "The Boys",
            poster: "https://posterwa.com/cdn/shop/files/BOYS8.jpg?v=1694629306",
            genres: ["Action", "Drama", "Comedy", "Sci-Fi"],
            desc: "A group of vigilantes sets out to expose corrupt superheroes who abuse their powers for selfish and destructive reasons.",
            videoUrl: "https://mybackend.com/videos/theboys.mp4" // dummy url
        },
        {
            title: "Money Heist",
            poster: "https://m.media-amazon.com/images/I/81WSF164GOL._AC_UF1000,1000_QL80_.jpg",
            genres: ["Crime", "Drama", "Thriller"],
            desc: "A criminal mastermind recruits eight people with different skills to carry out an ambitious plan to rob the Royal Mint of Spain.",
            videoUrl: "https://mybackend.com/videos/moneyheist.mp4" // dummy url
        },
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
        <h2 className="text-7xl font-bold text-pink-300 my-10">Series</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {series.map((movie, index) => (
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

export default Series