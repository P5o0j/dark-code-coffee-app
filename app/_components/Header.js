"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import Logo from "./Logo";
import CartModal from "./CartModal";

import { FaShoppingBasket } from "react-icons/fa";
import CartItems from "./CartItems";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const modal = useRef();

  function handleOpenCartClick() {
    setIsOpen(true);
  }
  function HnadleCloseModal() {
    setIsOpen(false);
  }

  return (
    <nav className="p-2 ">
      <div className="flex items-center justify-between">
        {/* <div className="text-white text-2xl font-bold">Logo</div> */}
        <Logo />
        <div className="flex justify-self-center lg:justify-end lg:w-[50%]">
          <CartModal ref={modal} onClose={HnadleCloseModal} open={isOpen}>
            <CartItems />
          </CartModal>

          <button onClick={handleOpenCartClick}>
            <FaShoppingBasket size="20" />
          </button>
        </div>
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
          <Link href="/" className="text-white px-3 py-2 rounded-md">
            Home
          </Link>
          <Link href="/range" className="text-white px-3 py-2 rounded-md">
            Our Range
          </Link>
          <Link href="/gallery" className="text-white px-3 py-2 rounded-md">
            Gallery
          </Link>
          <Link href="/contact" className="text-white px-3 py-2 rounded-md">
            Contact Us
          </Link>
        </div>
      </div>
      <div className={`lg:hidden ${isOpen ? "block" : "hidden"} text-right`}>
        {/* Dropdown Menu Items */}
        <Link href="/" className="block text-white px-3 py-2 rounded-md">
          Home
        </Link>
        <Link href="/range" className="block text-white px-3 py-2 rounded-md">
          Our Range
        </Link>
        <Link href="/gallery" className="block text-white px-3 py-2 rounded-md">
          Gallery
        </Link>
        <Link href="/contact" className="block text-white px-3 py-2 rounded-md">
          Contact Us
        </Link>
      </div>
    </nav>
  );
}

export default Header;
