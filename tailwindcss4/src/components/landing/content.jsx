import React from 'react';

const Content = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-[#F8FAFC] px-10">
      
      {/* First Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full max-w-6xl">
        <img src="xray.png" alt="Medical Report" className="w-80 h-80 rounded-full border-4 border-[#7886C7] shadow-lg mx-auto" />
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-[#2D336B]">
            Upload Your Medical Report
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            Let our AI analyze and detect potential conditions in seconds, providing you with insights instantly.
          </p>
          <button className="mt-6 px-6 py-3 bg-[#7886C7] text-white font-semibold rounded-lg hover:bg-[#5a6fb9] transition">
            Upload Now
          </button>
        </div>
      </div>

      {/* Second Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full max-w-6xl mt-20">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-[#2D336B]">
            Get Personalized Recommendations
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            Connect with top medical professionals near you and receive expert guidance based on your reports.
          </p>
          <button className="mt-6 px-6 py-3 bg-[#7886C7] text-white font-semibold rounded-lg hover:bg-[#5a6fb9] transition">
            Find Experts
          </button>
        </div>
        <img src="doctor.jpg" alt="Medical Consultation" className="w-80 h-80 rounded-full border-4 border-[#7886C7] shadow-lg mx-auto" />
      </div>

    </div>
  );
};

export default Content;
