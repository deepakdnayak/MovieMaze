import { useState } from 'react';
import './App.css' // Import the App.css file
import Home from './components/Home';
import Navbar from './components/Navbar' // Import the Navbar component
import SearchResults from './components/SearchResults'; // Import the SearchResults component
import VideoPlayer from './components/VideoPLayer'; // Import the VideoPlayer component
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import the FontAwesome icons
import { BrowserRouter, Routes, Route } from 'react-router-dom';  // Import the BrowserRouter, Routes and Route components

function App() { 

  const [searchQuery, setSearchQuery] = useState(''); // Create a state variable called searchQuerry and a function called setSearchQuerry to update it
  
  return (
    <div>
      <BrowserRouter>
        <Navbar setSearchQuery={setSearchQuery} />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/video" element={<VideoPlayer />} />
          <Route path='/searchResults' element={<SearchResults searchQuery={searchQuery} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
