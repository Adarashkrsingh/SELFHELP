// src/pages/ResetPassword.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { FaEnvelope } from 'react-icons/fa';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');
    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('Password reset email sent! Check your inbox.');
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800">
      <div className="max-w-md w-full bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md">
        <div className="flex items-center justify-center mb-6">
          <FaEnvelope className="text-3xl text-green-600 dark:text-green-400 mr-2" />
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Reset Password</h2>
        </div>
        {error && (
          <div className="mb-4 text-red-500">
            {error}
          </div>
        )}
        {message && (
          <div className="mb-4 text-green-500">
            {message}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500"
              placeholder="Enter your email"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors duration-200 disabled:opacity-50"
          >
            {loading ? 'Sending...' : 'Send Reset Email'}
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600 dark:text-gray-300">
          Remembered your password?{' '}
          <Link to="/login" className="text-green-600 dark:text-green-400 hover:underline">
            Login here
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default ResetPassword;
