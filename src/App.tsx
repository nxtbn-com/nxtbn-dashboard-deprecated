import React from 'react';
import logo from './assets/nxtbn_logo_black.svg';

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="flex flex-col items-center justify-center flex-grow">
        <img src={logo} className="w-64 h-auto mb-8" alt="logo" />
        <h1 className="text-3xl font-bold mb-4">Welcome to My Tailwind App</h1>
        <p className="text-lg text-center mb-6">
          NextBN - Next Billion Native Commerce, is an advanced CMS built with Django and ReactJS.
          It provides a robust platform for building scalable and efficient e-commerce solutions.
          Explore its features and capabilities to elevate your online business.
        </p>
        <a
          className="mt-4 text-blue-600 underline"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
