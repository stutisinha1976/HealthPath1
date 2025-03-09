import React from 'react';
import Navbar from '../landing/Navbar'; // Import the Navbar component
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Options = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  return (
    <div className="w-full bg-[#FFF2F2] font-mono min-h-screen flex flex-col">
      {/* Navbar Component */}
      <Navbar />

      {/* Content Section */}
      <div className="flex flex-col items-center justify-center flex-grow text-center px-4">
        <h1 className="text-4xl font-bold text-[#2D336B]">Smart Health Analysis Starts Here</h1>
        <p className="text-xl text-gray-700 mt-4 w-full md:w-3/4">
          Upload an image to get AI-powered insights.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 w-full md:w-3/4">
          {/* Option 1: Upload Picture of Your Plate */}
          <div className="p-6 shadow-lg rounded-lg bg-white border-t-4 border-[#7886C7] hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-[#2D336B]">Upload Your XRay Plate</h3>
            <p className="text-gray-600 mt-2">Get AI analysis of your Xray scans.</p>
            <button
              className="mt-4 px-6 py-3 bg-[#7886C7] text-white font-semibold rounded-lg hover:bg-[#5a6fb9] transition"
              onClick={() => navigate('/chat')} // Corrected navigate usage
            >
              Upload Now
            </button>
          </div>

          {/* Option 2: Upload Picture of Blood Test Report */}
          <div className="p-6 shadow-lg rounded-lg bg-white border-t-4 border-[#7886C7] hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-[#2D336B]">Upload Blood Test Report</h3>
            <p className="text-gray-600 mt-2">Let AI analyze your health report.</p>
            <button
              className="mt-4 px-6 py-3 bg-[#7886C7] text-white font-semibold rounded-lg hover:bg-[#5a6fb9] transition"
              onClick={() => navigate('/chat')} // Corrected navigate usage
            >
              Upload Now
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-[#2D336B] text-white text-center py-6 mt-12">
        <p>&copy; 2025 Health Path AI. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Options;