import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Content from './content';
import Navbar from './Navbar';

const Landing = () => {
  const [isComplete, setIsComplete] = useState(false);
  const navigate = useNavigate(); // Initialize navigation

  useEffect(() => {
    const timer = setTimeout(() => setIsComplete(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full bg-[#FFF2F2] font-mono">
      <Navbar />

      {/* Hero Section */}
      <div className="w-full flex flex-col items-center justify-center text-center py-20 bg-gradient-to-r from-[#FFDEE9] to-[#B5FFFC]">
        <h1 className={`text-6xl font-bold text-[#2D336B] typewriter ${isComplete ? "complete" : ""}`}>
          Welcome to Health Path AI
        </h1>
        <p className="text-xl text-[#333] mt-4 w-3/4">
          Revolutionizing healthcare with AI-powered diagnostics and personalized recommendations.
        </p>
        <button
          className="mt-6 bg-[#7886C7] text-white text-lg px-6 py-3 rounded-full hover:bg-[#5D6AB0] transition"
          onClick={() => navigate('/options')} // Navigate to Options page
        >
          Get Started
        </button>
      </div>

      {/* Why Choose Us Section */}
      <div className="w-full flex flex-col items-center text-center py-16 bg-[#FFF5F5]">
        <h2 className="text-4xl font-bold text-[#2D336B]">Why Choose Health Path AI?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 w-3/4">
          <div className="p-6 shadow-lg rounded-lg bg-white border-t-4 border-[#7886C7]">
            <h3 className="text-2xl font-bold">Instant Analysis</h3>
            <p className="text-gray-600 mt-2">Get AI-powered insights from your medical reports within seconds.</p>
          </div>
          <div className="p-6 shadow-lg rounded-lg bg-white border-t-4 border-[#7886C7]">
            <h3 className="text-2xl font-bold">Trusted by Experts</h3>
            <p className="text-gray-600 mt-2">Our technology is developed in collaboration with top healthcare professionals.</p>
          </div>
          <div className="p-6 shadow-lg rounded-lg bg-white border-t-4 border-[#7886C7]">
            <h3 className="text-2xl font-bold">Personalized Advice</h3>
            <p className="text-gray-600 mt-2">Receive tailored recommendations for your health needs.</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="w-full">
        <Content />
      </main>

      {/* Footer */}
      <footer className="w-full bg-[#2D336B] text-white text-center py-6 mt-12">
        <p>&copy; 2025 Health Path AI. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Landing;
