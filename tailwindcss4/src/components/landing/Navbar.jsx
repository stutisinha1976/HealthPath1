import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="w-full bg-[#7886C7] font-mono text-white px-6  text-3xl flex items-center justify-between sticky top-0 ">
      <div className="text-center">
        <img src="logo.png" alt="Health Path AI" className="w-40 h-30" />
      </div>
      <div className="flex space-x-6">
        <button 
          className="bg-transparent text-white text-xl hover:text-gray-200 focus:outline-none"
          onClick={() => navigate('/')}
        >
          Home
        </button>
        <button className="bg-transparent text-white text-xl hover:text-gray-200 focus:outline-none">
          About us
        </button>
        <button className="bg-transparent text-white text-xl hover:text-gray-200 focus:outline-none">
          Features
        </button>
        <button className="bg-transparent text-white text-xl border px-4 py-2 rounded-lg hover:bg-white hover:text-[#7886C7] transition">
          Login / Signup
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
