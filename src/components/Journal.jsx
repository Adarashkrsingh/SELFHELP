// src/components/Journal.jsx
import React, { useState, useEffect } from 'react';
import { FaPlus, FaTrash } from 'react-icons/fa';

const Journal = () => {
  const [entry, setEntry] = useState('');
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const storedEntries = JSON.parse(localStorage.getItem('journalEntries')) || [];
    setEntries(storedEntries);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (entry.trim() === '') return;
    const newEntry = { id: Date.now(), date: new Date().toLocaleDateString(), content: entry };
    const updatedEntries = [newEntry, ...entries];
    setEntries(updatedEntries);
    localStorage.setItem('journalEntries', JSON.stringify(updatedEntries));
    setEntry('');
  };

  const handleDelete = (id) => {
    const updatedEntries = entries.filter((entry) => entry.id !== id);
    setEntries(updatedEntries);
    localStorage.setItem('journalEntries', JSON.stringify(updatedEntries));
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-semibold mb-6 text-center text-purple-700">Journal</h2>
      <form onSubmit={handleSubmit} className="mb-8">
        <label className="block mb-2 text-lg text-gray-700">Write your thoughts here:</label>
        <textarea
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
          className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none"
          rows="5"
          placeholder="Express yourself..."
        ></textarea>
        <button
          type="submit"
          className="flex items-center mt-4 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors duration-200"
        >
          <FaPlus className="mr-2" />
          Save Entry
        </button>
      </form>
      <h3 className="text-2xl font-semibold mb-4 text-center text-gray-800">Your Journal Entries</h3>
      {entries.length === 0 ? (
        <p className="text-center text-gray-600">No entries yet. Start writing your journal today!</p>
      ) : (
        <ul className="space-y-6">
          {entries.map((item) => (
            <li key={item.id} className="p-6 bg-white rounded-lg shadow">
              <div className="flex justify-between items-center mb-4">
                <span className="font-medium text-gray-800">{item.date}</span>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="text-red-500 hover:text-red-700 transition-colors duration-200"
                  aria-label="Delete Entry"
                >
                  <FaTrash />
                </button>
              </div>
              <p className="text-gray-700 whitespace-pre-wrap">{item.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Journal;
