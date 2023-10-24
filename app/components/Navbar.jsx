import Link from 'next/link'
import React from 'react'
import { FaHome, FaRProject, FaServicestack, FaUser } from "react-icons/fa";
import { GoCodeReview } from 'react-icons/go'

export default function Navbar() {
  return (
    <div>
      <div className="absolute top-0 left-0 mix-blend-color-dodge z-10 w-[200px] lg:w-[400px] opacity-50">
        <img src="" alt="top-left" />
      </div>
      <nav className="flex flex-col items-center lg:justify-center gap-y-4 fixed h-max bottom-0 mt-auto lg:right-[2%] z-50 top-0 w-full lg:w-16 lg:max-w-md lg:h-screen">
        <div className="flex w-full lg:flex-col items-center text-white justify-between lg:justify-center gap-y-10 px-4 md:px-40 lg:px-0 h-[80px] lg:h-max pb-4 md:py-8 bg-white/10 backdrop-blur-sm text-3xl lg:text-xl lg:rounded-full">
          <Link
            href="/"
            className="text-red-600 hover:text-red-600 hover:opacity-50 duration-200 ease-in-out hover:translate-x-2"
          >
            <FaHome size={24} />
          </Link>
          <Link
            href="/about"
            className="hover:text-red-600 duration-200 ease-in-out hover:translate-x-2"
          >
            <FaUser size={24} />
          </Link>
          <Link
            href="/services"
            className="hover:text-red-600 duration-200 ease-in-out hover:translate-x-2"
          >
            <FaServicestack size={24} />
          </Link>
          <Link
            href="/project"
            className="hover:text-red-600 duration-200 ease-in-out hover:translate-x-2"
          >
            <FaRProject size={24} />
          </Link>
          <Link
            href="/reviews"
            className="hover:text-red-600 duration-200 ease-in-out hover:translate-x-2"
          >
            <GoCodeReview size={24} />
          </Link>
        </div>
      </nav>
    </div>
  );
}
