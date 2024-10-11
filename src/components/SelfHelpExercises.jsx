// src/components/SelfHelpExercises.jsx
import React, { useState, useEffect } from 'react';
import {
  FaChevronDown,
  FaChevronUp,
  FaCheck,
  FaRegHeart,      // Corrected Icon
  FaPaintBrush,
  FaRunning,
  FaHandshake,
} from 'react-icons/fa';

const exercisesData = [
  {
    id: 1,
    category: 'Relaxation Techniques',
    title: 'Deep Breathing',
    description:
      'Inhale deeply for 4 seconds, hold for 7 seconds, and exhale for 8 seconds. Repeat this cycle 5 times to calm your mind.',
    icon: <FaHandshake className="text-blue-500" />,
    notes: '',
  },
  {
    id: 2,
    category: 'Relaxation Techniques',
    title: 'Progressive Muscle Relaxation',
    description:
      'Tense and then relax different muscle groups in your body to reduce physical tension and promote relaxation.',
    icon: <FaHandshake className="text-blue-500" />,
    notes: '',
  },
  {
    id: 3,
    category: 'Cognitive Strategies',
    title: 'Cognitive Restructuring',
    description:
      'Identify and challenge negative thought patterns, replacing them with more balanced and positive thoughts.',
    icon: <FaRegHeart className="text-green-500" />, // Updated Icon
    notes: '',
  },
  {
    id: 4,
    category: 'Cognitive Strategies',
    title: 'Gratitude Journaling',
    description:
      'Write down three things you are grateful for each day to shift focus towards positive aspects of your life.',
    icon: <FaRegHeart className="text-green-500" />, // Updated Icon
    notes: '',
  },
  {
    id: 5,
    category: 'Physical Activities',
    title: 'Physical Exercise',
    description:
      'Engage in activities like walking, yoga, or any form of movement to boost your mood and energy levels.',
    icon: <FaRunning className="text-red-500" />,
    notes: '',
  },
  {
    id: 6,
    category: 'Creative Expressions',
    title: 'Art Therapy',
    description:
      'Use creative activities like drawing or painting to express and process your emotions.',
    icon: <FaPaintBrush className="text-pink-500" />,
    notes: '',
  },
  {
    id: 7,
    category: 'Relaxation Techniques',
    title: 'Visualization',
    description:
      'Imagine a peaceful scene or a place where you feel safe and calm to reduce stress and anxiety.',
    icon: <FaHandshake className="text-blue-500" />,
    notes: '',
  },
  {
    id: 8,
    category: 'Social Support',
    title: 'Social Interaction',
    description:
      'Reach out to friends or family members for support and to share your feelings.',
    icon: <FaHandshake className="text-blue-500" />,
    notes: '',
  },
  // Add more exercises as needed
];

const categories = [
  'All',
  'Relaxation Techniques',
  'Cognitive Strategies',
  'Physical Activities',
  'Creative Expressions',
  'Social Support',
];

const SelfHelpExercises = () => {
  const [expandedId, setExpandedId] = useState(null);
  const [completedExercises, setCompletedExercises] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [exerciseNotes, setExerciseNotes] = useState({});

  // Initialize completed exercises from localStorage
  useEffect(() => {
    const storedCompleted = JSON.parse(localStorage.getItem('completedExercises')) || [];
    setCompletedExercises(storedCompleted);
  }, []);

  // Initialize exercise notes from localStorage
  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('exerciseNotes')) || {};
    setExerciseNotes(storedNotes);
  }, []);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const toggleComplete = (id) => {
    setCompletedExercises((prev) => {
      const updated = prev.includes(id)
        ? prev.filter((exerciseId) => exerciseId !== id)
        : [...prev, id];
      localStorage.setItem('completedExercises', JSON.stringify(updated));
      return updated;
    });
  };

  const handleNoteChange = (id, value) => {
    setExerciseNotes((prev) => {
      const updated = { ...prev, [id]: value };
      localStorage.setItem('exerciseNotes', JSON.stringify(updated));
      return updated;
    });
  };

  const filteredExercises =
    selectedCategory === 'All'
      ? exercisesData
      : exercisesData.filter((exercise) => exercise.category === selectedCategory);

  const searchedExercises = filteredExercises.filter((exercise) =>
    exercise.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-semibold mb-6 text-center text-green-700 dark:text-green-300">
        Self-Help Exercises
      </h2>

      {/* Category Filter and Search Bar */}
      <div className="flex flex-col md:flex-row justify-center items-center mb-6 space-y-4 md:space-y-0">
        {/* Category Filter */}
        <div className="flex space-x-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-sm font-medium rounded-lg border ${
                selectedCategory === category
                  ? 'bg-green-600 text-white border-green-600'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600'
              } focus:outline-none transition-colors duration-200`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="w-full max-w-md">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 dark:bg-gray-600 dark:text-gray-100"
            placeholder="Search exercises..."
          />
        </div>
      </div>

      {/* Exercises List */}
      <div className="space-y-4">
        {searchedExercises.map((exercise) => (
          <div key={exercise.id} className="border rounded-lg shadow dark:border-gray-600 dark:bg-gray-700">
            {/* Header */}
            <div
              className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-800 cursor-pointer"
              onClick={() => toggleExpand(exercise.id)}
            >
              <div className="flex items-center">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleComplete(exercise.id);
                  }}
                  className={`mr-4 focus:outline-none ${
                    completedExercises.includes(exercise.id)
                      ? 'text-green-500'
                      : 'text-gray-400 hover:text-green-500'
                  }`}
                  aria-label={
                    completedExercises.includes(exercise.id)
                      ? 'Mark as incomplete'
                      : 'Mark as complete'
                  }
                >
                  {completedExercises.includes(exercise.id) ? <FaCheck /> : <FaCheck className="opacity-0" />}
                </button>
                <div className="flex items-center">
                  {exercise.icon}
                  <h3 className="ml-3 text-xl font-bold text-gray-800 dark:text-gray-200">
                    {exercise.title}
                  </h3>
                </div>
              </div>
              <span className="text-gray-600 dark:text-gray-400">
                {expandedId === exercise.id ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </div>

            {/* Description and Notes */}
            {expandedId === exercise.id && (
              <div className="p-4 bg-white dark:bg-gray-700">
                <p className="text-gray-700 dark:text-gray-300 mb-4">{exercise.description}</p>
                <textarea
                  value={exerciseNotes[exercise.id] || ''}
                  onChange={(e) => handleNoteChange(exercise.id, e.target.value)}
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500"
                  placeholder="Add your personal notes here..."
                  rows="3"
                ></textarea>
              </div>
            )}
          </div>
        ))}
        {searchedExercises.length === 0 && (
          <p className="text-center text-gray-600 dark:text-gray-400">No exercises found matching your search.</p>
        )}
      </div>
    </div>
  );
};

export default SelfHelpExercises;
