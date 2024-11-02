import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              Careers Find
            </Link>
          </div>

          
        </div>
      </div>

      {/* Mobile Navigation Links */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/home" className="block text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link to="/jobs" className="block text-gray-700 hover:text-blue-600">
              Jobs
            </Link>
            <Link to="/about" className="block text-gray-700 hover:text-blue-600">
              About
            </Link>
            <Link to="/contact" className="block text-gray-700 hover:text-blue-600">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
