"use client"

import Link from 'next/link';
import { useState } from 'react';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" p-4">
      <div className="flex items-center justify-between">
        <div className="text-white text-2xl font-bold">Logo</div>
        <div className="lg:hidden">
          <button
            type="button"
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:items-center lg:space-x-4">
          {/* Menu Items */}
          <Link href="#" className="text-white px-3 py-2 rounded-md">Home 1</Link>
          <Link href="#" className="text-white px-3 py-2 rounded-md">About</Link>
          <Link href="#" className="text-white px-3 py-2 rounded-md">Services</Link>
          <Link href="#" className="text-white px-3 py-2 rounded-md">Contact</Link>
        </div>
      </div>
      <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'} text-right`}>
        {/* Dropdown Menu Items */}
        <Link href="#" className="block text-white px-3 py-2 rounded-md">Home</Link>
        <Link href="#" className="block text-white px-3 py-2 rounded-md">About</Link>
        <Link href="#" className="block text-white px-3 py-2 rounded-md">Services</Link>
        <Link href="#" className="block text-white px-3 py-2 rounded-md">Contact</Link>
      </div>
    </nav>
  );
};

export default Menu;