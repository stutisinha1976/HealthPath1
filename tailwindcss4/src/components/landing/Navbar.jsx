import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full bg-[#7886C7] text-white p-6 text-3xl flex items-center justify-between sticky top-0 z-10">
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
  );
};

export default Navbar;
