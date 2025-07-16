import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            alt="Logo"
            className="h-8"
          />
          <span className="text-2xl font-semibold text-gray-800">Flowbite</span>
        </div>

        {/* Center: Search */}
        <div className="flex-1 mx-4">
          <div className="relative w-full max-w-md mx-auto">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="w-4 h-4 text-gray-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14z"
                />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Right: Menu links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/blogadd" className="text-gray-700 hover:text-blue-600">
            Create Blogs
          </Link>
          <Link to="/login" className="text-gray-700 hover:text-blue-600">
            Login
          </Link>
          <Link to="/register" className="text-gray-700 hover:text-blue-600">
            Register
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button className="p-2 text-gray-700 hover:text-blue-600">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
