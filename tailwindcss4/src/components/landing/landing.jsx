import React from 'react';
import Content from './content'; // Import the Content component

const Landing = () => {
  return (
    <div className="w-full bg-[#FAF9F6] font-serif">
      {/* Header (optional) */}
      <nav className="w-full bg-blue-800 text-white p-8 text-4xl flex items-center justify-between">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Health Path AI</h1>
        </div>
        <div className="flex space-x-4 gap-6">
          <button className="bg-transparent text-white text-2xl hover:text-gray-200 focus:outline-none">
            About us
          </button>
          <button className="bg-transparent text-white text-2xl hover:text-gray-200 focus:outline-none">
            Featured
          </button>
          <button className="bg-transparent text-white text-2xl hover:text-gray-200 focus:outline-none">
            Login/Signup
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="w-full">
        <Content /> {/* Render the Content component here */}
      </main>

      {/* Footer (optional) */}
    </div>
  );
};

export default Landing;