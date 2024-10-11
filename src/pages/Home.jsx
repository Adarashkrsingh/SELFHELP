// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaSmile, FaBook, FaChartLine } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext'; // Import your Auth context

const Home = () => {
  const { currentUser, logout } = useAuth(); // Get current user and logout function from context

  const handleLogout = async () => {
    try {
      await logout(); // Call the logout function
      console.log('User logged out successfully');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-gray-800 dark:to-gray-900 min-h-screen flex flex-col justify-center items-center p-6">
      <h2 className="text-4xl font-bold mb-6 text-center text-blue-700 dark:text-blue-300">
        Welcome to Mindful Support
      </h2>
      <p className="text-lg mb-8 text-center text-gray-700 dark:text-gray-300 max-w-2xl">
        You're not alone. This platform is designed to provide you with resources, tools, and support to help you navigate through difficult times.
      </p>

      {currentUser && (
        <button
          onClick={handleLogout}
          className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg shadow hover:bg-red-700 transition-colors duration-200"
        >
          Logout
        </button>
      )}

      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
        <Link
          to="/resources"
          className="flex items-center justify-center bg-blue-600 dark:bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200"
        >
          <FaBook className="mr-2" />
          Explore Resources
        </Link>
        <Link
          to="/mood-tracker"
          className="flex items-center justify-center bg-green-600 dark:bg-green-500 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 dark:hover:bg-green-600 transition-colors duration-200"
        >
          <FaChartLine className="mr-2" />
          Track Your Mood
        </Link>
        <Link
          to="/journal"
          className="flex items-center justify-center bg-purple-600 dark:bg-purple-500 text-white px-6 py-3 rounded-lg shadow hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors duration-200"
        >
          <FaSmile className="mr-2" />
          Start Journaling
        </Link>
      </div>
    </div>
  );
};

export default Home;
