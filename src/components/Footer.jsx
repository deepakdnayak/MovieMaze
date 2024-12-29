import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* About Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">About Us</h3>
          <p className="text-gray-400">
            MovieMaze is your one-stop platform for discovering and enjoying the best movies, series, and kids' content. Join us for an immersive entertainment experience.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="text-gray-400 space-y-2">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/movies" className="hover:underline">Movies</Link></li>
            <li><Link to="/series" className="hover:underline">Series</Link></li>
            <li><Link to="/kids" className="hover:underline">Kids</Link></li>
            <li><Link to="/" className="hover:underline">About Us</Link></li>
            <li><Link to="/" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <ul className="text-gray-400 space-y-2">
            <li>Email: support@moviemaze.com</li>
            <li>Phone: +123 456 7890</li>
            <li>Address: Sunshine Apartments, Balmatta, Mangalore 575001</li>
          </ul>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-500 text-sm">
        &copy; 2024 MovieMaze. All rights reserved. | Terms of Service | Privacy Policy
      </div>
    </footer>
  );
};

export default Footer;
