import React from "react";
import MovieItem from "./MovieItem";
import { useNavigate } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

const Movies = () => {

    const navigate = useNavigate(); // Import the useNavigate hook from react-router-dom

  // Create a dummy searchedMovies array to simulate the search results from the API
  const movies = [
    {
      title: "Frozen 2",
      poster: "https://i.etsystatic.com/18242346/r/il/47f8d2/2144427125/il_570xN.2144427125_t7fz.jpg",
      genres: ["Animation", "Kids", "Musical", "Adventure"],
      desc: "Anna, Elsa, Kristoff, Olaf and Sven leave Arendelle to travel to an ancient, autumn-bound forest of an enchanted land. They set out to find the origin of Elsa's powers in order to save their kingdom.",
      videoUrl: "https://mybackend.com/videos/frozen2.mp4", // dummy url
    },
    { 
      title: "The Good Dinosaur", 
      poster: "https://lumiere-a.akamaihd.net/v1/images/p_thegooddinosaur_19753_03c2af0a.jpeg",
      genres: ["Animation", "Kids", "Musical", "Adventure"],
      desc: "In a world where dinosaurs and humans live side-by-side, an Apatosaurus named Arlo makes an unlikely human friend.",
      videoUrl: "https://mybackend.com/videos/gooddinosaur.mp4" // dummy url 
    },
    { 
      title: "Aladdin", 
      poster: "https://lumiere-a.akamaihd.net/v1/images/p_aladdin1992_20486_174ba005.jpeg",
      genres: ["Animation", "Kids", "Musical", "Adventure"],
      desc: "When a street urchin vies for the love of a beautiful princess, he uses a genie's magic power to make himself off as a prince in order to marry her.",
      videoUrl: "https://mybackend.com/videos/aladdin.mp4" // dummy url
    },
    { 
      title: "Raya and the Last Dragon", 
      poster: "https://lumiere-a.akamaihd.net/v1/images/p_rayaandthelastdragon_21294_83346778.jpeg",
      genres: ["Animation", "Kids", "Fantasy", "Adventure"],
      desc: "In a realm known as Kumandra, a re-imagined Earth inhabited by an ancient civilization, a warrior named Raya is determined to find the last dragon.",
      videoUrl: "https://mybackend.com/videos/raya.mp4" // 
    },
    { 
      title: "Luca", 
      poster: "https://i.etsystatic.com/15472631/r/il/aa65b4/3762695286/il_570xN.3762695286_qbq7.jpg",
      genres: ["Animation", "Kids", "Fantasy", "Adventure"],
      desc: "On the Italian Riviera, an unlikely but strong friendship grows between a human being and a sea monster disguised as a human.",
      videoUrl: "https://mybackend.com/videos/luca.mp4" // 
    },
    { 
      title: "Tangled", 
      poster: "https://m.media-amazon.com/images/M/MV5BMTAxNDYxMjg0MjNeQTJeQWpwZ15BbWU3MDcyNTk2OTM@._V1_FMjpg_UX1000_.jpg",
      genres: ["Animation", "Kids", "Fantasy", "Adventure"],
      desc: "The magically long-haired Rapunzel has spent her entire life in a tower, but now that a runaway thief has stumbled upon her, she is about to discover the world for the first time, and who she really is.",
      videoUrl: "https://mybackend.com/videos/tangled.mp4" // 
    },
    { 
      title: "Coco", 
      poster: "https://m.media-amazon.com/images/I/71NNjdL6mOL._AC_UF894,1000_QL80_.jpg",
      genres: ["Animation", "Kids", "Fantasy", "Adventure"],
      desc: "Aspiring musician Miguel, confronted with his family's ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer.",
      videoUrl: "https://mybackend.com/videos/coco.mp4" // 
    },
    { 
      title: "Moana", 
      poster: "https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_FMjpg_UX1000_.jpg",
      genres: ["Animation", "Kids", "Fantasy", "Adventure"],
      desc: "In Ancient Polynesia, when a terrible curse incurred by the Demigod Maui reaches Moana's island, she answers the Ocean's call to seek out the Demigod to set things right.",
      videoUrl: "https://mybackend.com/videos/moana.mp4" // 
    },
    { 
      title: "Frozen", 
      poster: "https://m.media-amazon.com/images/I/819lixgNvOL._AC_UF1000,1000_QL80_.jpg",
      genres: ["Animation", "Kids", "Musical", "Adventure"],
      desc: "When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up with a mountain",
      videoUrl: "https://mybackend.com/videos/frozen.mp4" // 
    },
    { 
      title: "Encanto", 
      poster: "https://lumiere-a.akamaihd.net/v1/images/p_encanto_homeent_22359_4892ae1c.jpeg",
      genres: ["Animation", "Kids", "Musical", "Adventure"],
      desc: "The Madrigals are an extraordinary family who live hidden in the mountains of Colombia in a charmed place called the Encanto. The magic of the Encanto has blessed every child in the family with a unique gift -- every child except Mirabel.",
      videoUrl: "https://mybackend.com/videos/encanto.mp4" // 
    },
    { 
      title: "Turning Red", 
      poster: "https://lumiere-a.akamaihd.net/v1/images/p_turningred_22797_1_c17f32af.jpeg",
      genres: ["Animation", "Kids", "Musical", "Adventure"],
      desc: "A thirteen-year-old girl is torn between staying her mother's dutiful daughter and the changes of adolescence. And as if the challenges were not enough, whenever she gets overly excited she transforms into a giant red panda.",
      videoUrl: "https://mybackend.com/videos/turningred.mp4" //
    },
    { 
        title: "Puss in Boots", 
        poster: "https://upload.wikimedia.org/wikipedia/en/2/2a/Puss_in_Boots_%282011_animated_feature_film%29.jpg",
        genres: ["Animation", "Kids", "Action", "Adventure"],
        desc: "An outlaw cat, his childhood egg-friend, and a seductive thief kitty set out in search for the eggs of the fabled Golden Goose to clear his name, restore his lost honor, and regain the trust of his mother and town.",
        videoUrl: "https://mybackend.com/videos/pussinboots.mp4" //
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
        <h2 className="text-7xl font-bold text-pink-300 my-5">Movies</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map((movie, index) => (
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

export default Movies