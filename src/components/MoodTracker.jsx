// src/components/MoodTracker.jsx
import React, { useState, useEffect } from 'react';
import { FaPlus, FaRegSmile, FaRegFrown, FaRegMeh } from 'react-icons/fa';

const moodOptions = [
  { label: 'Happy', icon: <FaRegSmile className="text-yellow-400" />, color: 'bg-yellow-100 text-yellow-600' },
  { label: 'Sad', icon: <FaRegFrown className="text-blue-400" />, color: 'bg-blue-100 text-blue-600' },
  { label: 'Neutral', icon: <FaRegMeh className="text-gray-400" />, color: 'bg-gray-100 text-gray-600' },
  // Add more moods as needed
];

const MoodTracker = () => {
  const [mood, setMood] = useState('');
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const storedEntries = JSON.parse(localStorage.getItem('moodEntries')) || [];
    setEntries(storedEntries);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mood.trim() === '') return;
    const newEntry = { date: new Date().toLocaleDateString(), mood };
    const updatedEntries = [newEntry, ...entries];
    setEntries(updatedEntries);
    localStorage.setItem('moodEntries', JSON.stringify(updatedEntries));
    setMood('');
  };

  const getMoodStyle = (mood) => {
    const moodObj = moodOptions.find((m) => m.label === mood);
    return moodObj ? moodObj.color : 'bg-gray-100 text-gray-600';
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-semibold mb-6 text-center text-green-700">Mood Tracker</h2>
      <form onSubmit={handleSubmit} className="mb-8">
        <label className="block mb-2 text-lg text-gray-700">How are you feeling today?</label>
        <div className="flex flex-wrap gap-4 mb-4">
          {moodOptions.map((option, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setMood(option.label)}
              className={`flex items-center px-4 py-2 border rounded-full focus:outline-none ${
                mood === option.label
                  ? `${option.color} border-transparent`
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
              } transition-colors duration-200`}
            >
              {option.icon}
              <span className="ml-2">{option.label}</span>
            </button>
          ))}
        </div>
        <button
          type="submit"
          className="flex items-center bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors duration-200"
        >
          <FaPlus className="mr-2" />
          Add Entry
        </button>
      </form>
      <h3 className="text-2xl font-semibold mb-4 text-center text-gray-800">Your Mood History</h3>
      {entries.length === 0 ? (
        <p className="text-center text-gray-600">No entries yet. Start tracking your mood today!</p>
      ) : (
        <ul className="space-y-4">
          {entries.map((entry, index) => (
            <li
              key={index}
              className={`p-4 rounded-lg shadow flex items-center justify-between ${getMoodStyle(entry.mood)}`}
            >
              <div className="flex items-center">
                <span className="font-medium">{entry.date}:</span>
                <span className="ml-2">{entry.mood}</span>
              </div>
              {/* Optionally, add delete functionality */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MoodTracker;
