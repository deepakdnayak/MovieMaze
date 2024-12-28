import './App.css'
import MovieDisplay from './components/MovieDisplay ';
import Navbar from './components/Navbar'
import TrendingMovies from './components/TrendingMovies';

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
    
  return (
    <div>
      <Navbar />
      {/* <div className="bg-blue-200" >HI<br/>hi<br/>hi<br/>hi<br/>hi<br/>hi<br/>hi<br/>hi</div> */}
      <MovieDisplay/>
      <TrendingMovies movies={movies} />

    </div>
  )
}

export default App;
