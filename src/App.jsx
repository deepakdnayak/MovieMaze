import './App.css'
import MovieDisplay from './components/MovieDisplay';
import Navbar from './components/Navbar'
import TrendingMovies from './components/TrendingMovies';
import VideoPlayer from './components/VideoPLayer';
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {

  const movies = [
    { title: "The Good Dinosaur", poster: "https://lumiere-a.akamaihd.net/v1/images/p_thegooddinosaur_19753_03c2af0a.jpeg" },
    { title: "Aladdin", poster: "https://lumiere-a.akamaihd.net/v1/images/p_aladdin1992_20486_174ba005.jpeg" },
    { title: "Raya and the Last Dragon", poster: "https://lumiere-a.akamaihd.net/v1/images/p_rayaandthelastdragon_21294_83346778.jpeg" },
    { title: "Luca", poster: "https://i.etsystatic.com/15472631/r/il/aa65b4/3762695286/il_570xN.3762695286_qbq7.jpg" },
    { title: "Tangled", poster: "https://m.media-amazon.com/images/M/MV5BMTAxNDYxMjg0MjNeQTJeQWpwZ15BbWU3MDcyNTk2OTM@._V1_FMjpg_UX1000_.jpg" },
    { title: "Coco", poster: "https://m.media-amazon.com/images/I/71NNjdL6mOL._AC_UF894,1000_QL80_.jpg" },
    { title: "Moana", poster: "https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_FMjpg_UX1000_.jpg" },
    { title: "Frozen", poster: "https://i.etsystatic.com/18242346/r/il/47f8d2/2144427125/il_570xN.2144427125_t7fz.jpg" },
    { title: "Encanto", poster: "https://lumiere-a.akamaihd.net/v1/images/p_encanto_homeent_22359_4892ae1c.jpeg" },
    { title: "Turning Red", poster: "https://lumiere-a.akamaihd.net/v1/images/p_turningred_22797_1_c17f32af.jpeg" },
  ];

  const slides = [
    {
      image: "https://c4.wallpaperflare.com/wallpaper/557/321/173/movie-frozen-2-anna-frozen-elsa-frozen-kristoff-frozen-hd-wallpaper-preview.jpg",
      title: "Frozen",
      description: "Fearless Anna teams up with Kristoff and a snowman named Olaf to find her sister Elsa, whose icy powers have trapped the kingdom in eternal winter.",
      genres: ["Animation", "Kids", "Musical", "Adventure"],
    },
    {
      image: "https://theobjectivestandard.com/wp-content/uploads/2021/06/scale.jpg",
      title: "Tangled",
      description: "The kingdom's most-wanted bandit Flynn Rider is taken hostage by Rapunzel, a teen with 70 feet of hair, and the unlikely duo sets off on a hilarious adventure.",
      genres: ["Animation", "Kids", "Fantacy", "Adventure"],
    },
    {
      image: "https://resizing.flixster.com/6hcH7AgGq6ZqeOxTHa8IWPgFjSM=/620x336/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p7841115_i_h10_ab.jpg",
      title: "Tinker Bell and Lost Treasure",
      description: "Tinker Bell journey far North of Never Land to patch things up with her friend Terence and restore a Pixie Dust Tree",
      genres: ["Animation", "Kids", "Fantacy", "Adventure"],
    },
    {
      image: "https://cdn.popmalt.com/wp-content/uploads/lion_king_2019_review_og.jpg",
      title: "The Lion King",
      description: "In the African savanna, a young prince overcomes betrayal and tragedy to assume his rightful place on Pride Rock.",
      genres: ["Musical |", "Fantacy", "Adventure"],
    },
    {
      image: "https://c4.wallpaperflare.com/wallpaper/332/787/778/movie-wall%C2%B7e-wallpaper-preview.jpg",
      title: "WALL-E",
      description: "After hundreds of lonely years of doing what he was built for, the robot WALL-E discovers a new purpose in life when he meets a sleek search robot named Eve.",
      genres: ["Animation", "Science Fiction", "Nature", "Adventure"],
    },
  ];

  const recomendedMovies = [
    {
      title: "Frozen",
      poster: "https://i.etsystatic.com/18242346/r/il/47f8d2/2144427125/il_570xN.2144427125_t7fz.jpg",
      genres: ["Animation", "Kids", "Musical", "Adventure"],
    },
    {
      title: "Tangled",
      poster: "https://m.media-amazon.com/images/M/MV5BMTAxNDYxMjg0MjNeQTJeQWpwZ15BbWU3MDcyNTk2OTM@._V1_FMjpg_UX1000_.jpg",
      genres: ["Animation", "Kids", "Fantacy", "Adventure"],
    },
    {
      title: "WALL-E",
      poster: "https://c4.wallpaperflare.com/wallpaper/332/787/778/movie-wall%C2%B7e-wallpaper-preview.jpg",
      genres: ["Animation", "Science Fiction", "Nature", "Adventure"],
    }
  ]
  
    
  return (
    <div>
      <Navbar />
      {/* <MovieDisplay slides={slides} />
      <TrendingMovies movies={movies} /> */}
      <VideoPlayer recomendedMovies={recomendedMovies} />

    </div>
  )
}

export default App;
