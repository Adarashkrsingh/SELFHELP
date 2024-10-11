// src/components/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHeartbeat, FaBars, FaTimes } from 'react-icons/fa';
import DarkModeToggle from './DarkModeToggle'; // Corrected Import

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-blue-600 dark:bg-gray-800 text-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <Link to="/" className="flex items-center">
          <FaHeartbeat className="mr-2 text-2xl" />
          <span className="text-xl font-bold">Mindful Support</span>
        </Link>
        <div className="hidden md:flex items-center space-x-4">
          <Link
            to="/"
            className="hover:underline hover:text-blue-300 dark:hover:text-blue-500 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/resources"
            className="hover:underline hover:text-blue-300 dark:hover:text-blue-500 transition-colors duration-200"
          >
            Resources
          </Link>
          <Link
            to="/mood-tracker"
            className="hover:underline hover:text-blue-300 dark:hover:text-blue-500 transition-colors duration-200"
          >
            Mood Tracker
          </Link>
          <Link
            to="/journal"
            className="hover:underline hover:text-blue-300 dark:hover:text-blue-500 transition-colors duration-200"
          >
            Journal
          </Link>
          <Link
            to="/exercises"
            className="hover:underline hover:text-blue-300 dark:hover:text-blue-500 transition-colors duration-200"
          >
            Exercises
          </Link>
          <DarkModeToggle />
        </div>
        <div className="md:hidden flex items-center">
          <DarkModeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="ml-2 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>
      {menuOpen && (
        <div className="md:hidden bg-blue-600 dark:bg-gray-800">
          <Link
            to="/"
            className="block px-4 py-2 hover:bg-blue-500 dark:hover:bg-gray-700"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/resources"
            className="block px-4 py-2 hover:bg-blue-500 dark:hover:bg-gray-700"
            onClick={() => setMenuOpen(false)}
          >
            Resources
          </Link>
          <Link
            to="/mood-tracker"
            className="block px-4 py-2 hover:bg-blue-500 dark:hover:bg-gray-700"
            onClick={() => setMenuOpen(false)}
          >
            Mood Tracker
          </Link>
          <Link
            to="/journal"
            className="block px-4 py-2 hover:bg-blue-500 dark:hover:bg-gray-700"
            onClick={() => setMenuOpen(false)}
          >
            Journal
          </Link>
          <Link
            to="/exercises"
            className="block px-4 py-2 hover:bg-blue-500 dark:hover:bg-gray-700"
            onClick={() => setMenuOpen(false)}
          >
            Exercises
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
