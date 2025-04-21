import React from "react";

const navbar = () => {
  return (
    <nav className="top-0 z-50 sticky bg-white shadow-sm">
      <div className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        <div>
          <span className="text-[#7e69aa] text-xl font-bold">Future</span>
          <span className="text-xl font-bold">Talent AI</span>
        </div>
        <div className="text-[#555555]  w-1/2 flex justify-center">
          <ul className="inline-flex  space-x-8">
            <li>Features </li>
            <li>Integrations </li>
            <li>Languages </li>
            <li>About </li>
          </ul>
        </div>
        <div className="flex justify-center items-center space-x-5">
          <button className="border border-[#7e69aa] p-2 rounded-md text-[#7e69aa] w-18 text-center text-sm">
            Login
          </button>
          <button className="bg-[#7e69aa] text-white p-2 rounded-md text-sm">
            Request Demo
          </button>
        </div>
      </div>
    </nav>
  );
};

export default navbar;
