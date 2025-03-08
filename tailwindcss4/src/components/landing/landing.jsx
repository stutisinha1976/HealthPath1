import React, { useEffect, useState } from 'react';
import Content from './content'; // Import the Content component

const Landing = () => {
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsComplete(true), 5000); // 4s typewriter + 1s delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full bg-[#FFF2F2] font-mono">
      {/* Header */}
      <nav className="w-full bg-[#7886C7] text-white p-6 text-3xl flex items-center justify-between">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Health Path AI</h1>
        </div>
        <div className="flex space-x-6">
          <button className="bg-transparent text-white text-xl hover:text-gray-200 focus:outline-none">
            About us
          </button>
          <button className="bg-transparent text-white text-xl hover:text-gray-200 focus:outline-none">
            Featured
          </button>
          <button className="bg-transparent text-white text-xl border px-4 py-2 rounded-lg hover:bg-white hover:text-[#7886C7] transition">
            Login / Signup
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="w-full flex flex-col items-center justify-center text-center py-20 bg-gradient-to-r from-[#FFDEE9] to-[#B5FFFC]">
        <h1 className={`text-6xl font-bold text-[#2D336B] typewriter ${isComplete ? "complete" : ""}`}>
          Welcome to Health Path AI
        </h1>
        <p className="text-xl text-[#333] mt-4 w-3/4">
          Revolutionizing healthcare with AI-powered diagnostics and personalized recommendations.
        </p>
        <button className="mt-6 bg-[#7886C7] text-white text-lg px-6 py-3 rounded-full hover:bg-[#5D6AB0] transition">
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
